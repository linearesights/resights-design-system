<template>
    <div>
        <v-label>
            <slot>Label</slot>
        </v-label>
        <v-text-field
        solo
        hide-details="auto"
        :placeholder="placeholder"
        :class="size"
        :disabled="disabled"
        required
        :rules="rules"
        value="Test"
        ></v-text-field>
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
        rules: {
            type: Array,
            default: () => ([])
        }
    },
};
  
</script>

<!-- NOTES:
    Using v-model to get input value from parent component: https://stackoverflow.com/questions/47311936/v-model-and-child-components
-->