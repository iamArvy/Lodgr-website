<script setup lang="ts">
const { submit } = useLoginForm()
</script>
<template>
  <form @submit.prevent="submit" class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <FormField name="email" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Email*</FormLabel>
        <FormControl>
          <Input v-bind="componentField" type="email" placeholder="Email" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="password" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Password*</FormLabel>
        <FormControl>
          <Input v-bind="componentField" type="password" placeholder="Password" />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">Save Changes</Button>
  </form>
</template>