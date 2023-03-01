<template>
  <div>
    <div class="d-flex align-center ma-4 mb-10">
      <span>Large</span>
      <div class="d-flex">
        <v-btn large>Default</v-btn>
        <v-btn depressed large color="primary" class="primary">Primary</v-btn>
        <v-btn depressed large class="secondary">Secondary</v-btn>
        <v-btn depressed large class="tertiary">Tertiary</v-btn>
        <v-btn text large class="ghost">Text</v-btn>
      </div>
    </div>
    <!-- <div class="d-flex align-center ma-4 mb-10">
      <span>Icons</span>
      <div class="d-flex">
        <v-btn>
          <v-icon left>x</v-icon>
          Primary
        </v-btn>
      </div>
    </div> -->
    <div class="d-flex align-center ma-4 mb-10">
      <span>Medium</span>
      <div class="d-flex">
        <v-btn medium>Default</v-btn>
        <v-btn depressed medium color="primary" class="primary">Primary</v-btn>
        <v-btn depressed medium class="secondary">Secondary</v-btn>
        <v-btn depressed medium class="tertiary">Tertiary</v-btn>
        <v-btn text medium class="ghost">Text</v-btn>
      </div>
    </div>
    <div class="d-flex align-center ma-4 mb-10">
      <span>Small</span>
      <div class="d-flex">
        <v-btn small>Default</v-btn>
        <v-btn depressed small color="primary" class="primary">Primary</v-btn>
        <v-btn depressed small class="secondary">Secondary</v-btn>
        <v-btn depressed small class="tertiary">Tertiary</v-btn>
        <v-btn text small class="ghost">Text</v-btn>
      </div>
    </div>
    <div class="d-flex align-center ma-4 mb-10">
      <span>Disabled</span>
      <div class="d-flex">
        <v-btn small disabled>Default</v-btn>
        <v-btn depressed small disabled color="primary" class="primary">Primary</v-btn>
        <v-btn depressed small disabled class="secondary">Secondary</v-btn>
        <v-btn depressed small disabled class="tertiary">Tertiary</v-btn>
        <v-btn text small disabled class="ghost">Text</v-btn>
      </div>
    </div>
    <RsBtn variant="secondary" size="large">
      Primary
    </RsBtn>
    <RsBtn variant="tertiary" size="small">
      Tertiary
    </RsBtn>
  </div>
</template>

<script lang="ts">
import RsBtn from '@/components/rs-elements/RsBtn'

  export default {
    name: "Buttons",
    components: {
      RsBtn
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