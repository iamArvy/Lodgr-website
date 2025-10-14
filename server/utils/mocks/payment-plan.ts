export const paymentPlans = [
  { id: 'bedeebe6-d939-4cfb-9047-7b48c8b87044', label: 'Monthly Payment', value: "monthly", description: 'Pay ₦120,000 every month', duration: 1 },
  { id: 'bedeebe6-d939-4cfb-9047-7b48c8b8704e', label: 'Quarterly Payment', value: "quarterly", discount: 10, duration: 3 },
  { id: 'bedeebe6-d939-4cfb-9047-7b48c8b8704f', label: 'Bi-annual Payment', value: "bi-annually", discount: 15, duration: 6 },
  { id: 'bedeebe6-d939-4cfb-9047-7b48c8b8704g', label: 'Annual Payment', value: "yearly", discount: 20, duration: 12}
]

export function generatePaymentPlan() {
  const index = Math.floor(Math.random() * paymentPlans.length)
  return paymentPlans[index ?? 0]
}

export function generatePaymentPlans() {
  return paymentPlans
}