<template>
    <RsTabs :items="tabs"></RsTabs>
</template>

<script>
import RsTabs from '@/components/rs-elements/RsTabs'

  export default {
    components: {
      RsTabs
    },
    data(){
        return {
            tabs: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8']
        }
    }
  }
</script>

