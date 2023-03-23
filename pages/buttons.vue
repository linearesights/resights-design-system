<template>
  <div>
    <h2 class="ma-4 rs-semantic-text-lg-semi-bold">Buttons</h2>
    <v-divider></v-divider>
    <div class="d-flex align-center ma-4 mb-10">
      <span>Large</span>
      <div class="d-flex">
        <RsBtn variant="primary" size="large">Primary</RsBtn>
        <RsBtn variant="secondary" size="large">Secondary</RsBtn>
        <RsBtn variant="tertiary" size="large">Tertiary</RsBtn>
        <RsBtn variant="ghost" size="large">Ghost</RsBtn>
      </div>
    </div>
    <div class="d-flex align-center ma-4 mb-10">
      <span>Medium</span>
      <div class="d-flex">
        <RsBtn variant="primary" size="medium">Primary</RsBtn>
        <RsBtn variant="secondary" size="medium">Secondary</RsBtn>
        <RsBtn variant="tertiary" size="medium">Tertiary</RsBtn>
        <RsBtn variant="ghost" size="medium">Ghost</RsBtn>
      </div>
    </div>
    <div class="d-flex align-center ma-4 mb-10">
      <span>Small</span>
      <div class="d-flex">
        <RsBtn variant="primary" size="small">Primary</RsBtn>
        <RsBtn variant="secondary" size="small">Secondary</RsBtn>
        <RsBtn variant="tertiary" size="small">Tertiary</RsBtn>
        <RsBtn variant="ghost" size="small">Ghost</RsBtn>
      </div>
    </div>
    <div class="d-flex align-center ma-4 mb-10">
      <span>Disabled</span>
      <div class="d-flex">
        <RsBtn variant="primary" size="small" disabled>Primary</RsBtn>
        <RsBtn variant="secondary" size="small" disabled>Secondary</RsBtn>
        <RsBtn variant="tertiary" size="small" disabled>Tertiary</RsBtn>
        <RsBtn variant="ghost" size="small" disabled>Ghost</RsBtn>
      </div>
    </div>
    <div class="d-flex align-center ma-4 mb-10">
      <span>With icon</span>
      <div class="d-flex">
        <RsBtn variant="primary" size="medium" icon="$searchIcon">Primary</RsBtn>
      </div>
    </div>
    <v-divider></v-divider>
    <h2 class="ma-4 rs-semantic-text-lg-semi-bold">Icon buttons</h2>
    <v-divider></v-divider>
    <div class="d-flex align-center ma-4 mb-10">
      <RsBtnIcon icon="$searchIcon"></RsBtnIcon>
    </div>
  </div>
</template>

<script lang="ts">
import RsBtn from '@/components/rs-elements/RsBtn'
import RsBtnIcon from '@/components/rs-elements/RsBtnIcon'

  export default {
    components: {
      RsBtn,
      RsBtnIcon
    },
  }
</script>

<style scoped lang="scss">
.v-btn{
  margin-left: 1rem;
}
span {
  width: 100px;
}
</style>