import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export const useUpdateProfileInformation = () => {

const { user } = useUserSession()
const { success } = useToast()
const formSchema = toTypedSchema(z.object({
  firstName: z.string().min(2).max(50).optional(),
  lastName: z.string().min(2).max(50).optional(),
  email: z.email().optional(),
  phone: z.string().optional()
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    firstName: user.value?.firstName || '',
    lastName: user.value?.lastName || '',
    email: user.value?.email || '',
    phone: user.value?.phone || ''
  }
})

const submit = handleSubmit((values) => {
  success('Profile updated successfully!')
})

return {
  submit
}
}