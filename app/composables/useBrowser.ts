import type { PropertyFilter } from "~/interfaces/property/filters"

export const useBrowser = () => {
  const {params, query, path} = useRoute()
  const filters = ref<PropertyFilter>({
    location: params.location as string,
    type: params.type as string,
    price: query.price as unknown as number[] || [100000, 2000000],
    bedrooms: query.bedrooms as unknown as number[] || [1, 10],
    bathrooms: query.bathrooms as unknown as number[] || [1, 10],
    amenities: query.amenities as string[],
  })

  // Amenities handler
  const toggleAmenity = (id: string) => {
    const arr = filters.value.amenities || []
    if (arr.includes(id)) {
      filters.value.amenities = arr.filter(a => a !== id)
    } else {
      filters.value.amenities = [...arr, id]
    }
  }

  function applyFilters() {
    const allFilters = filters.value
    const { location, type, ...query } = allFilters
    // const {location, type, ...filters} = filters.value
    const route =
      type
        ?`/browse/${location ?? 'all'}/${type}`
        : location
          ? `/browse/${location}`
          :'/browse';
    navigateTo({path: route, query: {...query}})
  }

  function paginate(page: number) {
    navigateTo({path: path, query: {...query, page}})
  }

  return {
    filters,
    applyFilters,
    paginate,
    toggleAmenity
  }
}
