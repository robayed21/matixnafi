'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handle = async (type: 'login' | 'signup') => {
    setLoading(true); setMsg('');
    const { error } = type === 'login'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) setMsg(error.message);
    else { setMsg(type === 'login' ? 'Logged in!' : 'Check email to confirm.'); router.push('/dashboard'); }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-center">Mati X Nafi — Login</h1>
        <input className="w-full p-3 rounded bg-gray-900 border border-gray-700" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-3 rounded bg-gray-900 border border-gray-700" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        {msg && <p className="text-sm text-yellow-400">{msg}</p>}
        <button disabled={loading} onClick={()=>handle('login')} className="w-full p-3 rounded bg-cyan-600 hover:bg-cyan-500 font-bold">Login</button>
        <button disabled={loading} onClick={()=>handle('signup')} className="w-full p-3 rounded bg-gray-700 hover:bg-gray-600">Sign Up</button>
        <a href="/" className="block text-center text-sm text-gray-500">← Back</a>
      </div>
    </main>
  );
}
