<template>
    <div>
        <label v-if="!hideLabel" :for="inputId" :class="[labelIsEmphasized ? 'is-emphasized' : '', 'small']">
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
        :id="inputId"
        :prepend-inner-icon="icon"
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
        hideLabel: {
            type: Boolean,
            default: false,
        },
        items: {
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