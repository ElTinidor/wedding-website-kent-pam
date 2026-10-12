import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Divider from '../components/Divider'

const initialForm = {
  name: '',
  companion_name: '',
  attending: 'yes',
  guest_count: 1,
  note: '',
}

const invitationTypes = {
  individual: {
    maxGuests: 1,
    nameLabel: 'Your full name',
    message: 'This invitation reserves one seat for you.',
  },
  'plus-one': {
    maxGuests: 2,
    nameLabel: 'Your full name',
    companionLabel: "Your guest's full name",
    message: 'This invitation reserves up to two seats, including your optional plus-one.',
  },
  couple: {
    maxGuests: 2,
    nameLabel: "First attendee's full name",
    companionLabel: "Second attendee's full name",
    message: 'This invitation reserves up to two seats for the invited couple.',
  },
}

export default function Rsvp() {
  const inviteType = new URLSearchParams(window.location.search).get('invite')
  const invitation = invitationTypes[inviteType]
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | done | error
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (status === 'done') {
      document.querySelector('#rsvp')?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })
    }
  }, [status])

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function updateGuestCount(value) {
    setForm((prev) => ({
      ...prev,
      guest_count: value,
      companion_name: value === '2' ? prev.companion_name : '',
    }))
  }

  function updateAttendance(value) {
    setForm((prev) => ({
      ...prev,
      attending: value,
      ...(value === 'no' ? { guest_count: 1, companion_name: '' } : {}),
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!invitation || !form.name.trim()) return

    setStatus('submitting')
    setErrorMessage('')

    const attending = form.attending === 'yes'
    const guestCount = attending
      ? Math.min(Math.max(Number(form.guest_count) || 1, 1), invitation.maxGuests)
      : 0

    if (attending && guestCount === 2 && !form.companion_name.trim()) {
      setStatus('error')
      setErrorMessage('Please enter the second attendee’s full name.')
      return
    }

    const { error } = await supabase.from('rsvps').insert({
      name: form.name.trim(),
      companion_name: attending && guestCount === 2 ? form.companion_name.trim() : null,
      invitation_type: inviteType,
      attending,
      guest_count: guestCount,
      note: form.note.trim() || null,
    })

    if (error) {
      setStatus('error')
      setErrorMessage(error.message)
      return
    }

    setStatus('done')
  }

  if (!invitation) {
    return (
      <section className="page rsvp">
        <h1>RSVP</h1>
        <Divider />
        <p className="locked-notice">
          Please open the RSVP using the invitation link sent to you.
        </p>
      </section>
    )
  }

  if (status === 'done') {
    return (
      <section className="page rsvp rsvp-success">
        <h1>Thank you!</h1>
        <p>Your RSVP has been recorded. We can't wait to celebrate with you.</p>
      </section>
    )
  }

  return (
    <section className="page rsvp">
      <h1>RSVP</h1>
      <Divider />
      <form onSubmit={handleSubmit} className="rsvp-form">
        <p className="rsvp-invitation-note">{invitation.message}</p>

        <label>
          {invitation.nameLabel}
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
          />
        </label>

        <fieldset>
          <legend>Will you be attending?</legend>
          <label>
            <input
              type="radio"
              name="attending"
              value="yes"
              checked={form.attending === 'yes'}
              onChange={(e) => updateAttendance(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="attending"
              value="no"
              checked={form.attending === 'no'}
              onChange={(e) => updateAttendance(e.target.value)}
            />
            No
          </label>
        </fieldset>

        {form.attending === 'yes' && (
          invitation.maxGuests === 1 ? (
            <p className="rsvp-seat-note">Number of guests: 1</p>
          ) : (
            <label>
              Number of guests (including yourself)
              <select
                value={form.guest_count}
                onChange={(e) => updateGuestCount(e.target.value)}
              >
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
              </select>
            </label>
          )
        )}

        {form.attending === 'yes' && Number(form.guest_count) === 2 && (
          <label>
            {invitation.companionLabel}
            <input
              type="text"
              required
              value={form.companion_name}
              onChange={(e) => updateField('companion_name', e.target.value)}
            />
          </label>
        )}

        <label>
          Message for the couple (optional)
          <textarea
            rows={4}
            value={form.note}
            onChange={(e) => updateField('note', e.target.value)}
          />
        </label>

        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting…' : 'Submit RSVP'}
        </button>

        {status === 'error' && <p className="error">Something went wrong: {errorMessage}</p>}
      </form>
    </section>
  )
}
