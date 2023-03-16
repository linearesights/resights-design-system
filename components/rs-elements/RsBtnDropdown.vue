<template>
    <v-menu offset-y v-model="menuIsActive">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            v-bind="attrs"
            v-on="on"
            depressed
            prepend-icon="mdi-cloud-upload"
            :class="variant"
            :small="size==='small'"
            :medium="size==='medium'"
            :large="size==='large'"
            :disabled="disabled"
            :ripple=false
            >
                <v-icon v-if="icon">{{ icon }}</v-icon>
                <slot></slot>
                <v-icon :class="menuIsActive ? 'menuActive' : ''" class="arrow-icon">$selectInputArrow</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item
            v-for="(item, index) in items"
            :key="index"
            >
                <div class="v-list-item__content">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                </div>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => (['No values'])
        },
        variant: {
            type: String,
            default: 'primary',
            validator(value) {
            const variants = ["primary", "secondary", "tertiary", "ghost"] // Variants
            return variants.includes(value)
            },
        },
        size: {
            type: String,
            default: 'medium',
            validator(value) {
            const sizes = ["small", "medium", "large"] // Sizes
            return sizes.includes(value)
            },
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
    },
    data(){
        return {
            menuIsActive: false
        }
    }
}

</script>