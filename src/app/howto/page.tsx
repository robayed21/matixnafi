export default function HowTo() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">How to Use</h1>
      <ol className="space-y-4 list-decimal list-inside text-gray-300">
        <li>Export your video in MP4/MOV, H.264 or HEVC, 1080p+, constant 60 FPS, high bitrate.</li>
        <li>Go to <a href="/patcher" className="text-cyan-400">TikTok Optimizer</a> and upload the file.</li>
        <li>Click <strong>Optimize Video</strong>. The RTX Engine optimizes the container — no re-encoding, zero quality loss.</li>
        <li>Download the optimized file. Do NOT edit it (no trimming, filters, sounds).</li>
        <li>Upload to TikTok with visibility set to Everyone, Upload HD enabled.</li>
        <li>Verify via <a href="/analytics" className="text-cyan-400">Analytics</a> or our Telegram bot.</li>
      </ol>
      <p className="mt-6 text-sm text-gray-500">Recommended bitrate: 10-40 Mbps depending on resolution.</p>
    </main>
  );
}
