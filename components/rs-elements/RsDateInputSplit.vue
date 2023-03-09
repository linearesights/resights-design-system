<template>
    <div>
        <label :class="[labelIsEmphasized ? 'is-emphasized' : '', 'small']">
            <slot>Label</slot>
        </label>
        <div class="split-field">
            <v-text-field
            solo
            hide-details="auto"
            :placeholder="placeholder"
            :class="size"
            :disabled="disabled"
            required
            :rules="rules"
            :value="value"
            class="left-field"
            ></v-text-field>
            <v-text-field
            solo
            hide-details="auto"
            :placeholder="placeholder"
            :class="size"
            :disabled="disabled"
            required
            :rules="rules"
            :value="value"
            class="right-field"
            ></v-text-field>
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
        rules: {
            type: Array,
            default: () => ([])
        },
        labelIsEmphasized: {
            type: Boolean,
            default: true,
        }
    },
};
  
</script>