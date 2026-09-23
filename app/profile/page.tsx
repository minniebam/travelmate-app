import { Settings, TrendingUp, Wallet } from "lucide-react";
import { profileStats } from "@/lib/mockData";

export default function ProfilePage() {
  return (
    <main className="app-shell">
      <div className="mb-6">
        <p className="text-sm text-slate-500">Profile</p>
        <h1 className="text-3xl font-bold text-navy">Account</h1>
      </div>

      <section className="glass-card p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#172554] via-[#6B4EFF] to-[#FF6B8A] text-2xl font-bold text-white shadow-soft">
            OP
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-navy">{profileStats.name}</h2>
            <p className="text-sm text-slate-500">Travel planner</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <Wallet className="text-[#6B4EFF]" size={18} />
            <p className="mt-3 text-2xl font-bold text-navy">{profileStats.totalTrips}</p>
            <p className="text-xs text-slate-500">Total Trips</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <TrendingUp className="text-[#FF6B8A]" size={18} />
            <p className="mt-3 text-2xl font-bold text-navy">₩{profileStats.totalExpenses.toLocaleString()}</p>
            <p className="text-xs text-slate-500">Total Expenses</p>
          </div>
        </div>
      </section>

      <section className="mt-6 space-y-3">
        <div className="glass-card flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#172554]">
              <Settings size={18} />
            </div>
            <div>
              <p className="font-medium text-navy">Settings</p>
              <p className="text-xs text-slate-500">Preferences & account</p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md px-4 pb-4">
        <nav className="glass-card flex items-center justify-between gap-2 p-2">
          {[
            { name: "Home", href: "/" },
            { name: "Trips", href: "/trips" },
            { name: "Expenses", href: "/expenses" },
            { name: "Checklist", href: "/checklist" },
            { name: "Profile", href: "/profile", active: true },
          ].map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={`nav-pill ${tab.active ? "bg-[#172554] text-white shadow-lg shadow-[#172554]/20" : "text-slate-500 hover:bg-white/70"}`}
            >
              <span className="text-sm font-medium">{tab.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
