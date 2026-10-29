'use client';
import { useState } from 'react';
export default function Analytics() {
  const [link, setLink] = useState('');
  const [result, setResult] = useState('');
  const check = () => {
    if (!link) { setResult('Paste a TikTok link first.'); return; }
    setResult('Checking… (paste into Telegram bot @RTXFuryBot for full report)');
  };
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Analytics</h1>
      <p className="text-gray-400 mb-6">Paste your published TikTok link to check what TikTok actually delivered.</p>
      <input className="w-full p-3 rounded bg-gray-900 border border-gray-700" placeholder="https://www.tiktok.com/@user/video/..." value={link} onChange={e=>setLink(e.target.value)} />
      <button onClick={check} className="mt-4 px-6 py-2 rounded bg-cyan-600 hover:bg-cyan-500 font-bold">Check</button>
      {result && <p className="mt-4 text-yellow-400">{result}</p>}
      <p className="mt-6 text-sm text-gray-500">Or use our <a href="https://t.me/RTXFuryBot?start=site" className="text-cyan-400">Telegram Bot</a>.</p>
    </main>
  );
}
