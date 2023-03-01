<template>
    <v-form ref="form">
        <RsTextInput :rules="rules">Fornavn</RsTextInput>
        <RsTextInput :rules="rules">Efternavn</RsTextInput>
        <RsTextInput :rules="rules" disabled>Email</RsTextInput>
        <RsTextInput :rules="rules">Telefon</RsTextInput>
        <RsTextInput :rules="rules" disabled>Organisation</RsTextInput>
        <RsTextInput :rules="rules" disabled>CVR-nummer</RsTextInput>
        <RsSelectInput :items="['Dansk', 'Engelsk']">Sprog</RsSelectInput>
        <RsBtn variant="primary" size="medium" @click.native="validate()">
            Gem
        </RsBtn>
    </v-form>
</template>

<script>
import RsTextInput from '@/components/rs-elements/RsTextInput'
import RsSelectInput from '@/components/rs-elements/RsSelectInput'
import RsBtn from '@/components/rs-elements/RsBtn'

export default {
    components: {
        RsTextInput,
        RsSelectInput,
        RsBtn
    },
    data(){
        return {
            rules: [
                v => !!v || 'This field is required'
            ],
        }
    },
    methods: {
        validate () {
            this.$refs.form.validate()
            console.log("in function")
        },
    }
  }
</script>

<style>
    .v-form {
        margin: 2rem auto;
        width: 100%;
        max-width: 700px;
        background-color: white;
        padding: 3rem;
    }
</style>