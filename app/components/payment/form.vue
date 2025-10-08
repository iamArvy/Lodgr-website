<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next';
const props = defineProps<{ submit: () => void, values: any }>()
const radioItem = [
  { id: 'bedeebe6-d939-4cfb-9047-7b48c8b87044', label: 'Monthly Payment', description: 'Pay ₦120,000 every month', price: '₦120,000' },
  { id: 'bedeebe6-d939-4cfb-9047-7b48c8b8704e', label: 'Yearly Payment', description: 'Save ₦240,000 with annual payment', price: '₦1,200,000' }
]
</script>

<template>
  <form class="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Payment Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <FormField name="paymentPlan" type="radio" v-slot="{ componentField }">
          <FormItem>
            <FormControl>
              <RadioGroup v-bind="componentField" :defaultValue="radioItem[0]?.id" class="space-y-3">
                <div v-for="{ id, label, description, price } in radioItem" :key="id"
                  class="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div class="flex items-center space-x-3">
                    <RadioGroupItem :value="id" />
                    <Label htmlFor="monthly" class="cursor-pointer">
                      <p class="font-semibold">{{ label }}</p>
                      <p class="text-sm text-muted-foreground">
                        {{ description }}
                      </p>
                    </Label>
                  </div>
                  <p class="font-bold text-lg">{{ price }}</p>
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
          <div class="flex justify-between">
            Participant Information
            <FormField name="useProfile" v-slot="{ value, handleChange }">
              <FormItem>
                <div class="flex items-center gap-1">
                  <FormControl>
                    <Checkbox :model-value="value" @update:model-value="handleChange" />
                  </FormControl>
                  <FormLabel>Use Profile</FormLabel>
                </div>
              </FormItem>
            </FormField>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FormField name="firstName" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>First Name*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="First Name" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="firstName" v-slot="{ componentField }">
          <FormItem>
            <FormLabel> Last Name*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Last Name" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="email" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Email*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="email" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="phone" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Phone Number" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
      </CardContent>
    </Card>

    <Button size="lg" class="w-full">
      <CheckCircle2 class="mr-2 h-5 w-5" />
      Complete Payment
    </Button>
  </form>
</template>