<script setup lang="ts">
import { Home, MapPin, Search } from 'lucide-vue-next';
import { mockPropertyTypes } from '~/mocks/property-types';
const { push } = useRouter()
const isExpanded = ref(false)
const location = ref<string>('')
const propertyType = ref('')
const handleSearch = () => {
  push({ name: 'explorer', query: { location: location.value, propertyType: propertyType.value } })
};
const types = mockPropertyTypes;
</script>
<template>
  <div class="w-full max-w-4xl mx-auto">
    <div class="bg-card rounded-2xl shadow-xl border-2 border-border transition-all duration-300"
      :class="isExpanded ? 'p-6' : 'p-3'" @click="isExpanded = true">
      <button v-if="!isExpanded"
        class="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-muted/50 rounded-lg transition-colors">
        <Search class="h-5 w-5 text-muted-foreground" />
        <span class="text-muted-foreground">Search for apartments in Lagos, Abuja, Port Harcourt...</span>
      </button>
      <div v-else class="space-y-4 animate-fade-in">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <Label class="text-sm font-medium flex items-center gap-2">
              <MapPin class="h-4 w-4 text-primary" />
              Location
            </Label>
            <Input placeholder="Lagos, Abuja, Port Harcourt..." v-model="location" class="h-12" />
          </div>

          <div class="space-y-2">
            <Label class="text-sm font-medium flex items-center gap-2">
              <Home class="h-4 w-4 text-primary" />
              Property Type
            </Label>
            <Select v-model="propertyType">
              <SelectTrigger class="h-12">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem v-for="{ name, slug } in types" :value="slug">{{ name }}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button @click="handleSearch" type="submit" size="lg" class="w-full md:w-auto">
          <Search class="mr-2 h-5 w-5" />
          Search Properties
        </Button>
      </div>
    </div>
  </div>
</template>