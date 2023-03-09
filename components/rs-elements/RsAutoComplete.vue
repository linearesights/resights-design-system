<template>
    <div>
        <label :class="[labelIsEmphasized ? 'is-emphasized' : '', 'small']">
            <slot>Label</slot>
        </label>
        <v-autocomplete
        solo
        append-icon="$selectInputArrow"
        clear-icon="$clearIcon"
        :items="items"
        hide-details="auto"
        :menu-props="{ bottom: true, offsetY: true }"
        :class="size"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="value"
        attach
        clearable
        >
    </v-autocomplete>
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
        value: {
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
        },
        labelIsEmphasized: {
            type: Boolean,
            default: true,
        },
    }
};
  
</script>