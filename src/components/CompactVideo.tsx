import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Click-to-load video. Renders a poster/placeholder until clicked.
 * Avoids loading the video file on initial page render — fixes slow page loads.
 */
export function CompactVideo({ src, poster }: { src: string; poster?: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="overflow-hidden rounded-xl border border-line bg-bg-0">
        <video
          src={src}
          poster={poster}
          autoPlay
          controls
          playsInline
          disablePictureInPicture
          controlsList="nofullscreen nodownload noremoteplayback"
          className="h-auto max-h-[220px] w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group relative block w-full overflow-hidden rounded-xl border border-line bg-gradient-to-br from-bg-2 to-bg-3 transition hover:border-gold-500/40"
      aria-label="Play video"
    >
      <div
        className="flex aspect-video max-h-[220px] w-full items-center justify-center bg-cover bg-center"
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg-0/80 via-bg-0/30 to-transparent" />
        <div className="relative flex size-12 items-center justify-center rounded-full bg-gold-500/90 text-bg-0 shadow-2xl transition group-hover:scale-110 group-hover:bg-gold-400 md:size-14">
          <Play className="size-5 translate-x-0.5 fill-current md:size-6" strokeWidth={2.5} />
        </div>
      </div>
    </button>
  );
}
