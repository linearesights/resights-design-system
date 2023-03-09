<template>
    <v-chip
    label
    :class="variant"
    :small="size==='small'"
    :medium="size==='medium'"
    :disabled="disabled">
    <slot>Text</slot>
    </v-chip>
</template>
  
  <script>
  export default {
    props: {
      variant: {
        type: String,
        default: 'primary',
        validator(value) {
        const variants = ["primary", "outline"] // Variants
        return variants.includes(value)
        },
      },
      size: {
        type: String,
        default: 'medium',
        validator(value) {
        const sizes = ["small", "medium"] // Sizes
        return sizes.includes(value)
        },
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  };
  
  </script>