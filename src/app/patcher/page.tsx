'use client';
import dynamic from 'next/dynamic';
const PatcherClient = dynamic(() => import('./PatcherClient'), { ssr: false });
export default function Patcher() { return <PatcherClient />; }
