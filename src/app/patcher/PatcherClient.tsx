'use client';
import { useState, useRef } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

export default function PatcherClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [outUrl, setOutUrl] = useState('');
  const ffmpegRef = useRef<FFmpeg | null>(null);

  const loadFFmpeg = async () => {
    if (ffmpegRef.current) return ffmpegRef.current;
    const ff = new FFmpeg();
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
    await ff.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    ff.on('progress', ({ progress }) => setProgress(Math.round(progress * 100)));
    ffmpegRef.current = ff;
    return ff;
  };

  const optimize = async () => {
    if (!file) return;
    setStatus('Loading RTX Engine…'); setProgress(0); setOutUrl('');
    try {
      const ff = await loadFFmpeg();
      setStatus('Optimizing container…');
      await ff.writeFile('input.mp4', await fetchFile(file));
      await ff.exec(['-i', 'input.mp4', '-c', 'copy', '-movflags', '+faststart', 'output.mp4']);
      const data = await ff.readFile('output.mp4');
      const arr = data instanceof Uint8Array ? data : new Uint8Array(data as unknown as ArrayBuffer);
      const blob = new Blob([arr.buffer as ArrayBuffer], { type: 'video/mp4' });
      setOutUrl(URL.createObjectURL(blob));
      setStatus('Done — download below.');
    } catch (e: any) {
      setStatus('Error: ' + (e?.message || e));
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">TikTok Optimizer</h1>
      <p className="text-gray-400 mb-6">RTX Engine v2 — optimize MP4 container, no re-encoding, zero quality loss.</p>
      <div className="p-8 rounded-xl border-2 border-dashed border-gray-700 bg-gray-900 text-center">
        <input type="file" accept="video/mp4,video/quicktime" onChange={e=>setFile(e.target.files?.[0]||null)} className="mb-4" />
        {file && <p className="text-sm text-gray-400 mb-4">{file.name} ({(file.size/1024/1024).toFixed(1)} MB)</p>}
        <button disabled={!file} onClick={optimize} className="px-6 py-3 rounded bg-cyan-600 hover:bg-cyan-500 font-bold disabled:opacity-50">Optimize Video</button>
        {progress > 0 && <div className="mt-4 w-full bg-gray-800 rounded h-2"><div className="bg-cyan-500 h-2 rounded" style={{width: progress+'%'}}/></div>}
      </div>
      {status && <p className="mt-4 text-yellow-400">{status}</p>}
      {outUrl && <a href={outUrl} download="optimized.mp4" className="mt-4 inline-block px-6 py-3 rounded bg-green-600 hover:bg-green-500 font-bold">Download Optimized</a>}
      <div className="grid grid-cols-4 gap-4 mt-8">
        {['Size','Resolution','Duration','Health'].map(k=>(
          <div key={k} className="p-3 rounded bg-gray-900 border border-gray-800 text-center">
            <p className="text-xs text-gray-500">{k}</p><p className="font-bold">—</p>
          </div>
        ))}
      </div>
    </main>
  );
}
