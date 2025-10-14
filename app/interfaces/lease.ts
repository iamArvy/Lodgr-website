import type { PaymentPlan } from "./payment-plan";
import type { Property } from "./property";

export interface Lease {
  id: string;
  dueDate?: Date;
  endDate?: Date;
  status: "active" | "expired" | "ended";
  price: number;
  property: Property,
  paymentPlan: PaymentPlan
}

export interface LeaseFrequency {
  id: string;
  name: string;
  createdAt: string
}

export interface PropertyLeaseFrequency {
  id: string;
  frequency: {
    id: string;
    name: string;
  };
  discount: number;
  createdAt: string;
}