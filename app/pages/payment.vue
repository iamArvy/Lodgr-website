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
import { generateProperty } from '~/mocks';


// import auth from '~/middlewares/auth';
// definePageMeta({
//   middleware: auth
// })
const property = generateProperty()
const { submit, values } = useLeaseForm(property.id)
</script>
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Complete Your Booking</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <PaymentForm class="lg:col-span-2" :submit="submit" :values="values" />
      <PaymentSummary :values="values" />
    </div>
  </div>
</template>