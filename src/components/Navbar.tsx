
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-cyan-400">PHANTASMA V3</div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#smartnfts">SmartNFTs</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#developers">Developers</a>
        </div>
      </div>
    </nav>
  );
}
