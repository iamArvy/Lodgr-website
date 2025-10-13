<script setup lang="ts">
const { submit } = useLoginForm()
setPageLayout('auth')
</script>
<template>
  <form @submit.prevent="submit" class="space-y-6">
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
        <FormDescription>
          This is a demo application, password is "securePassword"
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <div>
      <Button class="w-full" type="submit">Login</Button>
    </div>
  </form>
</template>