import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export const useUpdatePassword = () => {
  const { success } = useToast()
  const formSchema = toTypedSchema(z.object({
    currentPassword: z.string().min(2).max(50),
    newPassword: z.string().min(2).max(50),
  }))

  const { handleSubmit } = useForm({
    validationSchema: formSchema
  })

  const submit = handleSubmit((values) => {
    success('Password updated successfully!')
  })

  const reset = () => {
    success('Password reset link sent to your email!')
  }

  return {
    submit,
    reset
  }
}