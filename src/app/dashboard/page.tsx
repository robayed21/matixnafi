'use client';
import { useEffect, useState } from 'react';
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

  if (loading) return <main className="min-h-screen flex items-center justify-center bg-black text-white">Loading…</main>;

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button onClick={logout} className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700">Logout</button>
        </div>
        <div className="p-4 rounded bg-gray-900 border border-gray-800">
          <p className="text-gray-400">Logged in as:</p>
          <p className="font-mono text-cyan-400">{user?.email}</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded bg-gray-900 border border-gray-800 text-center">
            <p className="text-3xl font-bold text-cyan-400">0</p>
            <p className="text-sm text-gray-500">Total optimizations</p>
          </div>
          <div className="p-4 rounded bg-gray-900 border border-gray-800 text-center">
            <p className="text-3xl font-bold text-pink-400">0</p>
            <p className="text-sm text-gray-500">Users registered</p>
          </div>
          <div className="p-4 rounded bg-gray-900 border border-gray-800 text-center">
            <p className="text-3xl font-bold text-green-400">ONLINE</p>
            <p className="text-sm text-gray-500">Engine status</p>
          </div>
        </div>
        <a href="/" className="inline-block text-sm text-gray-500">← Home</a>
      </div>
    </main>
  );
}
