<template>
    <div class="stack" :class="[direction, `space-${spacing}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        direction: {
        type: Array,
        default: () => (['vertical'])
      },
      spacing: {
        type: Array,
        default: () => ([])
      }
    },
}

</script>