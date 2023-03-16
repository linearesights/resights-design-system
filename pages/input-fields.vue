<template>
    <v-form class="ma-6">
        <RsTextInput placeholder="Placeholder">
            Text field - Medium
        </RsTextInput>
        <RsTextInput size="small" placeholder="Placeholder">
            Text field - small
        </RsTextInput>
        <RsTextInput disabled placeholder="Placeholder">
            Text field - disabled
        </RsTextInput>
        <RsTextInput icon="$searchIcon" placeholder="Placeholder">
            Text field - w. icon
        </RsTextInput>
        <RsTextInputSplit placeholder="Placeholder">
            Text field Split
        </RsTextInputSplit>
        <RsTextInputSplit disabled placeholder="Placeholder">
            Text field Split - disabled
        </RsTextInputSplit>
        <RsSelectInput :items="items">Select</RsSelectInput>
        <RsAutoComplete :items="items">Autocomplete</RsAutoComplete>
        <RsDateInputSplit>Date input Split</RsDateInputSplit>
        <RsComboInputSplit :itemsLeft="items" :itemsRight="items">Combobox - Split</RsComboInputSplit>
        <RsTreeView placeholder="Placeholder" :items="treeViewItems">TreeView</RsTreeView>
    </v-form>
</template>

<script>
import RsTextInput from '@/components/rs-elements/RsTextInput'
import RsTextInputSplit from '@/components/rs-elements/RsTextInputSplit'
import RsSelectInput from '@/components/rs-elements/RsSelectInput'
import RsAutoComplete from '@/components/rs-elements/RsAutoComplete'
import RsComboInputSplit from '@/components/rs-elements/RsComboInputSplit'
import RsTreeView from '@/components/rs-elements/RsTreeView'
import RsDateInputSplit from '@/components/rs-elements/RsDateInputSplit'

export default {
    components: {
        RsTextInput,
        RsSelectInput,
        RsAutoComplete,
        RsTextInputSplit,
        RsComboInputSplit,
        RsTreeView,
        RsDateInputSplit
    },
    data () {
        return {
            items: ['a', 'b', 'c'],
            treeViewItems: [{
                id: 1,
                name: 'Root',
                children: [
                    { id: 2, name: 'a' },
                    { id: 3, name: 'b' },
                    { id: 4, name: 'c' },
                ],
            }],
            picker: '',
        }
    }
  }
</script>

<style scoped>
    .v-form {
        max-width: 500px;
        background-color: var(--rs-semantic-color-surface-default);
        padding: 3rem;
        margin-bottom: 10rem !important;
    }
</style>