import { generateProperties } from "~~/server/utils/mocks"

export default defineEventHandler(() => {
  const wishlist = generateProperties(10, { inFavourites: true });
  return wishlist
})
