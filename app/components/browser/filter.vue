<script setup lang="ts">
import { states } from '~/constants/browser'
import { useBrowser } from '~/composables/useBrowser'
import { mockPropertyTypes } from '~/mocks/property-types'
import { amenities } from '~/mocks/amenities'
import { Filter } from 'lucide-vue-next'

const { applyFilters, filters, toggleAmenity } = useBrowser()

// Reactive slider states

</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        <Filter />
        Apply Filters
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Page Filters</SheetTitle>
      </SheetHeader>
      <div class=" grid space-y-6 px-4 overflow-y-auto ">
        <div class="space-y-2">
          <Label>Location</Label>
          <Select v-model="filters.location" class="w-full">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent class="max-h-[200px]">
              <SelectItem v-for="{ slug, name } in states" :key="slug" :value="slug">
                {{ name }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <Label>Property Type</Label>
          <Select v-model="filters.type" class="w-full">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="{ slug, name } in mockPropertyTypes" :key="slug" :value="slug">
                {{ name }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <BrowserRangeField v-model="filters.price" label="Price" description="Price" :min="100000" :max="2000000"
          :step="50000" />
        <BrowserRangeField v-model="filters.bedrooms" label="Bedrooms" description="Bedrooms" :min="1" :max="10"
          :step="1" />
        <BrowserRangeField v-model="filters.bathrooms" label="Bathrooms" description="Bathrooms" :min="1" :max="10"
          :step="1" />
        <!-- Amenities -->
        <FieldGroup>
          <FieldSet>
            <FieldLegend variant="label">Amenities</FieldLegend>
            <FieldDescription>Select amenities</FieldDescription>
            <FieldGroup class="gap-3 flex flex-wrap">
              <Field v-for="{ id, name, icon } in amenities" :key="id" orientation="horizontal">
                <Checkbox :model-value="filters.amenities?.includes(id)" @update:model-value="() => toggleAmenity(id)"
                  :id="`amenity-checkbox-${id}`" />
                <FieldLabel :for="`amenity-checkbox-${id}`" class="font-normal">
                  <Icon :name="icon" />
                  {{ name }}
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>

        <!-- <Button type="submit" class="w-full">Apply Filters</Button> -->
      </div>
      <SheetFooter>
        <SheetClose as-child>
          <Button type="submit" @click="applyFilters">
            Save Filters
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
