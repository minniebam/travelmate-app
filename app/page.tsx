import { ArrowRight, Bell, BriefcaseBusiness, Plane, WalletCards } from "lucide-react";
import Link from "next/link";
import { tripData, totalBudget, totalSpent, remainingBudget } from "@/lib/mockData";

export default function HomePage() {
  const featuredTrip = tripData[0];

  return (
    <main className="app-shell">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Good morning</p>
          <h1 className="mt-1 text-3xl font-bold text-navy">TravelMate</h1>
        </div>
        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/70 text-navy shadow-soft">
          <Bell size={20} />
        </button>
      </div>

      <section className="glass-card mt-6 overflow-hidden bg-gradient-to-br from-[#172554] via-[#20357b] to-[#6B4EFF] p-5 text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-100/80">Upcoming trip</p>
            <h2 className="mt-2 text-2xl font-semibold">{featuredTrip.name}</h2>
          </div>
          <button className="rounded-full bg-white/15 p-2 backdrop-blur-sm">
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-md">
            <p className="text-blue-100/80">Destination</p>
            <p className="mt-1 font-medium">{featuredTrip.destination}</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-md">
            <p className="text-blue-100/80">Travelers</p>
            <p className="mt-1 font-medium">{featuredTrip.travelers}</p>
          </div>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-3 gap-3">
        <div className="glass-card p-4">
          <Plane className="text-[#6B4EFF]" size={18} />
          <p className="mt-3 text-2xl font-bold text-navy">{tripData.length}</p>
          <p className="text-xs text-slate-500">Trips</p>
        </div>
        <div className="glass-card p-4">
          <WalletCards className="text-[#FF6B8A]" size={18} />
          <p className="mt-3 text-2xl font-bold text-navy">₩{Math.round(totalSpent / 10000)}</p>
          <p className="text-xs text-slate-500">Spent</p>
        </div>
        <div className="glass-card p-4">
          <BriefcaseBusiness className="text-[#172554]" size={18} />
          <p className="mt-3 text-2xl font-bold text-navy">₩{Math.round(remainingBudget / 10000)}</p>
          <p className="text-xs text-slate-500">Left</p>
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-navy">Trip Wallet</h3>
          <Link href="/trips" className="text-sm font-medium text-[#6B4EFF]">View all</Link>
        </div>

        <div className="glass-card p-4">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>Total Budget</span>
            <span>₩{totalBudget.toLocaleString()}</span>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
            <span>Spent</span>
            <span>₩{totalSpent.toLocaleString()}</span>
          </div>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-to-r from-[#6B4EFF] to-[#FF6B8A]" style={{ width: `${Math.min((totalSpent / totalBudget) * 100, 100)}%` }} />
          </div>
          <div className="mt-4 flex justify-between text-sm font-medium text-navy">
            <span>Remaining</span>
            <span>₩{remainingBudget.toLocaleString()}</span>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md px-4 pb-4">
        <nav className="glass-card flex items-center justify-between gap-2 p-2">
          {[
            { name: "Home", href: "/", active: true },
            { name: "Trips", href: "/trips" },
            { name: "Expenses", href: "/expenses" },
            { name: "Checklist", href: "/checklist" },
            { name: "Profile", href: "/profile" },
          ].map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`nav-pill ${tab.active ? "bg-[#172554] text-white shadow-lg shadow-[#172554]/20" : "text-slate-500 hover:bg-white/70"}`}
            >
              <span className="text-sm font-medium">{tab.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
