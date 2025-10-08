import { faker } from '@faker-js/faker'
// Generate a fake user
export function generateUser(email: string) {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.lastName(),
    lastName: faker.person.firstName(),
    email,
    phone: faker.phone.number({style: "international"}),
    createdAt: faker.date.past().toISOString(),
  }
}