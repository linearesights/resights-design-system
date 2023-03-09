<template>
    <div>
        <label :class="[labelIsEmphasized ? 'is-emphasized' : '', 'small']">
            <slot>Label</slot>
        </label>
        <div class="split-field">
            <v-combobox
            solo
            append-icon="$selectInputArrow"
            :items="itemsLeft"
            hide-details="auto"
            :menu-props="{ bottom: true, offsetY: true }"
            :class="size"
            :disabled="disabled"
            :placeholder="placeholder"
            :value="value"
            attach
            class="left-field"
            >
            </v-combobox>
            <v-combobox
            solo
            append-icon="$selectInputArrow"
            :items="itemsRight"
            hide-details="auto"
            :menu-props="{ bottom: true, offsetY: true }"
            :class="size"
            :disabled="disabled"
            :placeholder="placeholder"
            :value="value"
            attach
            class="right-field"
            >
            </v-combobox>
        </div>
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
        itemsLeft: {
            type: Array,
            default: [],
        },
        itemsRight: {
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