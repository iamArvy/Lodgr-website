import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export const useLeaseForm = (propertyId: string) => {

const { user } = useAuth()
const { success } = useToast()
const formSchema = toTypedSchema(z.object({
  paymentPlan: z.uuid(),
  useProfile: z.boolean(),
  participant: z.object({
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    email: z.string()
  }).optional(),
}))

const { handleSubmit, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    useProfile: true,
  }
})

const submit = handleSubmit((values) => {
  success('Profile updated successfully!')
})

return {
  submit,
  values
}
}