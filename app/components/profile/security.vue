<script setup lang="ts">
const { submit, reset } = useUpdatePassword()
</script>
<template>
  <Card>
    <CardHeader>
      <CardTitle>Password & Security</CardTitle>
    </CardHeader>
    <CardContent class="space-y-4">
      <form @submit.prevent="submit" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField name="currentPassword" v-slot="{ componentField }" class="h-fit">
          <FormItem class="h-fit">
            <FormLabel>Current Password*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" type="password" />
            </FormControl>
            <FormDescription>
              Current Password is required to change your password.
            </FormDescription>
            <!-- <FormMessage /> -->
          </FormItem>
        </FormField>
        <FormField name="newPassword" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>New Password*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" type="password" />
            </FormControl>
            <FormDescription>
              <ul class="list-disc list-inside">
                <li>Password must be at least 8 characters long.</li>
                <li>Password must contain at least one uppercase letter.</li>
                <li>Password must contain at least one lowercase letter.</li>
                <li>Password must contain at least one number.</li>
                <li>Password must contain at least one special character.</li>
              </ul>
            </FormDescription>
            <!-- <FormMessage /> -->
          </FormItem>
        </FormField>
        <div class="col-span-1 md:col-span-2 flex justify-end gap-2 ">
          <Button type="button" @click="reset" variant="outline">Reset Password</Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </CardContent>
  </Card>
</template>