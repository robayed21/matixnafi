'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, User, BarChart3, Zap, ShieldCheck, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push('/login');
      else setUser(data.user);
      setLoading(false);
    });
  }, [router]);

  const logout = async () => { await supabase.auth.signOut(); router.push('/'); };

  if (loading) return <main className="min-h-screen flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-cyan-400" /></main>;

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-muted text-sm mt-1">Welcome back to your RTX control center.</p>
        </div>
        <button onClick={logout} className="btn-ghost text-sm"><LogOut className="w-4 h-4" /> Logout</button>
      </div>

      <div className="glass-strong rounded-2xl p-6 mb-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
          <User className="w-6 h-6 text-black" />
        </div>
        <div>
          <p className="text-xs text-muted uppercase tracking-wider">Logged in as</p>
          <p className="font-mono text-cyan-400">{user?.email}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 mb-6">
        {[
          { v: '0', l: 'Total optimizations', c: 'text-cyan-400' },
          { v: '0', l: 'Users registered', c: 'text-magenta-400' },
          { v: 'ONLINE', l: 'Engine status', c: 'text-lime-400' },
        ].map(x => (
          <div key={x.l} className="glass rounded-2xl p-6 text-center">
            <div className={`font-display text-4xl font-black ${x.c}`}>{x.v}</div>
            <div className="text-xs text-muted mt-2 uppercase tracking-wider">{x.l}</div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-bold text-white mb-3 flex items-center gap-2"><Zap className="w-4 h-4 text-cyan-400" /> Quick actions</h3>
          <div className="space-y-2">
            <a href="/patcher" className="block px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-slate-200 transition-colors">Optimize a video →</a>
            <a href="/analytics" className="block px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-slate-200 transition-colors">Check a TikTok link →</a>
            <a href="/tiers" className="block px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-slate-200 transition-colors">View tiers →</a>
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-bold text-white mb-3 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-lime-400" /> Account</h3>
          <p className="text-sm text-muted">Tier syncs from your Discord roles. No license keys needed.</p>
          <p className="text-xs text-muted mt-3">Member · Free tier · 3 uploads/day · 1080p · 60 FPS</p>
        </div>
      </div>

      <a href="/" className="inline-block text-sm text-muted mt-8 hover:text-white">← Home</a>
    </main>
  );
}
