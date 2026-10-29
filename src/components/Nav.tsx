'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/howto', label: 'How to Use' },
  { href: '/patcher', label: 'Optimizer' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/tiers', label: 'Tiers' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-[#05060a]/70 backdrop-blur-xl border-b border-white/5" />
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/60 transition-shadow">
            <Sparkles className="w-5 h-5 text-black" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-lime-400 ring-2 ring-[#05060a] animate-pulse" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm tracking-wider text-white">MATI X NAFI</div>
            <div className="text-[10px] text-muted tracking-widest">RTX ENGINE v2.0</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/login" className="ml-2 btn-primary text-sm !py-2 !px-4">
            <Zap className="w-4 h-4" /> Get Started
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/5 text-white" aria-label="menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden relative border-t border-white/5 bg-[#05060a]/95 backdrop-blur-xl"
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5">
                {l.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">Get Started <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
