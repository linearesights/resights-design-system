<template>
  <v-app id="resights" :class="theme">
    <v-layout>
      <v-navigation-drawer permanent>
        <v-list nav>
          <v-list-item v-for="page in pages" :key="page.link" link :to="'/' + page.link">
          <v-list-item-content>
              <v-list-item-title>{{page.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list-item class="theme-switcher">
          <v-switch hide-details="auto" @click="swap()"></v-switch>
          Toggle theme
        </v-list-item>
      </v-navigation-drawer>

      <v-main id="app-container" class="background">
        <v-container
          fluid
          style="width: calc(100vw - 256px); height: 100vh; overflow-y: scroll"
          class="pa-2 mr-0"
        >
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        theme: "light",
        pages: [
          {link: '', text: "Home"},
          {link: 'typography', text: "Typography"},
          {link: 'buttons', text: "Buttons"},
          {link: 'input-fields', text: "Input fields"},
          {link: 'settings-page', text: "Settings page"},
          {link: 'chips', text: "Chips"},
        ]
      };
    },
    methods: {
      swap() {
        if (this.theme === "light") {
          this.theme = "dark";
        } else {
          this.theme = "light";
        }
      }
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

html,
body {
  height: 100%;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

#app-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}
.v-navigation-drawer{
  z-index: 100;
}

.theme-switcher {
  .v-input {
    margin-right: .3rem;
    &__slot{
      border-radius: 20px;
      border: none !important;
      box-shadow: none !important;
      padding: 3px;
    }
    &__control{
      flex-grow: 0;
      width: unset;
    }
  }
}
</style>