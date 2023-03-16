<template>
    <div>
        <label :for="inputId" :class="[labelIsEmphasized ? 'is-emphasized' : '', 'small']">
            <slot>Label</slot>
        </label>
        <v-select
        solo
        :items="items"
        hide-details="auto"
        :menu-props="{ bottom: true, offsetY: true }"
        append-icon="$selectInputArrow"
        clear-icon="$clearIcon"
        :class="size"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="value"
        attach
        clearable
        :id="inputId"
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
            default: () => ([]),
        },
        labelIsEmphasized: {
            type: Boolean,
            default: true,
        },
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