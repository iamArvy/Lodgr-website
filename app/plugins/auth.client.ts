export default defineNuxtPlugin(() => {
  const { user } = useAuth()

  const savedUser = localStorage.getItem('user')

  if (savedUser) {
    try {
      const parsedUser = JSON.parse(savedUser)
      user.value = parsedUser
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error)
    }
  }
})
