import { Check } from "lucide-react";
import { checklistData } from "@/lib/mockData";

const completed = checklistData.filter((item) => item.done).length;
const percent = Math.round((completed / checklistData.length) * 100);

export default function ChecklistPage() {
  return (
    <main className="app-shell">
      <div className="mb-6">
        <p className="text-sm text-slate-500">Pre-trip prep</p>
        <h1 className="text-3xl font-bold text-navy">Checklist</h1>
      </div>

      <section className="glass-card p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Progress</p>
            <h2 className="text-2xl font-bold text-navy">{percent}%</h2>
          </div>
          <div className="rounded-full bg-[#6B4EFF]/10 px-3 py-1 text-sm font-medium text-[#6B4EFF]">
            {completed}/{checklistData.length} done
          </div>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-gradient-to-r from-[#172554] via-[#6B4EFF] to-[#FF6B8A]" style={{ width: `${percent}%` }} />
        </div>
      </section>

      <section className="mt-6 space-y-3">
        {checklistData.map((item) => (
          <article key={item.id} className="glass-card flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                  item.done ? "border-[#6B4EFF] bg-[#6B4EFF] text-white" : "border-slate-200 bg-white text-slate-300"
                }`}
              >
                {item.done ? <Check size={14} /> : null}
              </div>
              <div>
                <p className="font-medium text-navy">{item.title}</p>
                <p className="text-xs text-slate-500">{item.category}</p>
              </div>
            </div>
            <span className={`text-xs font-medium ${item.done ? "text-emerald-600" : "text-slate-400"}`}>
              {item.done ? "Done" : "Pending"}
            </span>
          </article>
        ))}
      </section>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md px-4 pb-4">
        <nav className="glass-card flex items-center justify-between gap-2 p-2">
          {[
            { name: "Home", href: "/" },
            { name: "Trips", href: "/trips" },
            { name: "Expenses", href: "/expenses" },
            { name: "Checklist", href: "/checklist", active: true },
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
