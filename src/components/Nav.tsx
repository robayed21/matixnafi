'use client';
import Link from 'next/link';
export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-cyan-400">Mati X Nafi</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/howto" className="hover:text-cyan-400">How to Use</Link>
          <Link href="/patcher" className="hover:text-cyan-400">TikTok Optimizer</Link>
          <Link href="/analytics" className="hover:text-cyan-400">Analytics</Link>
          <Link href="/tiers" className="hover:text-cyan-400">Tiers</Link>
          <Link href="/login" className="hover:text-cyan-400">Login</Link>
        </div>
      </div>
    </nav>
  );
}
