export default function App() {
  return (
    <div className="app">
      <div className="background-glow"></div>

      <header className="navbar">
        <div className="logo">PHANTASMA</div>

        <nav>
          <a href="#">SmartNFTs</a>
          <a href="#">Ecosystem</a>
          <a href="#">Developers</a>
        </nav>

        <button className="nav-btn">
          Build
        </button>
      </header>

      <main>
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

            <div className="phoenix-core">

              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>

              <div className="core"></div>

            </div>

          </div>
        </section>

        <section className="section">
          <div className="container">

            <h2>
              Most Digital Assets Are Static.
              <br />
              SmartNFTs Are Alive.
            </h2>

            <p>
              Phantasma SmartNFTs evolve over time,
              interact with applications,
              and unlock entirely new digital experiences.
            </p>

          </div>
        </section>

        <section className="section">
          <div className="container">

            <h2>
              Built For Change
            </h2>

            <div className="architecture">

              <div className="card">
                <h3>ROM</h3>

                <ul>
                  <li>Identity</li>
                  <li>Ownership</li>
                  <li>Authenticity</li>
                </ul>
              </div>

              <div className="card">
                <h3>RAM</h3>

                <ul>
                  <li>XP</li>
                  <li>Abilities</li>
                  <li>Inventory</li>
                  <li>Metadata</li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        <section className="cta">
          <h2>
            Ready To Build The Future
            Of Digital Ownership?
          </h2>

          <button className="primary">
            Start Building
          </button>
        </section>

      </main>
    </div>
  )
}
