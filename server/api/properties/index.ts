export default defineEventHandler(() => {
  const properties = generateProperties(10)
  return {
    success: true,
    properties,
  }
})
