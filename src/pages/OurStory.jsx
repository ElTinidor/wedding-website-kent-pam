import Divider from '../components/Divider'
import photo1 from '../assets/1.jpg'
import photo2 from '../assets/2.jpg'
import photo3 from '../assets/3.jpg'
import photo4 from '../assets/4.jpg'
import photo5 from '../assets/5.jpg'
import photo6 from '../assets/6.jpeg'
import photo7 from '../assets/7.jpg'
import photo8 from '../assets/8.jpg'
import photo9 from '../assets/9.jpg'
import photo10 from '../assets/10.jpg'
import photo11 from '../assets/11.jpeg'
import photo12 from '../assets/12.jpeg'
import photo13 from '../assets/13.jpeg'
import photo14 from '../assets/14.jpeg'
import photo15 from '../assets/15.jpeg'

const chapters = [
  {
    year: 'Growing Up',
    title: 'Before We Met',
    photos: [photo1, photo2],
    text: `Long before our paths crossed, we were just two kids in Mandaue and Lapu-Lapu City growing up on
    our own separate adventures, never guessing we'd one day share a lifetime.`,
  },
  {
    year: '2011',
    title: 'High School Beginnings',
    photos: [photo3, photo4],
    flower: true,
    text: `We started high school at Mandaue City Comprehensive National High School,
    but in different sections. Pamela was always the top student in her class, while Kenneth was the quiet, shy one in the back of the room. `,
  },
  {
    year: '2012 to 2013',
    title: 'Bluejay Section',
    photos: [photo6],
    text: `Second year, we landed in the same section, Bluejay. Pamela asked the class
    for a 10-peso contribution one day, and that was it: glasses, cute, pretty, Kenneth
    was smitten. An anonymous prank text that summer turned into daily texts and
    Facebook chats. By third year, Kenneth gave a Christmas-gift to Pamela. By fourth
    year, the whole class had heard the rumors. There were 5 PM waits by the 7-Eleven
    just to say hi, awkward encounters, and one particular walk in the
    rain with "Walking in the Rain" playing in Kenneth's head the whole time.`,
  },
  {
    year: 'December 2013',
    title: 'The Confession',
    photos: [photo5],
    text: `Kenneth confessed to Pamela by text. Turned out Pamela had been quietly carrying the
    same feelings since September, she just never told a soul.`,
  },
  {
    year: '2014',
    title: 'High School Graduation',
    photos: [photo7],
    text: `We graduated high school together, medals and diplomas in hand, ready for
    whatever came next.`,
  },
  {
    year: '2015 to 2021',
    title: 'College Years',
    photos: [photo8],
    text: `Kenneth studied Computer Engineering at University of San Carlos, Pamela took
    Accounting at University of San Jose-Recoletos. Even while studying at different
    universities, we continued making time for one another. Many afternoons were spent
    waiting outside USJ-R for classes to end, followed by dates at Plaza Independencia.
    After graduation, Kenneth courted Pamela properly, and on March 6, 2021, we made it
    official.`,
  },
  {
    year: '2023',
    title: 'Our First Trips Together',
    photos: [photo12, photo9],
    text: `Our first international trips together, Singapore and Malaysia. New cities,
    new memories, and new adventures, always better when experienced side by side.`,
  },
  {
    year: '2024 to 2025',
    title: 'Finding Our Way Back',
    photos: [photo11, photo13],
    text: `Through distance, change, and new chapters in our lives, we continued finding
    our way back to each other. With patience, honest conversations, handwritten
    letters, and renewed commitment, our relationship became stronger and more certain.`,
  },
  {
    year: 'May 18, 2025',
    title: 'Together Again',
    photos: [photo14],
    text: `Kenneth asked if he could be her boyfriend again, gifted her with 18 flowers since it was May 18, 2025.`,
  },
  {
    year: 'October 18, 2025',
    title: 'The Proposal',
    photos: [photo10],
    text: `In Hong Kong and Macau, in front of the Eiffel Tower replica at The Parisian
    Macau, Kenneth proposed, with the ring nestled in a Quidditch-inspired holder, a nod
    to Pamela's love for Harry Potter. He'd set up a tripod to catch the moment on
    timer, only to realize afterward it had recorded a video instead. Some things you
    just can't plan perfectly. She said yes anyway.`,
  },
  {
    year: '2026',
    title: 'Today',
    photos: [photo15],
    text: `Pamela followed Kenneth to Manila for work, and in June 2026 we took our casual prenup
    photos on the streets of Taiwan. And now, we're finally ready to say "I do."`,
  },
]

export default function OurStory() {
  return (
    <section className="page our-story">
      <h1>Our Story</h1>
      <Divider />
      <p className="story-salutation">Dear Family & Friends,</p>
      <p className="story-intro">
        From two different sections in high school to the two names on a wedding
        invitation, here's a little of how we got here.
      </p>

      <div className="story-timeline">
        {chapters.map((chapter) => {
          const primaryPhoto = chapter.photos?.[0]
          const hasSecondaryPhoto = chapter.photos?.length > 1
          const secondaryPhoto = chapter.photos?.[1]

          return (
            <article className="story-feature" key={chapter.title}>
              <div className="story-feature-header">
                <span className="story-year">{chapter.year}</span>
                <h2>{chapter.title}</h2>
              </div>
              <div className={'story-feature-body' + (hasSecondaryPhoto ? '' : ' is-single') }>
                <div className="story-photo-slot story-feature-photo story-feature-photo-left">
                  <img src={primaryPhoto} alt={chapter.title} />
                </div>
                <div className="story-feature-text">
                  <p>{chapter.text}</p>
                </div>
                {hasSecondaryPhoto && (
                  <div className="story-photo-slot story-feature-photo story-feature-photo-right">
                    <img src={secondaryPhoto} alt={chapter.title} />
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
