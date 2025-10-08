// composables/useExplorer.ts
export const useExplorer = () => {
  const route = useRoute()
  const router = useRouter()

  // 🔹 Filters (sync with params + query)
  const filters = reactive({
    location: (route.params.location as string) || 'New York',
    type: (route.params.type as string) || 'all',
    purpose: (route.query.purpose as string) || 'for-rent',
    rentFrequency: (route.query.rentFrequency as string) || 'monthly',
    minPrice: (route.query.minPrice as string) || '0',
    maxPrice: (route.query.maxPrice as string) || '1000000',
    roomsMin: (route.query.roomsMin as string) || '0',
    bathsMin: (route.query.bathsMin as string) || '0',
    sort: (route.query.sort as string) || 'price-desc',
    areaMax: (route.query.areaMax as string) || '35000',
    locationExternalIDs: (route.query.locationExternalIDs as string) || '5002',
    categoryExternalID: (route.query.categoryExternalID as string) || '4',
    page: (route.query.page as string) || '1',
  })

  // 🔹 Property Types (fetched once, SSR + CSR ok)
  // const { data: types } = useFetch('/api/property-types')

  // 🔹 Properties (SSR first, CSR later)
  // const { data: items, pending, error, refresh } = useAsyncData(
  //   () => `homes-${filters.location}-${filters.type}-${JSON.stringify(route.query)}`,
  //   () =>
  //     $fetch('/api/homes', {
  //       query: { ...filters }, // pass filters directly
  //     }),
  //   {
  //     watch: [() => ({ ...filters })], // re-fetch on filter change
  //     default: () => [],
  //   }
  // )

  // 🔹 Update filters + sync query string
  function updateFilters(newFilters: Record<string, string | number>) {
    Object.assign(filters, newFilters) // update state
    router.push({
      query: { ...route.query, ...filters, ...newFilters },
    })
  }

  function goToPage(page: number) {
    updateFilters({ page })
  }

  return {
    // types,
    // items,
    filters,
    // pending,
    // error,
    // refresh,
    updateFilters,
    goToPage,
  }
}
