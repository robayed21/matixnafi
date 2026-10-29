export default function Tiers() {
  const tiers = [
    { name: 'Free', size: '100 MB', res: '1080p', fps: '60 FPS', uploads: '3 / day', color: 'cyan' },
    { name: 'Booster', size: '200 MB', res: '4K', fps: '60 FPS', uploads: '5 / day', color: 'pink' },
    { name: 'Premium', size: 'Unlimited', res: '4K', fps: '120 FPS', uploads: 'Unlimited', color: 'green' },
  ];
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">Choose Your Tier</h1>
      <p className="text-center text-gray-400 mb-8">All features free for everyone. No payment required.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="p-6 rounded-xl border border-gray-800 bg-gray-900">
            <h2 className={`text-xl font-bold text-${t.color}-400`}>{t.name}</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>File size: <strong>{t.size}</strong></li>
              <li>Max resolution: <strong>{t.res}</strong></li>
              <li>Max framerate: <strong>{t.fps}</strong></li>
              <li>Uploads: <strong>{t.uploads}</strong></li>
              <li>RTX Engine 2.0 ✓</li>
              <li>Priority queue ✓</li>
            </ul>
            <button className="mt-6 w-full py-2 rounded bg-cyan-600 hover:bg-cyan-500 font-bold">Get {t.name}</button>
          </div>
        ))}
      </div>
    </main>
  );
}
