<script setup lang="ts">
const { user, clear: clearSession } = useUserSession()
async function logout() {
  await clearSession()
  await navigateTo('/')
}
const profileNavs = [
  { name: 'Profile', href: '/profile' },
  { name: 'Wishlist', href: '/wishlist' },
  { name: 'Leases', href: '/leases' },
]
</script>
<template>
  <DropdownMenu v-if="user">
    <DropdownMenuTrigger>
      <Avatar class="w-12 h-12">
        <AvatarImage v-if="user.avatarUrl" :src="user.avatarUrl" :alt="user.firstName + ' ' + user.lastName" />
        <AvatarFallback class="font-bold text-sm">
          {{ user.firstName.charAt(0) + user.lastName.charAt(0) }}
        </AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel class="font-bold">My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem v-for="{ name, href } in profileNavs" :key="name" @click="navigateTo(href)">
        {{ name }}
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="logout">Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <Button v-else @click="navigateTo('/login')" variant="outline">
    <Icon name="lucide:user" size="20" class="text-primary" />
    <span class="hidden md:inline"> Sign in </span>
  </Button>
</template>