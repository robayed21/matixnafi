export default function HowTo() {
  const steps = [
    { n: '01', t: 'Finish Your Edit', d: 'Finish all editing, cuts, colour correction, Topaz upscaling, HandBrake, etc. and save your final video.' },
    { n: '02', t: 'Optimize Your Video', d: 'Go to the Optimizer, upload your video, click Optimize Video. iOS users: upload from the Files app (not the photo gallery).' },
    { n: '03', t: 'Download the File', d: 'Once processing is complete, click Download the Optimized File and save it somewhere easy to find.' },
    { n: '04', t: 'Upload to TikTok', d: 'Open TikTok Web Studio on a desktop browser and upload the downloaded optimized video. Done — crispy clear.' },
  ];
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <div className="chip mx-auto mb-4">Step by Step Guide</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">How to Use</h1>
        <p className="text-muted mt-3 max-w-xl mx-auto">Optimize your video with the RTX Engine, then upload to TikTok in up to 4K 120 FPS — no compression, no quality loss.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {steps.map((s, i) => (
          <div key={s.n} className="glass rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-4 -right-2 font-display text-7xl font-black text-white/5">{s.n}</div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-display font-bold text-black">{s.n}</div>
                <h3 className="font-display font-bold text-white text-lg">{s.t}</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">{s.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-strong rounded-2xl p-6 border-amber-500/30">
        <p className="text-amber-300 font-semibold mb-2">⚠ Important — Do NOT edit the optimized file.</p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Once downloaded, upload it to TikTok exactly as it is with visibility set to “Everyone”, not “Only me”. Do not add TikTok sounds, trim it, apply filters, or make any other edits, or it will get compressed.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <a href="https://www.youtube.com/@RTXFuryYT" target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 hover:border-cyan-500/40 transition-colors">
          <p className="font-display font-bold text-white">💻 PC Upload Tutorial</p>
          <p className="text-xs text-muted mt-1">Watch on YouTube</p>
        </a>
        <a href="https://www.tiktok.com/@rtx_fury" target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 hover:border-cyan-500/40 transition-colors">
          <p className="font-display font-bold text-white">📱 Mobile Upload Tutorial</p>
          <p className="text-xs text-muted mt-1">Watch on TikTok</p>
        </a>
      </div>
    </main>
  );
}
