export default defineEventHandler(() => {
  const sections = [
    {
      label: 'Flats in Lagos',
      properties: generateProperties(20, { location: 'lagos'}),
    },
    {
      label: 'New Bungalows in Port-harcourt',
      properties: generateProperties(20, { location: 'port-harcourt'}),
    },
    {
      label: 'Hostels in Abuja',
      properties: generateProperties(20, { location: 'abuja'}),
    }
  ]
  return {
    success: true,
    sections
  }
})
