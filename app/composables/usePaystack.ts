export const usePaystack = async (
  email: string,
  amount: number,
  reference: string,
  currency: string = 'NGN'
): Promise<{ success: boolean; cancelled: boolean; error: boolean }> => {
  if (!import.meta.client) {
    console.warn('Paystack can only be initialized on the client.')
    return { success: false, cancelled: false, error: true }
  }

  try {
    const { default: Paystack } = await import('@paystack/inline-js')
    const paystack = new Paystack()
    const key = useRuntimeConfig().public.paystackKey

    return new Promise((resolve) => {
      paystack.checkout({
        key,
        email,
        amount,
        reference,
        currency,
        onSuccess: () => resolve({ success: true, cancelled: false, error: false }),
        onCancel: () => resolve({ success: false, cancelled: true, error: false }),
        onError: () => resolve({ success: false, cancelled: false, error: true }),
      })
    })
  } catch (err) {
    console.error('Paystack initialization failed:', err)
    return { success: false, cancelled: false, error: true }
  }
}
