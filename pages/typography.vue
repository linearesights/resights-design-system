<template>
  <v-container>
    <div>
      <v-card v-for="[name, cls] in classes" :key="name" class="my-4">
        <div :class="[cls, 'pa-2']">
          {{ name }}
        </div>
        <v-divider></v-divider>
        <div class="text-class pa-2 rs-semantic-text-sm-regular">
          <div>Class:</div>
          <div>
            {{ cls }}
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
export default {
  data: () => ({
    classes: [
      ["xs-regular", "rs-semantic-text-xs-regular"],
      ["xs-medium", "rs-semantic-text-xs-medium"],
      ["xs-semi-bold", "rs-semantic-text-xs-semi-bold"],
      ["sm-regular", "rs-semantic-text-sm-regular"],
      ["sm-medium", "rs-semantic-text-sm-medium"],
      ["sm-semi-bold", "rs-semantic-text-sm-semi-bold"],
      ["md-regular", "rs-semantic-text-md-regular"],
      ["md-medium", "rs-semantic-text-md-medium"],
      ["md-semi-bold", "rs-semantic-text-md-semi-bold"],
      ["lg-regular", "rs-semantic-text-lg-regular"],
      ["lg-medium", "rs-semantic-text-lg-medium"],
      ["lg-semi-bold", "rs-semantic-text-lg-semi-bold"],
      ["xl-semi-bold", "rs-semantic-text-xl-semi-bold"],
      ["xxl-semi-bold", "rs-semantic-text-xxl-semi-bold"],
    ]
  }),
};
</script>

<style>
.text-class{
  color: var(--rs-semantic-color-text-subdued);
}
</style>