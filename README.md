# Wedding Website

React (Vite) + Supabase wedding website with an RSVP form, program schedule, and Spotify playlist embed.

## Setup

1. Install deps:
   ```
   npm install
   ```

2. Create a [Supabase](https://supabase.com) project. In the SQL editor, run [supabase/setup.sql](supabase/setup.sql).

   If the original setup was already run before invitation types and companion names were added, run [supabase/rsvp_invitation_migration.sql](supabase/rsvp_invitation_migration.sql) once in the SQL editor.

3. Copy `.env.example` to `.env` and fill in:
   - `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` — from Supabase project settings → API.
   - `VITE_WEDDING_DATE` — must match the date used in `is_before_wedding()` in step 2 (local time is fine here; this only drives the UI, the SQL function is what actually locks uploads).
   - `VITE_SPOTIFY_PLAYLIST_ID` — the ID from your playlist's Spotify share link (`open.spotify.com/playlist/<id>`).

4. Run locally:
   ```
   npm run dev
   ```

## Deploy

Push to a git repo and import into [Vercel](https://vercel.com) (framework preset: Vite). Add the same env vars from `.env` in the Vercel project settings.

## Notes

- RSVPs are stored in the `rsvps` table. View responses via the Supabase Table Editor (no public read access is exposed to guests).
- Share one of these RSVP links, replacing `https://your-domain.com` with the deployed site:
   - Individual: `https://your-domain.com/?invite=individual#rsvp`
   - Optional plus-one: `https://your-domain.com/?invite=plus-one#rsvp`
   - Named couple: `https://your-domain.com/?invite=couple#rsvp`
- Two-seat invitations show a second required attendee-name field only when the guest selects two attendees.
