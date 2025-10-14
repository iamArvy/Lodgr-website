import { z } from 'zod'
import { faker } from '@faker-js/faker'
const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
})
// Generate a fake user
const generateUser = (email: string) => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.lastName(),
    lastName: faker.person.firstName(),
    email,
    phone: faker.phone.number({style: "human"}),
    createdAt: faker.date.past().toISOString(),
  }
}
export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  if (password === 'securePassword') {
    const user = generateUser(email)
    await setUserSession(event, {
      user,
    })
    return {}
  }
  throw createError({
    statusCode: 401,
    message: 'Bad credentials',
  })
})
