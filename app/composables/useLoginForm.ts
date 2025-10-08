import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export const useLoginForm = () => {
  const { success, error } = useToast()
  const { loggedIn, user, fetch: refreshSession } = useUserSession()
  const { query } = useRoute()
  const redirectPath = query.redirect as string || '/'
  const formSchema = toTypedSchema(z.object({
    email: z.email(),
    password: z.string().min(8).max(50).optional()
  }))

const { handleSubmit } = useForm({
  validationSchema: formSchema
})


const submit = handleSubmit( async (values) => {
  try {
    const { data, error } = await useFetch('/api/login', {
      method: 'POST',
      body: values,
    })

    if (error.value) throw error.value
    success('Logged in successfully!')
    await refreshSession()
    navigateTo(redirectPath)
  } catch (err) {
    error('Login failed. Please try again.')
  }
 
  // push("/");
})
  // const submit = (values: { email: string; password: string }) => {
  //   // Simulate a login process
  //   const mockUser = {
  //     id: '1',
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     email: values.email,
  //     phone: '123-456-7890',
  //     joinedDate: new Date().toISOString()
  //   }
  //   authenticate(mockUser)
  //   push("/");
  //   success('Logged in successfully!')
  // }

  return {
    submit
  }
}