'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Film, BarChart3, Link2, CheckCircle2, AlertCircle, Loader2, ExternalLink } from 'lucide-react';

export default function Analytics() {
  const [link, setLink] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const check = async () => {
    if (!link) { setResult('Paste a TikTok link first.'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    if (!/^https?:\/\/(www\.)?tiktok\.com\//i.test(link)) {
      setResult('That doesn’t look like a TikTok link. Please paste a full https://www.tiktok.com/... URL.');
      return;
    }
    setResult('Analysis queued. For the full technical report (codec, bitrate, FPS, resolution, compression score) use our Telegram bot @RTXFuryBot.');
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-10">
        <div className="chip mx-auto mb-4">TikTok Analyzer</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Analytics</h1>
        <p className="text-muted mt-3 max-w-xl mx-auto">Inspect any TikTok video’s metadata, engagement stats, and technical specs.</p>
      </div>

      <div className="glass rounded-2xl p-6 sm:p-8">
        <label className="block text-sm font-medium text-slate-300 mb-2">TikTok video URL</label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              className="w-full pl-10 pr-4 py-3"
              placeholder="https://www.tiktok.com/@user/video/1234567890"
              value={link}
              onChange={e => setLink(e.target.value)}
            />
          </div>
          <button onClick={check} disabled={loading} className="btn-primary justify-center disabled:opacity-50">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            {loading ? 'Checking…' : 'Check'}
          </button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 rounded-xl p-4 border ${result.includes('queued') ? 'border-lime-500/30 bg-lime-500/5' : 'border-amber-500/30 bg-amber-500/5'}`}
            >
              <div className="flex items-start gap-3">
                {result.includes('queued') ? <CheckCircle2 className="w-5 h-5 text-lime-400 mt-0.5" /> : <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5" />}
                <p className="text-sm text-slate-200">{result}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        {[
          { icon: Film, t: 'Codec & bitrate', d: 'H.264 / HEVC, Mbps, FPS' },
          { icon: BarChart3, t: 'Engagement', d: 'Views, likes, shares' },
          { icon: Search, t: 'Compression score', d: 'How hard TikTok hit it' },
        ].map(x => (
          <div key={x.t} className="glass rounded-xl p-5">
            <x.icon className="w-5 h-5 text-cyan-400 mb-2" />
            <p className="font-semibold text-white text-sm">{x.t}</p>
            <p className="text-xs text-muted mt-1">{x.d}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-muted mt-8">
        Or use our <a href="https://t.me/RTXFuryBot?start=site" className="text-cyan-400 hover:underline">Telegram Bot</a> for the full report.
      </p>
    </main>
  );
}
