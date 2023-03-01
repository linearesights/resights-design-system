<template>
    <div>
        <v-label>
            <slot>Label</slot>
        </v-label>
        <v-select
        solo
        :items="items"
        hide-details="auto"
        :menu-props="{ bottom: true, offsetY: true }"
        append-icon="$selectInputArrow"
        :class="size"
        :disabled="disabled"
        :placeholder="placeholder"
        required
        >
    </v-select>
    </div>
</template>
  
<script>
export default {
    props: {
        size: {
            type: String,
            default: 'medium',
            validator(value) {
            const sizes = ["small", "medium"] // Sizes
            return sizes.includes(value)
            },
        },
        placeholder: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        items: {
            type: Array,
            default: [],
        }
    }
};
  
</script>