'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, UserPlus, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const router = useRouter();

  const handle = async (type: 'login' | 'signup') => {
    setLoading(true); setMsg('');
    const { error } = type === 'login'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) setMsg(error.message);
    else { setMsg(type === 'login' ? 'Logged in!' : 'Check your email to confirm.'); router.push('/dashboard'); }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="orb w-[400px] h-[400px] bg-cyan-500/30 -top-20 -left-20" />
        <div className="orb w-[360px] h-[360px] bg-magenta-500/25 bottom-[-80px] right-[-80px]" style={{ animationDelay: '2s' }} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md glass-strong rounded-3xl p-8 relative"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Sparkles className="w-6 h-6 text-black" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-white">Mati X Nafi</h1>
            <p className="text-xs text-muted">RTX Engine · Free for everyone</p>
          </div>
        </div>

        <div className="flex gap-2 mb-6 p-1 rounded-xl bg-white/5">
          {(['login', 'signup'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${mode === m ? 'bg-white/10 text-white' : 'text-muted hover:text-white'}`}
            >
              {m === 'login' ? 'Login' : 'Sign Up'}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input className="w-full pl-10 pr-4 py-3" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input className="w-full pl-10 pr-4 py-3" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {msg && <p className="text-sm text-amber-300">{msg}</p>}
          <button
            disabled={loading}
            onClick={() => handle(mode)}
            className="btn-primary w-full justify-center disabled:opacity-50"
          >
            {mode === 'login' ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
            {loading ? 'Please wait…' : mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </div>

        <a href="/" className="block text-center text-sm text-muted mt-6 hover:text-white">← Back to home</a>
      </motion.div>
    </main>
  );
}
