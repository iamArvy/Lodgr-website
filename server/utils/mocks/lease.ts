import { faker } from "@faker-js/faker"
import type { Lease } from "~/interfaces/lease"
import { generateProperty } from "./property"
import { generatePaymentPlan } from "./payment-plan"

export function generateLease(data?: Partial<Lease>) {
  return {
    id: data?.id || faker.string.uuid(),
    status: data?.status || faker.helpers.arrayElement(['active', 'expired', 'ended']) as "active" | "expired" | "ended",
    price: data?.price || faker.number.int({ min: 350000, max: 2000000 }),
    dueDate: data?.dueDate || faker.date.future(),
    endDate: data?.endDate || faker.date.past(),
    property: data?.property || generateProperty(),
    paymentPlan: data?.paymentPlan || generatePaymentPlan(),
  }
}

export function generateLeases(count: number = 10, data?: Partial<Lease>) {
  return Array.from({ length: count }, () => generateLease(data))
}