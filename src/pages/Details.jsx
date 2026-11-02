import { QRCodeSVG } from 'qrcode.react'
import Divider from '../components/Divider'
import LightboxImage from '../components/LightboxImage'
import weddingAttireGuide from '../assets/weddingAttireGuide.jpg'
import principalSponsorGuide from '../assets/principalSponsor.jpg'
import guestAttireGuide from '../assets/guestAttire.jpg'
import churchPhoto from '../assets/16.webp'
import ballroomPhoto from '../assets/17.webp'
import metrobankGiftQr from '../assets/gift-qr-metrobank.jpg'

const schedule = [
  {
    time: '2:00 PM - 4:00 PM',
    title: 'Wedding Ceremony',
    note: 'After the ceremony, guests may proceed to the reception venue.',
  },
  {
    time: '4:00 PM - 5:00 PM',
    title: 'Travel to Reception Venue',
    note: 'After the ceremony, guests may proceed to the reception venue.',
  },
  {
    time: '5:00 PM - 7:00 PM',
    title: 'Cocktail Hour',
    note: 'Enjoy pica-pica and have your photos taken by our roving photographer.',
  },
  {
    time: '7:00 PM - 11:00 PM',
    title: 'Reception Program',
    note: 'Dinner, games, family dances, and celebration.',
  },
]

const venues = [
  {
    label: 'Ceremony',
    name: 'National Shrine of St. Joseph',
    address: 'Mandaue City, Cebu, Philippines',
    mapQuery: 'National Shrine of St. Joseph Mandaue Cebu',
    image: churchPhoto,
    imageAlt: 'Exterior of the National Shrine of St. Joseph',
  },
  {
    label: 'Reception',
    name: 'Montebello Villa Hotel',
    room: 'Luis Y Merceditas Ballroom',
    address: 'Banilad, Cebu City, Philippines',
    mapQuery: 'Montebello Villa Hotel Banilad Cebu',
    image: ballroomPhoto,
    imageAlt: 'Luis Y Merceditas Ballroom at Montebello Villa Hotel',
  },
]

const faqs = [
  {
    q: 'What should I wear?',
    a: "We'd love to see you in semi-formal to formal attire. Please do not wear white, ivory, and other shades of white, those are reserved for the bride and groom. Refer to our attire guide below for inspiration.",
    attireGuide: true,
  },
  {
    q: 'Do you have a gift registry?',
    a: "Your presence is truly the greatest gift. If you'd like to give something more, a monetary gift is warmly appreciated and will help us start our new chapter together. Simply scan the QR code below.",
    qr: true,
  },
  {
    q: 'Is parking available at the venues?',
    a: 'Yes, both the church and reception venue have parking available for guests. We recommend arriving a little early to settle in comfortably.',
  },
  {
    q: 'When should I RSVP by?',
    a: 'Please RSVP through our RSVP tab as soon as you can so we can finalize headcounts and seating. We appreciate your prompt response!',
  },
]

const attirePalettes = [
  {
    title: 'Principal Sponsors',
    colors: [
      { name: 'Beige', color: '#d8c09e' },
      { name: 'Champagne', color: '#e2cba9' },
      { name: 'Skin Tone', color: '#c99580' },
    ],
  },
  {
    title: 'Secondary Sponsors',
    colors: [
      { name: 'Copper Rose (women)', color: '#c87968' },
      { name: 'Black (men)', color: '#171717' },
    ],
  },
  {
    title: 'Guests',
    colors: [
      { name: 'Desert Rose', color: '#a97577' },
      { name: 'Copper Rose', color: '#c87968' },
      { name: 'Dusty Rose', color: '#c9878a' },
    ],
  },
]

const entourageGroups = [
  {
    title: 'The Couple',
    columns: [
      {
        title: 'Groom',
        names: ['Engr. Kenneth Kent S. Flores'],
      },
      {
        title: 'Bride',
        names: ['Pamela Ellaine R. Plariza'],
      },
    ],
  },
  {
    title: 'Parents',
    columns: [
      {
        title: "Groom's Parents",
        names: ['Father - Engr. Paul G. Flores', 'Mother - Clarinda S. Flores'],
      },
      {
        title: "Bride's Parents",
        names: ['Father - Elmer C. Plariza', 'Mother - Angelina R. Plariza'],
      },
    ],
  },
  {
    title: 'Principal Sponsors',
    couples: [
      ['Mr. Roel Napa', 'Mrs. Arlyn Catarina'],
      ['Atty. Ramsey Quijano', 'Atty. Renelda Quijano'],
      ['Atty. Josenilio Reoma', 'Mrs. Ophelia Tantuan'],
      ['Mr. Edward Vilbar', 'Mrs. Rebecca Vilbar'],
      ['Archt. Marlone Dolayba', 'Mrs. Jacinta Dulfo'],
      ['Engr. Roderick Richard Yanez', 'Mrs. Marichu Cabanada'],
      ['Mr. Marcelo Go', 'Mrs. Fe Go'],
      ['Mr. Antonio Balibalos', 'Mrs. Beorosa Balibalos'],
      ['Mr. Ronald del Rosario', 'Mrs. Gemma Noval'],
      ['Engr. Samuel Chen', 'Mrs. Anavic Chen'],
      ['Mrs. Maria Theresa Plariza', 'Mrs. Mayflor Planas'],
      ['Mrs. Rizalyn Vestil', 'Mrs. Grace Aberion'],
      ['Mr. Anicieto Gingco', 'Mrs. Anicieta Gingco'],
      ['Mr. Antonio Plariza', 'Mrs. Rosalina Plariza'],
      ['Mr. Erwin Plariza', 'Mrs. Josephine Plariza'],
      ['Mr. Dante Barcoma', 'Mrs. Jocelyn Barcoma'],
      ['Mr. Desederio Mendez', 'Mrs. Marietta Mendez'],
      ['Mr. Edwin Tiayco Pajal', 'Mrs. Marilyn Monilar Pajal'],
      ['Mr. Jose Christopher Pardillo', 'Mrs. Eva Stella Pardillo'],
      ['Mr. Cosme Cabusa', 'Mrs. Emily Cabusa'],
    ],
  },
  {
    title: 'Secondary Sponsors',
    singleColumn: true,
    columns: [
      { title: 'Candle', names: ['Engr. Sonni Lorenz Cubero', 'Engr. Mary Sheeva Cubero'] },
      { title: 'Veil', names: ['Mr. Jonathan Asentista', 'Mrs. Jessamae Asentista'] },
      { title: 'Cord', names: ['Mr. Johnrey David Cabergas', 'Mrs. Norami Cabergas'] },
    ],
  },
  {
    title: 'Best Man & Maid of Honor',
    columns: [
      { title: 'Best Men', names: ['Ralph Joseph Espinosa', 'Engr. Lester Vitor'] },
      { title: 'Maids of Honor', names: ['Phoebe Ann Plariza', 'Kris Dianne Amaba'] },
    ],
  },
  {
    title: 'Groomsmen & Bridesmaids',
    columns: [
      {
        title: 'Groomsmen',
        names: [
          'Engr. John Paul Rodas',
          'Engr. John Paul Ruiz',
          'Engr. Cliff Sean Kyle Otadoy',
          'Engr. Louis Christian Gonzales',
          'Paul John Plariza',
          'Pocholo Adrian Plariza',
        ],
      },
      {
        title: 'Bridesmaids',
        names: [
          'Engr. Gaudiosa Ortega',
          'Camille Arsenal',
          'Andrea Lastimosa',
          'Tesha Senerpida',
          'Airenn Faye Flores',
          'Deanne Trishia Hare',
        ],
      },
    ],
  },
]

export default function Details() {
  return (
    <section className="page details">
      <h1>Wedding Details</h1>
      <Divider />

      <nav className="details-jump">
        <a href="#program">Program</a>
        <a href="#venue">Venue</a>
        <a href="#entourage">Entourage</a>
        <a href="#faq">FAQ</a>
      </nav>

      <div id="program" className="details-section">
        <h2 className="details-heading">Program</h2>
        <ol className="timeline">
          {schedule.map((item) => (
            <li key={item.time}>
              <span className="time">{item.time}</span>
              <div className="schedule-content">
                <span className="title">{item.title}</span>
                {item.note && <span className="schedule-note">{item.note}</span>}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div id="venue" className="details-section">
        <h2 className="details-heading">Venue</h2>
        <div className="venue-list">
          {venues.map((v) => (
            <div className="venue-card" key={v.name}>
              <span className="venue-label">{v.label}</span>
              <h3>{v.name}</h3>
              {v.room && <p className="venue-room">{v.room}</p>}
              <p>{v.address}</p>
              {v.image && <LightboxImage className="venue-image" src={v.image} alt={v.imageAlt} />}
              <div className="venue-map">
                <iframe
                  title={v.name}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(v.mapQuery)}&output=embed`}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                className="venue-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
              <div className="venue-qr">
                <QRCodeSVG
                  value={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.mapQuery)}`}
                  size={110}
                  fgColor="#2e2015"
                  bgColor="#f0e4d3"
                />
                <span>Scan for map</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="entourage" className="details-section">
        <h2 className="details-heading">Wedding Entourage</h2>
        <div className="entourage-groups">
          {entourageGroups.map((group) => (
            <section className={`entourage-card${group.singleColumn ? ' entourage-single-column' : ''}`} key={group.title}>
              <h3>{group.title}</h3>
              {group.couples ? (
                <ul className="principal-sponsor-list">
                  {group.couples.map((couple) => (
                    <li className={couple.length === 1 ? 'is-single' : ''} key={couple.join('|')}>
                      {couple.map((name) => <span key={name}>{name}</span>)}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className={`entourage-columns${group.singleColumn ? ' single-column' : ''}`}>
                  {group.columns.map((column) => (
                    <div className="entourage-column" key={column.title}>
                      <h4>{column.title}</h4>
                      <ul>
                        {column.names.map((name) => <li key={name}>{name}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <div id="faq" className="details-section">
        <h2 className="details-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
              {item.attireGuide && (
                <>
                  <div className="attire-guide-images">
                    <LightboxImage src={weddingAttireGuide} alt="Wedding attire guide" />
                    <LightboxImage src={principalSponsorGuide} alt="Principal sponsor attire guide" />
                    <LightboxImage src={guestAttireGuide} alt="Guest attire guide" />
                  </div>
                  <div className="attire-color-palette">
                    <h4>Attire Color Palette</h4>
                    <p>Choose from the palette for your role. White, ivory, and similar shades are reserved for the couple.</p>
                    <div className="attire-color-groups">
                      {attirePalettes.map((palette) => (
                        <section className="attire-color-group" key={palette.title}>
                          <h5>{palette.title}</h5>
                          <ul className="attire-color-swatches">
                            {palette.colors.map((swatch) => (
                              <li key={swatch.name}>
                                <span
                                  className="attire-color-circle"
                                  style={{ backgroundColor: swatch.color }}
                                  aria-label={`${swatch.name} color`}
                                />
                                <span className="attire-color-name">{swatch.name}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {item.qr && (
                <div className="gift-qr-options">
                  <figure className="gift-qr-option">
                    <figcaption>Metrobank</figcaption>
                    <LightboxImage src={metrobankGiftQr} alt="Metrobank gift QR code" className="gift-qr" />
                    <p className="gift-account-details">
                      Account name: <strong>Kenneth Kent Flores</strong>
                      <br />
                      Account number: <strong>0833924700468</strong>
                    </p>
                  </figure>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
