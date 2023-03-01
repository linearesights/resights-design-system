<template>
  <div>
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
    <v-chip color="primary lighten-3">hej med dig</v-chip>
    <v-chip color="primary lighten-4">hej med dig</v-chip>
    <v-chip color="primary lighten-5">hej med dig</v-chip>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
  }
</script>