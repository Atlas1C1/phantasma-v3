
export default function PhoenixCore() {
  return (
    <div className="relative w-[500px] h-[500px]">
      <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse" />
      <div className="absolute inset-12 rounded-full border border-violet-400/40" />
      <div className="absolute inset-24 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute inset-32 rounded-full bg-cyan-400 shadow-[0_0_80px_#17B1E8]" />
    </div>
  );
}
