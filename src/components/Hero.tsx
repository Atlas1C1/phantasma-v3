
import PhoenixCore from './PhoenixCore';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 mb-4">Where Digital Assets Come Alive</p>
          <h1 className="text-6xl lg:text-8xl font-bold leading-none mb-6">
            Digital Assets<br/>That Evolve
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            The blockchain powering intelligent assets, gaming economies,
            and digital ownership.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold">
              Explore SmartNFTs
            </button>
            <button className="px-6 py-3 rounded-xl border border-cyan-500/50">
              Start Building
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <PhoenixCore />
        </div>
      </div>
    </section>
  );
}
