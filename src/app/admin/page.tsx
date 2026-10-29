export default function Admin() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-10">
        <div className="chip mx-auto mb-4">Control</div>
        <h1 className="font-display text-4xl font-bold text-white">Admin</h1>
        <p className="text-muted mt-3">Manage users and tiers — protected by the admin secret.</p>
      </div>
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-muted text-sm">Admin panel coming soon. Access requires the admin secret.</p>
      </div>
    </main>
  );
}
