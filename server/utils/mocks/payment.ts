import type { PaymentHistory } from "~/interfaces";

export const paymentHistory: PaymentHistory[] = [
  {
    id: "1",
    property: "2-Bedroom Flat in Lekki",
    amount: "₦1,200,000",
    date: "Jan 15, 2025",
    status: "Paid",
  },
  {
    id: "2",
    property: "Studio Apartment in Abuja",
    amount: "₦800,000",
    date: "Dec 01, 2024",
    status: "Paid",
  },
];

export const upcomingPayments = [
  {
    id: "1",
    property: "2-Bedroom Flat in Lekki",
    amount: "₦1,200,000",
    dueDate: "Jan 15, 2026",
  },
];