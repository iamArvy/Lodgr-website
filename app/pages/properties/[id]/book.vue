<script setup lang="ts">
const { params } = useRoute()
const { data } = await useFetch(`/api/properties/${params.id}`);
const { property, paymentPlans } = data.value ? data.value : {};
const { submit, values } = useLeaseForm(property?.id ?? '')
definePageMeta({
  middleware: ['auth'],
})
useAppTitle("Bookings Page")
</script>
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Complete Your Booking</h1>
    <form @submit.prevent="submit" class="grid grid-cols-1 lg:grid-cols-3 gap-8" v-if="property">
      <BookingForm :plans="paymentPlans ?? []" :price="property.price" class="lg:col-span-2 " />
      <BookingSummary :values="values" :property="property" :plans="paymentPlans ?? []" />
    </form>
  </div>
</template>