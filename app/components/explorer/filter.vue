<script setup lang="ts">
const priceRange = ref<[number, number]>([500000, 2000000]);
</script>
<template>
  <div class="space-y-6 p-6 bg-card rounded-xl border">
    <h2 class="text-xl font-bold">Filters</h2>

    <div class="space-y-2">
      <Label>Location</Label>
      <Input placeholder="Enter location" />
    </div>

    <div class="space-y-2">
      <Label>Property Type</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="flat">Flat</SelectItem>
          <SelectItem value="self-contained">Self-contained</SelectItem>
          <SelectItem value="duplex">Duplex</SelectItem>
          <SelectItem value="studio">Studio</SelectItem>
          <SelectItem value="bungalow">Bungalow</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div class="space-y-4">
      <Label>Price Range (₦/year)</Label>
      <Slider :v-model="priceRange" :range="true" :max="5000000" :min="200000" :step="100000" class="w-full" />
      <div class="flex justify-between text-sm text-muted-foreground">
        <span>₦{{ (priceRange[0] / 1000000).toFixed(1) }}M</span>
        <span>₦{{ (priceRange[1] / 1000000).toFixed(1) }}M</span>
      </div>
    </div>

    <div class="space-y-2">
      <Label>Bedrooms</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Any" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1+</SelectItem>
          <SelectItem value="2">2+</SelectItem>
          <SelectItem value="3">3+</SelectItem>
          <SelectItem value="4">4+</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div class="space-y-2">
      <Label>Bathrooms</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Any" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1+</SelectItem>
          <SelectItem value="2">2+</SelectItem>
          <SelectItem value="3">3+</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div class="space-y-3">
      <Label>Amenities</Label>
      <div class="space-y-2">
        <div class="flex items-center space-x-2">
          <Checkbox id="parking" />
          <label htmlFor="parking" class="text-sm cursor-pointer">
            Parking
          </label>
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox id="wifi" />
          <label htmlFor="wifi" class="text-sm cursor-pointer">
            WiFi
          </label>
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox id="furnished" />
          <label htmlFor="furnished" class="text-sm cursor-pointer">
            Furnished
          </label>
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox id="water" />
          <label htmlFor="water" class="text-sm cursor-pointer">
            24/7 Water
          </label>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <Label>Rent Frequency</Label>
      <Select defaultValue="yearly">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="yearly">Yearly</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <Button class="w-full">Apply Filters</Button>
  </div>
</template>