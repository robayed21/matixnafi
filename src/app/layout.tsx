import type { Metadata } from 'next';
import { Space_Grotesk, Orbitron, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', display: 'swap', weight: ['400','500','600','700','800','900'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  title: 'Mati X Nafi — TikTok Video Optimizer · Free for Everyone',
  description: 'Bypass TikTok compression. Optimize your MP4/MOV container with the RTX Engine — no re-encoding, zero quality loss. Up to 4K 120 FPS. 100% free.',
  keywords: ['tiktok optimizer','bypass compression','4k 120fps','rtx engine','video optimizer','free'],
  openGraph: {
    title: 'Mati X Nafi — TikTok Video Optimizer',
    description: 'Bypass TikTok compression. Free for everyone.',
    type: 'website',
  },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${orbitron.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
