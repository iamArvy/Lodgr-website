export default defineEventHandler((event) => {
  const query = getQuery(event)
  const status = query.status as string
  const leases = generateLeases(10)
  return status ? leases.filter((lease) => lease.status === status ) : leases
})
