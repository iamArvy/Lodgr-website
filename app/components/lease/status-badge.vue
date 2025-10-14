<script setup lang="ts">
import type { Lease } from '~/interfaces/lease';

type LeaseStatus = Lease['status'];

interface LeaseStatusBadgeProps {
  status: LeaseStatus;
}

const statusConfig = {
  active: {
    label: "Active",
    icon: "🟢",
    class: "bg-green-500/10 text-green-700 border-green-500/20",
  },
  expired: {
    label: "Expired",
    icon: "🟠",
    class: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  },
  ended: {
    label: "Ended",
    icon: "🔴",
    class: "bg-red-500/10 text-red-700 border-red-500/20",
  }
};

const props = defineProps<LeaseStatusBadgeProps>()
const config = statusConfig[props.status];
</script>
<template>
  <Badge variant="outline" :class="config.class">
    <span class="mr-1">{{ config.icon }}</span>
    {{ config.label }}
  </Badge>
</template>