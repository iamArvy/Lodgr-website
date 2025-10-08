<script setup lang="ts">
const { submit } = useUpdateProfileInformation()
</script>
<template>
  <Card>
    <CardHeader>
      <CardTitle>Profile Information</CardTitle>
    </CardHeader>
    <CardContent class="space-y-4">
      <form @submit.prevent="submit" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField name="firstName" v-slot="{ componentField }">
          <FormItem>
            <FormLabel> First Name</FormLabel>
            <FormControl>
              <Input v-bind="componentField" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="lastName" v-slot="{ componentField }">
          <FormItem>
            <FormLabel> Last Name</FormLabel>
            <FormControl>
              <Input v-bind="componentField" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="email" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Email*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" type="email" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="phone" v-slot="{ componentField }">
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
        <div class="col-span-1 md:col-span-2 flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </CardContent>
  </Card>
</template>