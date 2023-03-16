<template>
    <div>
        <label :for="inputId" :class="[labelIsEmphasized ? 'is-emphasized' : '', 'small']">
            <slot>Label</slot>
        </label>
        <div class="treeview-input">
            <v-text-field
            solo
            hide-details
            :placeholder="placeholder"
            :class="size"
            :disabled="disabled"
            required
            :value="value"
            :prepend-inner-icon="icon"
            v-model="search"
            clearable
            clear-icon="$clearIcon"
            prepend-inner-icon="$searchIcon"
            :id="inputId"
            ></v-text-field>
            <v-treeview
            selectable
            :items="items"
            :search="search"
            :filter="filter"
            :open.sync="open"
            expand-icon="$selectInputArrow"
            off-icon=""
            on-icon="$checkmarkIcon"
            indeterminate-icon="$checkmarkIndeterminateIcon"
            indeterminate
            ></v-treeview>
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
        },
    },
    data() {
        return {
            open: [],
            search: null,
            caseSensitive: false,
            inputId: null,
        }
    },
    computed: {
      filter () {
        return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
      },
    },
    mounted () {
        this.inputId = this._uid
    }
};
  
</script>