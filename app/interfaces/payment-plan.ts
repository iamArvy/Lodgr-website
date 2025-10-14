export interface PaymentPlan {
  id: string;
  label: string;
  value: string;
  discount?: number;
  duration: number;
}