<template>
    <div>
        <label :for="inputId" :class="[labelIsEmphasized ? 'is-emphasized' : '', 'small']">
            <slot>Label</slot>
        </label>
        <div class="split-field date-picker">
            <div class="left-field-wrapper">
                <v-menu
                    v-model="leftMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-x
                    min-width="auto"
                    bottom
                    attach
                    :left="true"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="leftDate"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        hide-details="auto"
                        v-bind="attrs"
                        v-on="on"
                        solo
                        :value="leftDate"
                        class="left-field"
                        :class="size"
                        :id="inputId"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="leftDate"
                    @input="leftMenu = false"
                    type="month"
                    no-title
                    ></v-date-picker>
                </v-menu>
            </div>
            <div class="right-field-wrapper">
                <v-menu
                    v-model="rightMenu"
                   :close-on-content-click="false"
                    transition="scale-transition"
                    offset-x
                    min-width="auto"
                    bottom
                    attach
                    :left="true"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="rightDate"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        hide-details="auto"
                        v-bind="attrs"
                        v-on="on"
                        solo
                        :value="rightDate"
                        class="right-field"
                        :class="size"
                        attach
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="rightDate"
                    @input="rightMenu = false"
                    type="month"
                    no-title
                    ></v-date-picker>
                </v-menu>
            </div>
        </div>
    </div>
</template>
  
<script> 
import RsTextInput from '@/components/rs-elements/RsTextInput'

export default {
    components: {
        RsTextInput
    },
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
    data(){
        return {
            leftDate: '',
            rightDate: '',
            leftMenu: false,
            rightMenu: false,
            inputId: null
        }
    },
    mounted () {
        this.inputId = this._uid
    }
};
  
</script>