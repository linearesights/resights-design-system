<template>
      <v-btn
          fab
          depressed
          :ripple=false
          :class="variant"
          :small="size==='small'"
          :medium="size==='medium'"
          :large="size==='large'"
          :diabled="disabled"
          >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
  </template>
  
  <script>
  // TODO - missing styling
  export default {
    props: {
      variant: {
        type: String,
        default: 'tertiary',
        validator(value) {
        const variants = ["tertiary", "ghost"] // Variants
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
    },
  };
  
  </script>