<script setup lang="ts">
import { Calendar, MapPin } from 'lucide-vue-next';

</script>

<template>
  <div class="space-y-6">
    <Card class="sticky top-20">
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent class="space-y-6">
        <div class="aspect-video rounded-lg overflow-hidden">
          <!-- <img src={apartment1} alt="Property" class="w-full h-full object-cover" /> -->
        </div>

        <div>
          <h3 class="font-bold text-lg mb-2">
            2-Bedroom Flat in Lekki Phase 1
          </h3>
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin class="h-4 w-4" />
            <span>Lekki Phase 1, Lagos</span>
          </div>
        </div>

        <Separator />

        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-muted-foreground">Rent (Yearly)</span>
            <span class="font-semibold">₦1,200,000</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">Service Fee</span>
            <span class="font-semibold">₦50,000</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">Security Deposit</span>
            <span class="font-semibold">₦200,000</span>
          </div>
        </div>

        <Separator />

        <div class="flex justify-between text-lg">
          <span class="font-bold">Total</span>
          <span class="font-bold text-primary">₦1,450,000</span>
        </div>

        <div class="flex items-start gap-2 p-3 bg-muted rounded-lg text-sm">
          <Calendar class="h-4 w-4 text-primary mt-0.5" />
          <div>
            <p class="font-semibold">Move-in Date</p>
            <p class="text-muted-foreground">February 1, 2025</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>