<template>
    <div>
        <v-card>
            <v-card-title>Kontoindstillinger</v-card-title>
            <v-card-subtitle>Opdater kontoindstillinger</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
                <v-form ref="form_one">
                    <Stack direction="vertical" spacing="md">
                        <RsTextInput :rules="rules" value="Aske">Fornavn</RsTextInput>
                        <RsTextInput :rules="rules" value="Sørensen">Efternavn</RsTextInput>
                        <RsTextInput :rules="rules" value="aske@resights.dk" disabled>Email</RsTextInput>
                        <RsTextInput :rules="rules" value="+4540427829">Telefon</RsTextInput>
                        <RsTextInput :rules="rules" value="RESIGHTS APS" disabled>Organisation</RsTextInput>
                        <RsTextInput :rules="rules" value="41527080" disabled>CVR-nummer</RsTextInput>
                        <RsSelectInput value="Dansk" :items="['Dansk', 'Engelsk']">Sprog</RsSelectInput>
                    </Stack>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <RsBtn variant="primary" size="medium" @click.native="validate_one()">
                    Gem
                </RsBtn>
            </v-card-actions>
        </v-card>
        <v-card>
            <v-card-title>Adgangskode</v-card-title>
            <v-card-subtitle>Opdater adgangskode</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
                <v-form ref="form_two">
                    <Stack direction="vertical" spacing="md">
                        <RsTextInput :rules="rules">Nuværende adgangskode</RsTextInput>
                        <RsTextInput :rules="rules">Ny adgangskode</RsTextInput>
                        <RsTextInput :rules="rules">Gentag ny adgangskode</RsTextInput>
                    </Stack>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <RsBtn variant="primary" size="medium" @click.native="validate_one()">
                    Gem
                </RsBtn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import RsTextInput from '@/components/rs-elements/RsTextInput'
import RsSelectInput from '@/components/rs-elements/RsSelectInput'
import RsBtn from '@/components/rs-elements/RsBtn'
import Stack from '@/src/ui/Stack'

export default {
    components: {
        RsTextInput,
        RsSelectInput,
        RsBtn,
        Stack
    },
    data(){
        return {
            rules: [
                v => !!v || 'This field is required'
            ],
        }
    },
    methods: {
        validate_one () {
            this.$refs.form_one.validate()
        },
        validate_two () {
            this.$refs.form_two.validate()
        },
    }
  }
</script>

<style scoped>
.v-card {
    margin: 2rem auto;
    max-width: 700px;
}
.v-form {
    padding: 0 !important;
}
</style>