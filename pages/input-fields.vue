<template>
    <v-form class="ma-6">
        <h2>Text field</h2>
        <RsTextInput placeholder="Placeholder">
            Label
        </RsTextInput>
        <RsTextInput disabled placeholder="Placeholder">
            Label
        </RsTextInput>
        <h2>Select field</h2>
        <RsSelectInput :items="['a', 'b']">Sprog</RsSelectInput>
    </v-form>
</template>

<script>
import RsTextInput from '@/components/rs-elements/RsTextInput'
import RsSelectInput from '@/components/rs-elements/RsSelectInput'

export default {
    components: {
        RsTextInput,
        RsSelectInput
    },
    data () {
        return {
            items: ['a', 'b', 'c']
        }
    }
  }
</script>

<style>
    .v-form {
        max-width: 500px;
        background-color: white;
        padding: 3rem;
    }
</style>