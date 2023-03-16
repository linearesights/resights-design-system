<template>
    <div>
        <v-tabs
        v-resize="onResize"
        v-model="currentItem"
        :class="menuIsActive ? 'menu-active' : ''"
        >
        <v-tab
            v-for="item in tabs"
            :key="item"
            :ripple=false
        >
            {{ item }}
        </v-tab>
    
        <v-menu
            v-if="more.length"
            bottom
            offsetY
            right
            v-model="menuIsActive"
        >
            <template v-slot:activator="{ on }">
                <div
                    v-on="on"
                    class="v-tab v-tab-more"
                >
                    <v-icon>$moreHorizontalIcon</v-icon>
            </div>
            </template>
    
            <v-list>
                <v-list-item
                    v-for="item in more"
                    :key="item"
                    @click="addItem(item)"
                >
                <div class="v-list-item__content">
                    <div class="v-list-item__title">
                        {{ item }}
                    </div>
                </div>
                </v-list-item>
            </v-list>
        </v-menu>
        </v-tabs>
        <v-tabs-items v-model="currentItem">
          <v-tab-item
            v-for="item in items"
            :key="item"
          >
              <slot></slot>
          </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
  export default {
    props: {
        items: {
            type: Array,
            default: () => ([]),
        },
    },
    data () {
        return {
            currentItem: 0,
            tabs: [],
            more: [],
            menuIsActive: false
        }
    },
    methods: {
        addItem (item) {
            const removed = this.tabs.splice(this.tabs.length-1, 1)
            this.tabs.push(
            ...this.more.splice(this.more.indexOf(item), 1)
            )
            this.more.push(...removed)
            const itemIndex = (this.tabs.indexOf(item))
            this.$nextTick(() => { this.currentItem = itemIndex})
            this.menuIsActive = false
        },
        onResize(){
            const temp = this.items.slice()
            this.tabs = temp.splice(0, ((window.innerWidth-150)/100)-1) // ADJUST WHEN IMPLEMENTED ON SPA
            this.more = temp.splice(0)
        }
    },
}
  
</script>

<style scoped lang="scss">
.v-menu__content{
   margin-top: 4px !important;
}

</style>