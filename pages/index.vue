<template>
  <div>
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
    <v-chip color="primary lighten-3">Test 1</v-chip>
    <v-chip color="primary lighten-4">Test 2</v-chip>
    <v-chip color="primary lighten-5">Test 3</v-chip>
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