export default defineEventHandler((event) => {
  const {id} = getRouterParams(event)
  const property = generateProperty({id})
  return {
    success: true,
    property,
    paymentPlans
  }
})
