import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export const useLeaseForm = (propertyId: string) => {

const { user } = useUserSession()
const { success, error, info } = useToast()
const formSchema = toTypedSchema(z.object({
  paymentPlan: z.uuid(),
  participant: z.object({
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    email: z.string()
  }),
}))

const { handleSubmit, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    participant: {
      firstName: user.value?.firstName,
      lastName: user.value?.lastName,
      phone: user.value?.phone,
      email: user.value?.email
    }
  }
})


const submit = handleSubmit( async (values) => {
  const email = values.participant.email
  const amount = 1000000
  const reference = crypto.randomUUID()
  const payment = await usePaystack(email, amount, reference)
  if (payment.success) {
    success('Payment success!')
  } else if (payment.cancelled) {
    info('Payment unsuccessful')
  } else if (payment.error) {
    error('Payment cancelled')
  }
})

return {
  submit,
  values
}
}