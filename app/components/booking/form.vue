<script setup lang="ts">
import { formatPrice } from '~/helpers/format-price';
import type { PaymentPlan } from '~/interfaces';
const props = defineProps<{ plans: PaymentPlan[], price: number }>()
function planPrice(duration: number, discount?: number) {
  const planPrice = props.price * duration;
  if (discount) {
    return Math.round(planPrice * (1 - discount / 100));
  }
  return planPrice
}
</script>

<template>
  <div class="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Payment Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <FormField name="paymentPlan" type="radio" v-slot="{ componentField }">
          <FormItem>
            <FormControl>
              <RadioGroup v-bind="componentField" class="space-y-3">
                <div v-for="{ id, label, discount, duration } in plans" :key="id"
                  class="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div class="flex items-center space-x-3 w-full">
                    <RadioGroupItem :value="id" />
                    <Label htmlFor="monthly"
                      class="cursor-pointer flex flex-col sm:flex-row sm:justify-between  items-start flex-1">
                      <div class="flex flex-col space-y-1">
                        <p class="font-semibold">{{ label }}</p>
                        <p v-if="discount" class="text-sm text-muted-foreground">
                          {{ discount }}% discount
                        </p>
                      </div>
                      <p class="font-bold text-lg">{{ formatPrice(planPrice(duration, discount)) }}</p>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>
          Participant Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FormField name="participant.firstName" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>First Name*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="First Name" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="participant.lastName" v-slot="{ componentField }">
          <FormItem>
            <FormLabel> Last Name*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Last Name" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="participant.email" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Email*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="email" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="participant.phone" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>+234</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput v-bind="componentField" />
              </InputGroup>
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
      </CardContent>
    </Card>
  </div>
</template>