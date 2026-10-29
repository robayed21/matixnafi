'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X as XIcon, Zap, Crown, Rocket } from 'lucide-react';

export default function Tiers() {
  const tiers = [
    { name: 'Free', icon: Zap, color: 'cyan', size: '100 MB', res: '1080p', fps: '60 FPS', uploads: '3 / day', cta: 'Join Discord', href: 'https://discord.gg', highlight: false },
    { name: 'Booster', icon: Rocket, color: 'magenta', size: '200 MB', res: '4K', fps: '60 FPS', uploads: '5 / day', cta: 'Boost Server', href: 'https://discord.gg', highlight: false },
    { name: 'Premium', icon: Crown, color: 'lime', size: 'Unlimited', res: '4K', fps: '120 FPS', uploads: 'Unlimited', cta: 'Donate', href: '#', highlight: true },
  ];

  const rows = [
    ['File limit', '100 MB', '200 MB', 'Unlimited'],
    ['Uploads', '3 / day', '5 / day', 'Unlimited'],
    ['Max resolution', '1080p', '4K', '4K'],
    ['Max FPS', '60', '60', '120'],
    ['Engine access', '✓', '✓', '✓'],
    ['Dashboard', '✓', '✓', '✓'],
    ['Analytics tools', '✓', '✓', '✓'],
    ['Priority support', '✕', '✕', '✓'],
    ['Fast Processing', '✕', '✕', '✓'],
    ['Topaz preset', '✕', '✕', '✓'],
    ['Handbrake preset', '✕', '✕', '✓'],
    ['Colour correction', '✕', '✕', '✓'],
    ['Software suite', '✕', '✕', '✓'],
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <div className="chip mx-auto mb-4">Tiers &amp; Upload Limits</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Choose Your Tier</h1>
        <p className="text-muted mt-3 max-w-xl mx-auto">All tiers use the same engine. Higher tiers unlock larger files and higher resolutions. Tier syncs from Discord roles.</p>
        <p className="text-lime-400 font-semibold mt-2">All features free for everyone. No payment required.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {tiers.map(t => (
          <motion.div
            key={t.name}
            whileHover={{ y: -6 }}
            className={`glass rounded-2xl p-6 relative ${t.highlight ? 'border-lime-500/50 shadow-lg shadow-lime-500/10' : ''}`}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 chip !bg-lime-500/20 !text-lime-300 !border-lime-500/40">Best value</div>
            )}
            <div className={`w-12 h-12 rounded-xl bg-${t.color}-500/15 border border-${t.color}-500/30 flex items-center justify-center mb-4`}>
              <t.icon className={`w-6 h-6 text-${t.color}-400`} />
            </div>
            <h2 className={`font-display text-2xl font-bold text-${t.color}-400`}>{t.name}</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted">File size</span><span className="font-bold text-white">{t.size}</span></div>
              <div className="flex justify-between"><span className="text-muted">Max resolution</span><span className="font-bold text-white">{t.res}</span></div>
              <div className="flex justify-between"><span className="text-muted">Max framerate</span><span className="font-bold text-white">{t.fps}</span></div>
              <div className="flex justify-between"><span className="text-muted">Uploads</span><span className="font-bold text-white">{t.uploads}</span></div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5 text-xs text-muted">
              <p>RTX Engine 2.0 ✓</p>
              <p>Priority queue ✓</p>
              <p>Fast Processing ✓</p>
            </div>
            <a href={t.href} className={`mt-6 w-full py-2.5 rounded-xl font-bold text-center block ${t.highlight ? 'btn-primary' : 'btn-ghost'}`}>
              {t.cta}
            </a>
          </motion.div>
        ))}
      </div>

      {/* comparison table */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5">
          <h3 className="font-display font-bold text-white">Full Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="text-left px-6 py-3 text-muted font-medium">Feature</th>
                <th className="px-6 py-3 text-cyan-400 font-bold">Free</th>
                <th className="px-6 py-3 text-magenta-400 font-bold">Booster</th>
                <th className="px-6 py-3 text-lime-400 font-bold">Premium</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                  <td className="px-6 py-3 text-slate-300">{r[0]}</td>
                  {r.slice(1).map((v, j) => (
                    <td key={j} className="px-6 py-3 text-center font-semibold text-white">
                      {v === '✓' ? <Check className="w-4 h-4 text-lime-400 mx-auto" /> : v === '✕' ? <XIcon className="w-4 h-4 text-red-400 mx-auto" /> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-center text-xs text-muted mt-6">
        Tiers come from your Discord server roles (Free / Booster / Premium) or Telegram channel membership, re-checked on every login. No license keys.
      </p>
    </main>
  );
}
