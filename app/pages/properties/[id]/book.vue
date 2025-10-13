<!-- import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
CreditCard,
Building2,
CheckCircle2,
Calendar,
MapPin,
} from "lucide-react";
import apartment1 from "@/assets/apartment-1.jpg";

const Payment = () => {
return (
<div class="min-h-screen flex flex-col">
      <Navbar />

      

      <Footer />
    </div>
);
};

export default Payment; -->

<script setup lang="ts">
import { generateProperty, paymentPlans } from '~/mocks';
const property = generateProperty()
const { submit, values } = useLeaseForm(property.id)
definePageMeta({
  middleware: ['auth'],
})
useAppTitle("Bookings Page")
</script>
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Complete Your Booking</h1>
    <form @submit.prevent="submit" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <BookingForm :plans="paymentPlans" class="lg:col-span-2 " />
      <BookingSummary :values="values" :property="property" :plans="paymentPlans" />
    </form>
  </div>
</template>