<template>
  <v-app id="resights" :class="theme">
    <v-layout>
      <!-- <v-app-bar title="Resights" /> -->
      <v-navigation-drawer permanent>
        <v-list nav>
          <v-list-item link to="/">
          <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/typography">
          <v-list-item-content>
              <v-list-item-title>Typography</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/buttons">
          <v-list-item-content>
              <v-list-item-title>Buttons</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/input-fields">
          <v-list-item-content>
              <v-list-item-title>Input fields</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/settings-page">
            <v-list-item-content>
              <v-list-item-title>Settings page</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list-item class="theme-switcher">
          <v-switch hide-details="auto" @click="swap()"></v-switch>
          <label>Toggle theme</label>
        </v-list-item>
      </v-navigation-drawer>

      <v-main id="app-container" class="background">
        <v-container
          fluid
          style="width: calc(100vw - 256px); overflow-y: scroll"
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
        theme: "light"
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
    &__slot{
      border-radius: 20px;
      border: none !important;
      box-shadow: none !important;
      padding: 5px;
    }
    &__control{
      flex-grow: 0;
      width: unset;
    }
  }
}
</style>