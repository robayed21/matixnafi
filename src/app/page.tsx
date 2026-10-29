'use client';
import { useState } from 'react';
export default function Home() {
  const [pos, setPos] = useState(50);
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold">Mati X Nafi — TikTok Video Optimizer</h1>
        <p className="mt-4 text-gray-400">Free for everyone. No compression. Up to 4K 120fps.</p>
      </section>
      <section className="max-w-3xl mx-auto px-6">
        <h2 className="text-xl font-bold mb-4">See the difference</h2>
        <p className="text-gray-400 mb-4">Drag the handle to compare. Before · 540p 30fps  |  After · 4K 120fps</p>
        <div className="relative w-full aspect-video bg-gray-800 rounded-xl overflow-hidden select-none" onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect(); setPos(((e.clientX-r.left)/r.width)*100);}} onTouchMove={e=>{const r=e.currentTarget.getBoundingClientRect(); setPos(((e.touches[0].clientX-r.left)/r.width)*100);}}>
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">After · 4K 120fps</div>
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{width: pos+'%'}}>
            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-700">Before · 540p 30fps</div>
          </div>
          <div className="absolute top-0 bottom-0 w-1 bg-white" style={{left: pos+'%'}} />
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-6 mt-12 grid grid-cols-3 gap-4">
        <div className="p-4 rounded bg-gray-900 border border-gray-800 text-center"><p className="text-3xl font-bold text-cyan-400">0</p><p className="text-sm text-gray-500">Total optimizations</p></div>
        <div className="p-4 rounded bg-gray-900 border border-gray-800 text-center"><p className="text-3xl font-bold text-pink-400">0</p><p className="text-sm text-gray-500">Users registered</p></div>
        <div className="p-4 rounded bg-gray-900 border border-gray-800 text-center"><p className="text-3xl font-bold text-green-400">ONLINE</p><p className="text-sm text-gray-500">Engine status</p></div>
      </section>
      <div className="text-center mt-8"><a href="/login" className="text-cyan-400 hover:underline">Login / Sign Up →</a> · <a href="https://t.me/RTXFuryBot?start=site" className="text-cyan-400 hover:underline">Telegram Bot</a></div>
    </main>
  );
}
