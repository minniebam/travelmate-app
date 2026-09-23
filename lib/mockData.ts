export type TripStatus = "Planning" | "Confirmed" | "Booked" | "Completed";

export interface Trip {
  id: number;
  name: string;
  destination: string;
  country: string;
  date: string;
  travelers: number;
  budget: number;
  currency: string;
  status: TripStatus;
}

export interface Expense {
  id: number;
  title: string;
  category: string;
  amount: number;
  currency: string;
  paidBy: string;
}

export interface SettlementDetail {
  id: number;
  name: string;
  type: "receive" | "pay";
  amount: number;
  currency: string;
}

export interface ChecklistItem {
  id: number;
  title: string;
  category: string;
  done: boolean;
}

export const countries = [
  "China",
  "Japan",
  "Korea",
  "Taipei",
  "Taiwan",
  "Hong Kong",
];

export const tripData: Trip[] = [
  {
    id: 1,
    name: "Seoul Spring 2027",
    destination: "Seoul",
    country: "Korea",
    date: "Apr 12 - Apr 22, 2027",
    travelers: 4,
    budget: 100000,
    currency: "₩",
    status: "Planning",
  },
  {
    id: 2,
    name: "Tokyo City Break",
    destination: "Tokyo",
    country: "Japan",
    date: "Feb 8 - Feb 17, 2027",
    travelers: 2,
    budget: 180000,
    currency: "¥",
    status: "Confirmed",
  },
  {
    id: 3,
    name: "Taipei Food Hunt",
    destination: "Taipei",
    country: "Taipei",
    date: "Jun 3 - Jun 9, 2027",
    travelers: 3,
    budget: 42000,
    currency: "NT$",
    status: "Booked",
  },
  {
    id: 4,
    name: "Hong Kong Escape",
    destination: "Hong Kong",
    country: "Hong Kong",
    date: "Aug 15 - Aug 24, 2027",
    travelers: 5,
    budget: 260000,
    currency: "HK$",
    status: "Completed",
  },
];

export const expenseData: Expense[] = [
  { id: 1, title: "Korean BBQ Dinner", category: "Food", amount: 84000, currency: "₩", paidBy: "Amelia" },
  { id: 2, title: "Coffee & Brunch", category: "Cafe", amount: 24000, currency: "₩", paidBy: "Jason" },
  { id: 3, title: "Seoul Hotel", category: "Hotel", amount: 260000, currency: "₩", paidBy: "Mina" },
  { id: 4, title: "Market Shopping", category: "Shopping", amount: 68000, currency: "₩", paidBy: "Leo" },
  { id: 5, title: "Airport Transfer", category: "Transportation", amount: 15000, currency: "₩", paidBy: "Amelia" },
  { id: 6, title: "Museum Tickets", category: "Tickets", amount: 32000, currency: "₩", paidBy: "Jason" },
];

export const settlementData: SettlementDetail[] = [
  { id: 1, name: "Amelia", type: "receive", amount: 8400, currency: "₩" },
  { id: 2, name: "Jason", type: "pay", amount: 4200, currency: "₩" },
  { id: 3, name: "Mina", type: "pay", amount: 2100, currency: "₩" },
  { id: 4, name: "Leo", type: "receive", amount: 1800, currency: "₩" },
];

export const checklistData: ChecklistItem[] = [
  { id: 1, title: "Passport", category: "Travel Docs", done: true },
  { id: 2, title: "Visa", category: "Travel Docs", done: false },
  { id: 3, title: "Insurance", category: "Essentials", done: true },
  { id: 4, title: "Hotel", category: "Stay", done: true },
  { id: 5, title: "Flight", category: "Transport", done: false },
  { id: 6, title: "eSIM", category: "Connectivity", done: true },
  { id: 7, title: "Medicine", category: "Health", done: false },
  { id: 8, title: "Power Adapter", category: "Tech", done: true },
];

export const profileStats = {
  totalTrips: 4,
  totalExpenses: 146000,
  name: "Olivia Park",
};

export const totalBudget = tripData.reduce((sum, trip) => sum + trip.budget, 0);
export const totalSpent = expenseData.reduce((sum, expense) => sum + expense.amount, 0);
export const remainingBudget = totalBudget - totalSpent;
