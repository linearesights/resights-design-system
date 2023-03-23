<template>
  <v-btn
    depressed
    :class="variant"
    :small="size==='small'"
    :medium="size==='medium'"
    :large="size==='large'"
    :disabled="disabled"
    :ripple="false"
    >
    <v-icon v-if="icon">{{ icon }}</v-icon>
    <slot>Button</slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
      const variants = ["primary", "secondary", "tertiary", "ghost"] // Variants
      return variants.includes(value)
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
      const sizes = ["small", "medium", "large"] // Sizes
      return sizes.includes(value)
      },
    },
    disabled: {
        type: Boolean,
        default: false,
      },
    icon: {
        type: String,
        default: '',
      },
  }
};

</script>