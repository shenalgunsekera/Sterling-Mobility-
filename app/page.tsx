"use client";

import { useRef } from "react";

type VehiclePanel = {
  brand: string;
  model: string;
  description: string;
  cta: string;
  poster: string;
  video: string;
  accent: string;
};

const vehicles: VehiclePanel[] = [
  {
    brand: "Sterling Mobility",
    model: "Geely Livan",
    description: "Refined electric mobility with a clean luxury presence.",
    cta: "Explore Geely Livan",
    poster:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-white-sports-car-driving-down-the-highway-1560418578871?download=1080p",
    accent: "from-stone-200/26 via-transparent to-black/78"
  },
  {
    brand: "Sterling Mobility",
    model: "Henreymincar",
    description: "Compact urban confidence shaped for modern city movement.",
    cta: "Explore Henreymincar",
    poster:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-man-driving-a-car-on-an-open-road-1560419366375?download=1080p",
    accent: "from-amber-100/18 via-transparent to-black/82"
  }
];

function VehicleCard({ panel }: { panel: VehiclePanel }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = async () => {
    if (!videoRef.current) return;
    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
    } catch {
      // Some browsers block autoplay until interaction settles. Poster still covers nicely.
    }
  };

  const pauseVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <article
      className="vehicle-card"
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      onFocus={playVideo}
      onBlur={pauseVideo}
    >
      <div className="vehicle-media">
        <img className="vehicle-poster" src={panel.poster} alt={panel.model} />
        <video
          ref={videoRef}
          className="vehicle-video"
          muted
          loop
          playsInline
          preload="metadata"
          poster={panel.poster}
        >
          <source src={panel.video} type="video/mp4" />
        </video>
        <div className={`vehicle-overlay bg-gradient-to-b ${panel.accent}`} />
      </div>

      <div className="vehicle-content">
        <p className="eyebrow">{panel.brand}</p>
        <h2>{panel.model}</h2>
        <p className="description">{panel.description}</p>
        <button className="ghost-link" type="button">
          {panel.cta}
        </button>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="landing-page">
      <header className="hero-shell">
        <div className="hero-topbar">
          <span className="hero-mark">Sterling Mobility</span>
          <span className="hero-note">Luxury mobility, reintroduced.</span>
        </div>

        <div className="hero-center-brand">
          <p>STRLING</p>
          <span>Mobility</span>
        </div>

        <section className="split-hero" aria-label="Sterling Mobility featured vehicles">
          {vehicles.map((panel) => (
            <VehicleCard key={panel.model} panel={panel} />
          ))}
        </section>
      </header>

      <footer className="site-footer">
        <div>
          <p className="footer-label">Sterling Mobility</p>
          <p className="footer-copy">
            Premium vehicle experiences for a new generation of driving.
          </p>
        </div>

        <div className="footer-meta">
          <span>Geely Livan</span>
          <span>Henreymincar</span>
          <span>Colombo, Sri Lanka</span>
        </div>
      </footer>
    </main>
  );
}
