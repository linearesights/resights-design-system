<template>
    <div class="stack" :class="`${direction} spacing-${spacing}`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        direction: {
        type: String,
        default: 'vertical',
        // validator(value) {
        // const directions = ["vertical", "horizontal"] // directions
        // return directions.includes(value)
        // },
      },
      spacing: {
        type: String, 
        default: '',
        validator(value) {
        const stackValues = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'] // stack spacing options
        return stackValues.includes(value)
        },
      }
    },
}

</script>