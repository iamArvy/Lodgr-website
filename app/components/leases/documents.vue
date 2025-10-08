<script setup lang="ts">
import { Download, FileText } from 'lucide-vue-next';
import type { Document } from '~/interfaces';
defineProps<{ documents: Document[] }>()
</script>
<template>
  <Card>
    <CardHeader>
      <CardTitle>Rental Agreements & Documents</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="space-y-3">
        <div v-for="{ name, date, size } in documents" :key="name"
          class="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
          <div class="flex items-center gap-3">
            <FileText class="h-8 w-8 text-primary" />
            <div>
              <p class="font-semibold">{{ name }}</p>
              <p class="text-sm text-muted-foreground">
                {{ date }} • {{ size }}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Download class="h-4 w-4" />
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>