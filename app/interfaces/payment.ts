export interface PaymentHistory {
  id: string;
  property: string;
  amount: string;
  date: string;
  status: "Paid" | "Pending" | "Overdue";
}

export interface UpcomingPayment {
  id: string;
  property: string;
  amount: string;
  dueDate: string;
}
export interface PaymentMethod {
  id: string;
  type: "Credit Card" | "Bank Transfer" | "PayPal";
  details: string;
  isDefault: boolean;
}
