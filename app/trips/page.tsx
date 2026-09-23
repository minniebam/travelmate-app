"use client";

import { Search, Plus, SlidersHorizontal } from "lucide-react";
import { countries, tripData } from "@/lib/mockData";

export default function TripsPage() {
  return (
    <main className="app-shell">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Travel plans</p>
          <h1 className="text-3xl font-bold text-navy">Trips</h1>
        </div>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#172554] text-white shadow-lg shadow-[#172554]/20">
          <Plus size={22} />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <label className="glass-card flex flex-1 items-center gap-3 px-4 py-3">
          <Search size={18} className="text-slate-400" />
          <input
            aria-label="Search trips"
            placeholder="Search trips"
            className="w-full border-0 bg-transparent text-sm text-navy placeholder:text-slate-400 focus:outline-none"
          />
        </label>
        <button className="glass-card flex h-12 w-12 items-center justify-center text-navy">
          <SlidersHorizontal size={18} />
        </button>
      </div>

      <div className="mt-5 overflow-x-auto pb-1">
        <div className="flex gap-2">
          {countries.map((country, index) => (
            <button
              key={country}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                index === 2 ? "bg-[#172554] text-white" : "bg-white/70 text-slate-600"
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      <section className="mt-6 space-y-4">
        {tripData.map((trip) => (
          <article key={trip.id} className="glass-card p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-navy">{trip.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{trip.destination}</p>
              </div>
              <span className="rounded-full bg-[#6B4EFF]/10 px-2.5 py-1 text-xs font-semibold text-[#6B4EFF]">
                {trip.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <div>
                <p className="text-slate-400">Date</p>
                <p className="mt-1 font-medium text-navy">{trip.date}</p>
              </div>
              <div>
                <p className="text-slate-400">Travelers</p>
                <p className="mt-1 font-medium text-navy">{trip.travelers} Travelers</p>
              </div>
              <div className="col-span-2">
                <p className="text-slate-400">Budget</p>
                <p className="mt-1 font-medium text-navy">{trip.currency}{trip.budget.toLocaleString()}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md px-4 pb-4">
        <nav className="glass-card flex items-center justify-between gap-2 p-2">
          {[
            { name: "Home", href: "/" },
            { name: "Trips", href: "/trips", active: true },
            { name: "Expenses", href: "/expenses" },
            { name: "Checklist", href: "/checklist" },
            { name: "Profile", href: "/profile" },
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
