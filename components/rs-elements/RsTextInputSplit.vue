<template>
    <div>
        <label :for="inputId" :class="[labelIsEmphasized ? 'is-emphasized' : '', 'small']">
            <slot>Label</slot>
        </label>
        <div class="split-field">
            <v-text-field
            solo
            hide-details="auto"
            :placeholder="placeholderLeft"
            :class="size"
            :disabled="disabled"
            required
            :rules="rules"
            :value="value"
            class="left-field"
            :id="inputId"
            ></v-text-field>
            <v-text-field
            solo
            hide-details="auto"
            :placeholder="placeholderRight"
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
        placeholderLeft: {
            type: String,
            default: '',
        },
        placeholderRight: {
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
    data(){
        return {
            inputId: null,
        }
    },
    mounted () {
        this.inputId = this._uid
    }
};
  
</script>