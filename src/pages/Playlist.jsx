import Divider from '../components/Divider'

export default function Playlist() {
  const playlistId = import.meta.env.VITE_SPOTIFY_PLAYLIST_ID

  return (
    <section className="page playlist">
      <h1 className="playlist-title">
        <span>Kent and Pam - The</span>
        <span>Soundtrack of Us</span>
      </h1>
      <Divider />
      <p>
        Every love story has a soundtrack, and this is ours. From the first song
        he played on his guitar back in high school, Pangarap Lang Kita, to the
        kilig moments, love songs, heartbreaks, second chances, and everything
        in between. Every song holds a memory, every melody tells a story, and
        every chapter brought us here.
      </p>
      <p>
        And now, after all these years, we get to dance to our forever song, Can
        I Have This Dance?
      </p>
      <p>From our first song to our first dance, this is the story of us. ♡</p>
      {playlistId ? (
        <iframe
          title="Kent and Pam - The Soundtrack of Us"
          style={{ borderRadius: '12px' }}
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
          width="100%"
          height="452"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      ) : (
        <p>Set VITE_SPOTIFY_PLAYLIST_ID in your .env to embed the playlist.</p>
      )}
    </section>
  )
}
