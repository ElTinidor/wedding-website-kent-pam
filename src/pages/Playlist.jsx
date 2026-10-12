import Divider from '../components/Divider'

export default function Playlist() {
  const playlistId = import.meta.env.VITE_SPOTIFY_PLAYLIST_ID

  return (
    <section className="page playlist">
      <h1>Our Playlist</h1>
      <Divider />
      <p>Songs we love, request one on your RSVP note if you'd like it added.</p>
      {playlistId ? (
        <iframe
          title="Wedding playlist"
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
