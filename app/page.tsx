import Image from "next/image";

export default function ThrustDashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <header className="border-b border-zinc-800 bg-zinc-900 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">T</div>
            <h1 className="text-2xl font-semibold">Thrust Dashboard</h1>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400">Overview</a>
            <a href="#" className="hover:text-blue-400">Metrics</a>
            <a href="#" className="hover:text-blue-400">Logs</a>
            <a href="#" className="hover:text-blue-400">Settings</a>
          </nav>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-zinc-400 text-sm mb-2">THRUST STATUS</h3>
            <div className="text-5xl font-mono font-bold text-green-400">NOMINAL</div>
            <p className="text-sm mt-4 text-zinc-500">All systems operational</p>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-zinc-400 text-sm mb-2">CURRENT VELOCITY</h3>
            <div className="text-5xl font-mono font-bold">12.4 <span className="text-2xl">km/s</span></div>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-zinc-400 text-sm mb-2">FUEL REMAINING</h3>
            <div className="text-5xl font-mono font-bold">87%</div>
            <div className="h-2 bg-zinc-800 rounded mt-4">
              <div className="h-2 bg-blue-500 rounded w-[87%]"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-zinc-800">
              <span>Engine ignition sequence completed</span>
              <span className="text-zinc-500">2m ago</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-800">
              <span>Telemetry link established</span>
              <span className="text-zinc-500">15m ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
