import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Mati X Nafi — TikTok Video Optimizer',
  description: 'Optimize, compress, trim, crop TikTok videos in browser. Free for everyone.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  );
}
