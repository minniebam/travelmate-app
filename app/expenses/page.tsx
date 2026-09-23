import { Plus, TrendingDown, TrendingUp } from "lucide-react";
import { expenseData, totalBudget, totalSpent, remainingBudget } from "@/lib/mockData";

const categories = ["Food", "Cafe", "Hotel", "Shopping", "Transportation", "Tickets", "Personal", "Other"];

export default function ExpensesPage() {
  return (
    <main className="app-shell">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Tracking</p>
          <h1 className="text-3xl font-bold text-navy">Expenses</h1>
        </div>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#172554] text-white shadow-lg shadow-[#172554]/20">
          <Plus size={22} />
        </button>
      </div>

      <div className="glass-card mt-6 overflow-hidden bg-gradient-to-br from-[#172554] via-[#1d2f6b] to-[#6B4EFF] p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-100/80">Expense summary</p>
            <h2 className="mt-2 text-2xl font-semibold">₩{totalBudget.toLocaleString()}</h2>
          </div>
          <div className="rounded-full bg-white/10 p-3">
            <TrendingUp size={18} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
          <div className="rounded-2xl bg-white/10 p-3">
            <p className="text-blue-100/80">Total Budget</p>
            <p className="mt-1 font-medium">₩{totalBudget.toLocaleString()}</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-3">
            <p className="text-blue-100/80">Spent</p>
            <p className="mt-1 font-medium">₩{totalSpent.toLocaleString()}</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-3">
            <p className="text-blue-100/80">Remaining</p>
            <p className="mt-1 font-medium">₩{remainingBudget.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`whitespace-nowrap rounded-full px-3 py-2 text-sm ${
              index === 0 ? "bg-[#172554] text-white" : "bg-white/70 text-slate-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="mt-6 space-y-4">
        {expenseData.map((expense) => (
          <article key={expense.id} className="glass-card p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-navy">{expense.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{expense.category}</p>
              </div>
              <span className="text-right">
                <span className="block text-lg font-bold text-navy">{expense.currency}{expense.amount.toLocaleString()}</span>
                <span className="text-xs text-slate-500">Paid by {expense.paidBy}</span>
              </span>
            </div>
          </article>
        ))}
      </section>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md px-4 pb-4">
        <nav className="glass-card flex items-center justify-between gap-2 p-2">
          {[
            { name: "Home", href: "/" },
            { name: "Trips", href: "/trips" },
            { name: "Expenses", href: "/expenses", active: true },
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
