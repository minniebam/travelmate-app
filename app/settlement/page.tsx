import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { settlementData } from "@/lib/mockData";

export default function SettlementPage() {
  return (
    <main className="app-shell">
      <div className="mb-6">
        <p className="text-sm text-slate-500">Balances</p>
        <h1 className="text-3xl font-bold text-navy">Settlement</h1>
      </div>

      <section className="space-y-4">
        {settlementData.map((item) => {
          const isReceive = item.type === "receive";

          return (
            <article key={item.id} className="glass-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      isReceive ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                    }`}
                  >
                    {isReceive ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{isReceive ? "should receive" : "owes"}</p>
                    <h2 className="text-xl font-semibold text-navy">{item.name}</h2>
                  </div>
                </div>

                <div className={`text-right ${isReceive ? "text-emerald-600" : "text-rose-600"}`}>
                  <p className="text-xs uppercase tracking-[0.2em]">{isReceive ? "Receive" : "Pay"}</p>
                  <p className="mt-1 text-2xl font-bold">{item.currency}{item.amount.toLocaleString()}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md px-4 pb-4">
        <nav className="glass-card flex items-center justify-between gap-2 p-2">
          {[
            { name: "Home", href: "/" },
            { name: "Trips", href: "/trips" },
            { name: "Expenses", href: "/expenses" },
            { name: "Checklist", href: "/checklist" },
            { name: "Profile", href: "/profile" },
          ].map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={`nav-pill ${tab.name === "Home" ? "bg-[#172554] text-white shadow-lg shadow-[#172554]/20" : "text-slate-500 hover:bg-white/70"}`}
            >
              <span className="text-sm font-medium">{tab.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
