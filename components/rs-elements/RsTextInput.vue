<template>
    <div>
        <label :for="inputId" :class="[labelIsEmphasized ? 'is-emphasized' : '', 'small']">
            <slot>Label</slot>
        </label>
        <v-text-field
        solo
        hide-details="auto"
        :placeholder="placeholder"
        :class="size"
        :disabled="disabled"
        required
        :rules="rules"
        :value="value"
        :prepend-inner-icon="icon"
        :id="inputId"
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
        value: {
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
        },
        icon: {
            type: String,
            default: '',
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