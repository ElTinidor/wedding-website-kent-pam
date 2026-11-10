import { useRef } from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useSpring } from 'motion/react'
import Divider from '../components/Divider'
import LightboxImage from '../components/LightboxImage'
import photo1 from '../assets/1.webp'
import photo2 from '../assets/2.webp'
import photo3 from '../assets/3.webp'
import photo4 from '../assets/4.webp'
import photo5 from '../assets/5.webp'
import photo6 from '../assets/6.webp'
import photo7 from '../assets/7.webp'
import photo8 from '../assets/8.webp'
import photo9 from '../assets/9.webp'
import photo10 from '../assets/10.webp'
import photo11 from '../assets/11.webp'
import photo12 from '../assets/12.webp'
import photo13 from '../assets/13.webp'
import photo14 from '../assets/14.webp'
import photo15 from '../assets/15.webp'
import photo18 from '../assets/18.webp'

const chapters = [
  {
    year: 'Growing Up',
    title: 'Before We Met',
    photos: [photo2, photo1],
    text: `Long before our paths crossed, we were just two kids in Lapu-Lapu and Mandaue City, living
    separate lives and never imagining we'd one day spend our lives together.`,
  },
  {
    year: '2011',
    title: 'High School Beginnings',
    photos: [photo4, photo3],
    mirroredPhotos: [photo4],
    flower: true,
    text: `We started high school at Mandaue City Comprehensive National High School,
    but in different sections. Pamela was always the top student in her class, while Kenneth was the quiet, shy one at the back of the room. `,
  },
  {
    year: '2012 to 2013',
    title: 'Bluejay Section',
    photos: [photo6],
    text: `Second year, we landed in the same section, Bluejay. Pamela asked the class
    for a 10-peso contribution one day, and that was it: Kenneth noticed her glasses,
    thought she was cute and pretty, and was smitten. By September 2013, in third year, a lunch break hangout
    during the school Math and Science Fair at the Annex Campus led to a memorable moment.
    Kenneth was encouraged to play the guitar, and he played "Pangarap Lang Kita."
    Pamela was amazed, and little did Kenneth know, she was beginning to develop a
    crush on him, too. During the semestral break, an anonymous prank text turned
    into daily texts and Facebook chats. Kenneth later gave Pamela a Christmas gift.`,
  },
  {
    year: 'December 2013 to 2014',
    title: 'The Confession',
    photos: [photo5],
    mirroredPhotos: [photo5],
    text: `In December 2013, Kenneth finally confessed his feelings to Pamela through
    a text message. Little did he know, Pamela had been quietly carrying the same
    feelings since September, keeping her little crush a secret from everyone. By
    fourth year, the whole class had heard the rumors. There were 5 PM waits by the
    7-Eleven just to say hi, awkward encounters, and one particular walk in the rain
    with "Walking in the Rain" playing in Kenneth's head the whole time.`,
  },
  {
    year: '2015',
    title: 'High School Graduation',
    photos: [photo7],
    mirroredPhotos: [photo7],
    text: `We graduated high school together, medals and diplomas in hand, ready for
    whatever came next. Kenneth wanted a photo with Pamela but was too shy to ask,
    so his mom stepped in and asked Pamela for him. A little photo, a little courage
    borrowed from Mom, and another sweet memory to keep.`,
  },
  {
    year: '2015 to 2021',
    title: 'College Years',
    photos: [photo8],
    text: `Kenneth pursued Computer Engineering at the University of San Carlos, while
    Pamela took Accountancy at the University of San Jose-Recoletos. Despite studying
    at different universities, they always found time for each other. Many afternoons
    were spent waiting outside USJ-R for classes to end, followed by dates at Plaza
    Independencia. After graduation, Kenneth finally courted Pamela properly. And on
    March 6, 2021, after years of friendship, stolen moments, and unspoken feelings,
    they officially became a couple.`,
  },
  {
    year: '2023',
    title: 'Our First Trips Together',
    photos: [photo12, photo9],
    mirroredPhotos: [photo12, photo9],
    text: `Our first international adventures took us to Singapore and Malaysia. From
    exploring new cities to discovering new places, every trip gave us memories to
    cherish. Different destinations, countless firsts, and the same favorite travel
    companion.`,
  },
  {
    year: '2024 to 2025',
    title: 'Finding Our Way Back',
    photos: [photo11, photo13],
    mirroredPhotos: [photo13],
    text: `Not every chapter was easy. We went through heartbreak, distance, and changes
    that led us down separate paths. But sometimes, love finds its way back. Through
    honest conversations, handwritten letters, patience, and a renewed commitment, we
    found our way back to each other, this time with a deeper understanding of what we
    meant to one another.`,
  },
  {
    year: 'May 18, 2025',
    title: 'Together Again',
    photos: [photo14],
    text: `After Pamela gave Kenneth a second chance, he immediately booked a flight
    back to Cebu, determined to court her all over again. On May 18, 2025, Kenneth
    brought Pamela two bouquets of nine roses, 18 in all, to mark the 18th day of May
    and asked Pamela if he could be her boyfriend again. After everything they had been through, they chose each other
    once more, ready to begin a new chapter together.`,
  },
  {
    year: 'October 18, 2025',
    title: 'The Proposal',
    photos: [photo10],
    mirroredPhotos: [photo10],
    text: `During their trip to Hong Kong and Macau, Kenneth chose the Eiffel Tower
    replica at The Parisian Macau as the place to ask Pamela to spend forever with him.
    The ring was tucked inside a Quidditch-inspired holder, a thoughtful nod to Pamela's
    love for Harry Potter. Kenneth even set up a tripod to capture the moment, hoping
    to get a perfect photo on timer, only to discover later that it had recorded a video
    instead. When Kenneth popped the question, Pamela's first reaction was, "Did you
    ask my parents about this first?" A little unexpected question in the middle of a
    big romantic moment! But of course, she said yes.`,
  },
  {
    year: '2026',
    title: 'The Road to Forever',
    photos: [photo15, photo18],
    mirroredPhotos: [photo15],
    text: `Pamela followed Kenneth to Manila as they began building a life together in
    a new city. In June 2026, they went on their third international adventure to
    Taiwan, where they also captured their casual prenup photos along its charming
    streets. From high school classmates to travel companions, from heartbreak to
    second chances, every chapter led them here. And now, they're finally ready to say
    "I do."`,
  },
]

export default function OurStory() {
  const timelineRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 70%'],
  })
  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <LazyMotion features={domAnimation}>
      <section className="page our-story">
        <h1>Our Story</h1>
        <Divider />
        <p className="story-salutation">Dear Family & Friends,</p>
        <p className="story-intro">
          From two different sections in high school to the two names on a wedding
          invitation, here's a little of how we got here.
        </p>

        <div className="story-timeline" ref={timelineRef}>
          <span className="story-timeline-track" aria-hidden="true" />
          <m.span
            className="story-timeline-progress"
            aria-hidden="true"
            style={{ scaleY: prefersReducedMotion ? 0 : timelineProgress }}
          />
          {chapters.map((chapter) => {
          const primaryPhoto = chapter.photos?.[0]
          const hasSecondaryPhoto = chapter.photos?.length > 1
          const secondaryPhoto = chapter.photos?.[1]
          const mirroredPhotos = chapter.mirroredPhotos ?? []

          return (
            <m.article
              className="story-feature"
              key={chapter.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <m.span
                className="story-timeline-marker"
                aria-hidden="true"
                initial={prefersReducedMotion ? false : { scale: 0.7 }}
                whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
              <m.div
                className="story-feature-header"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <span className="story-year">{chapter.year}</span>
                <h2>{chapter.title}</h2>
              </m.div>
              <div className={'story-feature-body' + (hasSecondaryPhoto ? '' : ' is-single') }>
                <m.div
                  className="story-photo-slot story-feature-photo story-feature-photo-left"
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
                >
                  <LightboxImage
                    src={primaryPhoto}
                    alt={`${chapter.title} photo`}
                    mirrored={mirroredPhotos.includes(primaryPhoto)}
                  />
                </m.div>
                <m.div
                  className="story-feature-text"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
                >
                  <p>{chapter.text}</p>
                </m.div>
                {hasSecondaryPhoto && (
                  <m.div
                    className="story-photo-slot story-feature-photo story-feature-photo-right"
                    initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
                  >
                    <LightboxImage
                      src={secondaryPhoto}
                      alt={`${chapter.title} photo`}
                      mirrored={mirroredPhotos.includes(secondaryPhoto)}
                    />
                  </m.div>
                )}
              </div>
            </m.article>
          )
          })}
        </div>
      </section>
    </LazyMotion>
  )
}
