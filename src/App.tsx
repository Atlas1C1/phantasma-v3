import { useEffect, useState } from "react";
import "./styles.css";

const nodes = [
  "SmartNFTs",
  "Gaming",
  "Marketplace",
  "Wallets",
  "Creators",
  "Ownership",
];

export default function App() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((r) => r + 0.2);
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <div className="grid-background" />

      <header className="navbar">
        <div className="logo">PHANTASMA</div>

        <nav>
          <a href="#">SmartNFTs</a>
          <a href="#">Ecosystem</a>
          <a href="#">Developers</a>
        </nav>

        <button className="nav-btn">Build</button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            WHERE DIGITAL ASSETS COME ALIVE
          </span>

          <h1>
            Digital Assets
            <br />
            That Evolve
          </h1>

          <p>
            The blockchain powering intelligent assets,
            gaming economies, and digital ownership.
          </p>

          <div className="hero-buttons">
            <button className="primary">
              Explore SmartNFTs
            </button>

            <button className="secondary">
              Start Building
            </button>
          </div>
        </div>

        <div className="hero-visual">

          <div
            className="phoenix-system"
            style={{
              transform: `rotate(${rotation}deg)`
            }}
          >
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />

            {nodes.map((node, i) => {
              const angle = (360 / nodes.length) * i;

              return (
                <div
                  key={node}
                  className="orbit-node"
                  style={{
                    transform: `
                      rotate(${angle}deg)
                      translateX(240px)
                      rotate(${-angle}deg)
                    `
                  }}
                >
                  {node}
                </div>
              );
            })}

            <div className="core" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <h2>
            Most Digital Assets Are Static.
            SmartNFTs Are Alive.
          </h2>

          <div className="comparison">

            <div className="comparison-card">
              <h3>Traditional NFT</h3>

              <ul>
                <li>Static</li>
                <li>Fixed Metadata</li>
                <li>No Evolution</li>
                <li>No Native Logic</li>
              </ul>
            </div>

            <div className="comparison-card smart">
              <h3>Phantasma SmartNFT</h3>

              <ul>
                <li>Dynamic</li>
                <li>Evolves Over Time</li>
                <li>RAM + ROM Architecture</li>
                <li>Programmable Ownership</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <h2>Built For Change</h2>

          <div className="architecture">

            <div className="card">
              <h3>ROM</h3>

              <p>
                Permanent ownership,
                identity and authenticity.
              </p>
            </div>

            <div className="architecture-line" />

            <div className="card">
              <h3>RAM</h3>

              <p>
                Dynamic XP,
                inventory,
                metadata,
                abilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="cta-panel">

        <h2>
          Ready To Build The Future
          Of Digital Ownership?
        </h2>

        <button className="primary">
          Start Building
        </button>

      </section>
    </div>
  );
}
