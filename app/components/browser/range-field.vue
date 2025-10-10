<script setup lang="ts">
interface Props {
  modelValue?: number[]
  label: string
  description?: string
  min?: number
  max?: number
  step?: number
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <Field>
    <FieldTitle>{{ label }}</FieldTitle>
    <Slider :model-value="props.modelValue" @update:model-value="emit('update:modelValue', $event)" :max="max"
      :min="min" :step="step" class="w-full" />
    <div class="flex justify-between items-center gap-4">
      <Input type="number" :model-value="props.modelValue?.[0]" @input="
        emit('update:modelValue', [
          $event.target.valueAsNumber,
          props.modelValue?.[1] ?? 0
        ])
        " :min="min" :max="max" />
      <span>-</span>
      <Input type="number" :model-value="props.modelValue?.[1]" @input="
        emit('update:modelValue', [
          props.modelValue?.[0] ?? 0,
          $event.target.valueAsNumber
        ])
        " :min="min" :max="max" />
    </div>
  </Field>
</template>
