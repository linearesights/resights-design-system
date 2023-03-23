<template>
    <div class="d-md-flex h-100">
        <div class="flex-grow-1">
            <div class="navigation">
                <div class="pa-4 pb-0 d-flex justify-space-between w-100">
                    <div class="type-selection">
                        <RsBtn variant="secondary" icon="$homeIcon">Property</RsBtn>
                        <RsBtn variant="ghost" icon="$signageIcon">Company</RsBtn>
                        <RsBtn variant="ghost" icon="$briefcaseIcon">Homes for sale</RsBtn>
                    </div>
                    <div class="type-selection-dropdown">
                        <RsBtnDropdown icon="$homeIcon" :items="typeItems" variant="secondary">Property</RsBtnDropdown>
                    </div>
                    <RsBtn icon="$searchIcon">Søg</RsBtn>
                </div>
                <div class="filters pa-4 d-flex justify-space-between align-center">
                    <div>
                        <RsChip close size="medium">Ejendomstype</RsChip>
                        <RsChip close size="medium">Ejerskabstype</RsChip>
                        <p class="rs-semantic-text-md-regular d-inline ml-2 cursor-pointer reset">Reset all</p>
                    </div>
                    <p class="rs-semantic-text-sm-regular"><span class="rs-semantic-text-sm-semi-bold">1000 </span> Ejendomme</p>
                </div>
            </div>
            <RsTabs :items="tabs">
                <v-row>
                    <v-col class="col-12 col-md-6 mt-2 pr-md-2">
                        <Stack :direction="['vertical']" :spacing="['md']">
                            <RsTextInput placeholder="Placeholder">
                                Ejendomstype
                            </RsTextInput>
                            <RsSelectInput placeholder="Placeholder">
                                Ejerskabstype
                            </RsSelectInput>
                            <RsTreeView placeholder="Placeholder" :items="treeViewItems">
                                Bygningens anvendelse
                            </RsTreeView>
                        </Stack>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="col-12 col-md-6 mt-md-2 pl-md-2">
                        <Stack direction="vertical" spacing="md">
                            <RsTextInputSplit placeholderLeft="From" placeholderRight="To">
                                Antal enheder
                            </RsTextInputSplit>
                            <RsTextInputSplit placeholderLeft="From" placeholderRight="To">
                                Beboelsesareal (Bygning)
                            </RsTextInputSplit>
                            <RsTextInputSplit placeholderLeft="From" placeholderRight="To">
                                Erhvervsareal (Bygning)
                            </RsTextInputSplit>
                            <RsTextInputSplit placeholderLeft="From" placeholderRight="To">
                                Opførelsesår
                            </RsTextInputSplit>
                        </Stack>
                </v-col>
                </v-row>
            </RsTabs>
        </div>
        <img class="placeholder-map" src="~/static/placeholder-map.png" alt="">
    </div>
</template>

<script>
import RsBtn from '@/components/rs-elements/RsBtn'
import RsTabs from '@/components/rs-elements/RsTabs'
import RsAutoComplete from '@/components/rs-elements/RsAutoComplete'
import RsTextInput from '@/components/rs-elements/RsTextInput'
import RsSelectInput from '@/components/rs-elements/RsSelectInput'
import RsTreeView from '@/components/rs-elements/RsTreeView'
import RsBtnDropdown from '@/components/rs-elements/RsBtnDropdown'
import RsTextInputSplit from '../components/rs-elements/RsTextInputSplit.vue'
import RsChip from '../components/rs-elements/RsChip.vue'
import Stack from '@/src/ui/Stack'

export default {
    components: {
    RsTabs,
    RsAutoComplete,
    RsTextInput,
    RsSelectInput,
    RsTreeView,
    RsBtn,
    RsBtnDropdown,
    RsTextInputSplit,
    RsChip,
    Stack
},
    data(){
        return {
            tabs: ['Populære', 'Placering', 'Ejerskab', 'Økonomi', 'Matrikel', 'Bygning', 'Enhed'],
            treeViewItems: [{
                id: 1,
                name: 'Bygninger til helårsbeboelse',
                children: [
                    { id: 2, name: 'item 1' },
                    { id: 3, name: 'item 2' },
                    { id: 4, name: 'item 3' },
                ],
            },
            {
                id: 5,
                name: 'Produktions- og lagerbygninger samt forsyning',
                children: [
                    { id: 6, name: 'item 1' },
                    { id: 7, name: 'item 2' },
                    { id: 8, name: 'item 3' },
                ],
            },
            {
                id: 9,
                name: 'Bygninger til fritidsformål',
                children: [
                    { id: 10, name: 'item 1' },
                    { id: 11, name: 'item 2' },
                    { id: 12, name: 'item 3' },
                ],
            }],
            typeItems: ['Property', 'Company', 'Homes for sale']
        }
    }
}

</script>

<style lang="scss">
.navigation {
    background: var(--rs-component-text-field-default-background-color);
}
// Chance when implemented on SPA
.type-selection{
    @media (max-width: 900px) {
        display: none;
    }
    &-dropdown {
        @media (min-width: 900px) {
        display: none;
        }
    }

}
.placeholder-map{
    width: 30vw;
    height: auto;
    object-fit: cover;
    @media (max-width: 900px) {
        display: none;
    }
}
.reset{
    color: var(--rs-semantic-color-primary-default);
}
</style>