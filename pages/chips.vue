<template>
    <div>
        <RsChip size="small">
          Small - Primary
        </RsChip>
        <RsChip size="medium">
          Medium - Primary
        </RsChip>
        <br>
        <RsChip size="small" variant="outline">
          Small - Outlined
        </RsChip>
        <RsChip size="medium" variant="outline">
          Medium - Outlined
        </RsChip>
        <br>
        <RsChip size="small" disabled>
          Small - Primary (default) - disabled
        </RsChip>
        <RsChip size="medium" disabled>
          Medium - Primary (default) - disabled
        </RsChip>
        <br>
        <RsChip size="small" variant="outline" disabled>
          Small - Outlined - disabled
        </RsChip>
        <RsChip size="medium" variant="outline" disabled>
          Medium - Outlined - disabled
        </RsChip>
    </div>
</template>
  
<script>
import RsChip from '@/components/rs-elements/RsChip'

export default {
    components:{
        RsChip
    }
}
</script>

<style scoped lang="scss">
.v-chip {
  margin: .5rem;
}

</style>