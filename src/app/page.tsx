'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Zap, ShieldCheck, Gauge, Film, Cpu, ArrowRight, Check, ChevronRight, Star, Users, TrendingUp, Upload, Download, Wand2 } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Total optimizations', value: '12,847', color: 'text-cyan-400' },
  { label: 'Users registered', value: '3,291', color: 'text-magenta-400' },
  { label: 'Engine status', value: 'ONLINE', color: 'text-lime-400' },
];

const features = [
  { icon: Zap, title: 'Zero re-encoding', desc: 'Container + metadata only. Your frames stay bit-identical.', color: 'from-cyan-400 to-blue-500' },
  { icon: Film, title: 'Up to 4K 120 FPS', desc: 'Preserve the full quality your editor exported.', color: 'from-violet-400 to-magenta-500' },
  { icon: ShieldCheck, title: 'No quality loss', desc: 'Original resolution, bitrate and color untouched.', color: 'from-lime-400 to-emerald-500' },
  { icon: Gauge, title: 'Fast processing', desc: 'Optimized in-browser. No uploads to our servers.', color: 'from-amber-400 to-orange-500' },
  { icon: Cpu, title: 'RTX Engine 2.0', desc: 'Smart metadata that nudges TikTok to skip compression.', color: 'from-pink-400 to-rose-500' },
  { icon: Upload, title: 'Free for everyone', desc: 'No tiers, no paywalls, no license keys. Ever.', color: 'from-cyan-400 to-teal-500' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [pos, setPos] = useState(55);
  const [dragging, setDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(95, Math.max(5, p)));
  };

  return (
    <main className="relative overflow-hidden">
      {/* ambient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="orb w-[520px] h-[520px] bg-cyan-500/30 -top-40 -left-40" />
        <div className="orb w-[460px] h-[460px] bg-magenta-500/25 top-20 right-[-120px]" style={{ animationDelay: '2s' }} />
        <div className="orb w-[400px] h-[400px] bg-violet-500/20 bottom-[-100px] left-1/3" style={{ animationDelay: '4s' }} />
      </div>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center">
        <div className="grid-bg absolute inset-0 -z-10" />
        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24 w-full">
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="chip"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              Engine v2.0 · Live &amp; Online
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]"
          >
            <span className="block text-white">Upload TikTok</span>
            <span className="block neon-text animate-gradient">Without Compression</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-center text-lg sm:text-xl text-muted max-w-2xl mx-auto"
          >
            Bypass TikTok compression. Optimize your video with the <span className="text-cyan-400 font-semibold">RTX Engine</span> and keep
            full quality — <span className="text-white font-semibold">no re-encoding</span>, up to 4K 120 FPS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/patcher" className="btn-primary text-base">
              <Wand2 className="w-5 h-5" /> Optimize a Video <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/howto" className="btn-ghost text-base">
              <Play className="w-5 h-5" /> See How It Works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto"
          >
            {[
              { k: '100 MB', v: 'Free file size' },
              { k: '4K', v: 'Max resolution' },
              { k: '120 FPS', v: 'Premium tier' },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white">{s.k}</div>
                <div className="text-xs text-muted mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted text-xs flex flex-col items-center gap-1"
        >
          <span>Scroll</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </motion.div>
      </section>

      {/* STATS MARQUEE */}
      <section className="border-y border-white/5 bg-white/[0.02] py-6 overflow-hidden">
        <div className="animate-marquee flex gap-12 whitespace-nowrap text-sm">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              {['⚡ Zero re-encoding', '🎬 Up to 4K 120 FPS', '🆓 100% Free', '🛡️ No quality loss', '🚀 In-browser processing', '📦 MP4 & MOV support', '🎨 H.264 / HEVC', '✨ RTX Engine v2.0'].map(t => (
                <span key={t} className="text-slate-300 font-medium">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SEE THE DIFFERENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-12">
          <div className="chip mx-auto mb-4">Before vs After</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">See the difference</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">The exact same clip, before and after. Drag the handle to compare.</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10 select-none cursor-ew-resize"
            onMouseDown={() => setDragging(true)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onMouseMove={e => { if (dragging) { const r = e.currentTarget.getBoundingClientRect(); handleMove(e.clientX, r); } }}
            onTouchMove={e => { const r = e.currentTarget.getBoundingClientRect(); handleMove(e.touches[0].clientX, r); }}
          >
            {/* after (full) */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-6xl sm:text-8xl font-black text-white/90">4K</div>
                <div className="text-cyan-400 font-mono text-sm mt-2">120 FPS · 40 Mbps</div>
                <div className="mt-6 grid grid-cols-3 gap-2 max-w-xs mx-auto text-[10px] text-slate-400 font-mono">
                  <span>BITRATE HIGH</span><span>SHARP</span><span>SMOOTH</span>
                </div>
              </div>
              {/* animated particles */}
              <div className="absolute inset-0 opacity-40">
                {Array.from({ length: 18 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-cyan-400"
                    style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.8, 1] }}
                    transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
            {/* before (clipped) */}
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center" style={{ width: `${10000 / pos}%` }}>
                <div className="text-center">
                  <div className="font-display text-6xl sm:text-8xl font-black text-gray-500">540p</div>
                  <div className="text-gray-400 font-mono text-sm mt-2">30 FPS · 2 Mbps</div>
                  <div className="mt-6 grid grid-cols-3 gap-2 max-w-xs mx-auto text-[10px] text-gray-600 font-mono">
                    <span>BLURRY</span><span>BLOCKY</span><span>CHOPPY</span>
                  </div>
                </div>
              </div>
            </div>
            {/* handle */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" style={{ left: `${pos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl">
                <div className="flex gap-0.5">
                  <span className="w-0.5 h-4 bg-gray-800 rounded" />
                  <span className="w-0.5 h-4 bg-gray-800 rounded" />
                </div>
              </div>
            </div>
            {/* labels */}
            <div className="absolute top-3 left-3 chip !bg-black/60 !text-gray-300 !border-white/10">Before · 540p 30fps</div>
            <div className="absolute top-3 right-3 chip !bg-black/60 !text-cyan-300 !border-cyan-500/30">After · 4K 120fps</div>
          </div>
          <p className="text-center text-xs text-muted mt-4">Drag the handle to compare</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-14">
          <div className="chip mx-auto mb-4">Features</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">Everything you need, <span className="neon-text">nothing you don't</span></h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">Built for creators who refuse to let TikTok crush their quality.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className={`font-display text-4xl sm:text-5xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-sm text-muted mt-2 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-magenta-500/20 blur-3xl" />
          <div className="relative">
            <div className="chip mb-4">The Method</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">Four steps to crystal-clear TikToks</h2>
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                { n: '01', t: 'Finish your edit', d: 'Export final MP4/MOV, H.264 or HEVC, 1080p+, 60 FPS.' },
                { n: '02', t: 'Optimize', d: 'Upload to the Optimizer. RTX Engine rewrites the container.' },
                { n: '03', t: 'Download', d: 'Save the optimized file. Do not edit it afterward.' },
                { n: '04', t: 'Upload to TikTok', d: 'TikTok Web Studio, visibility Everyone, Upload HD on.' },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="font-display text-5xl font-black text-white/10">{s.n}</div>
                  <h3 className="font-display font-bold text-white mt-2">{s.t}</h3>
                  <p className="text-muted text-sm mt-2">{s.d}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/howto" className="btn-ghost">Read full guide <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-magenta-500/10" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">Ready to bypass compression?</h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">Start optimizing in seconds. No account required to try.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/patcher" className="btn-primary text-base"><Wand2 className="w-5 h-5" /> Optimize Now</Link>
              <Link href="/tiers" className="btn-ghost text-base"><Star className="w-5 h-5" /> View Tiers</Link>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Mati X Nafi · RTX Engine v2.0 · Free for everyone</span>
          </div>
          <div className="flex gap-6">
            <Link href="/howto" className="hover:text-white">How to Use</Link>
            <Link href="/analytics" className="hover:text-white">Analytics</Link>
            <Link href="/tiers" className="hover:text-white">Tiers</Link>
            <a href="https://t.me/RTXFuryBot?start=site" className="hover:text-white">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
