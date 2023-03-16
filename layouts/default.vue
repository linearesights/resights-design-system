<template>
  <v-app id="resights" :class="theme">
    <v-layout>
      <div class="top-bar">
        <div class="d-flex justify-space-between align-center">
          <RsAutoComplete
          placeholder="Søg efter en adresse, matrikel, virksomhed eller person..."
          icon="$searchIcon"
          hideLabel
          class="pa-4 pb-2 pt-2 flex-grow-1 max-width"
          ></RsAutoComplete>
          <div class="d-flex">
            <v-divider vertical></v-divider>
            <RsBtnDropdown variant="ghost">Ashley H.</RsBtnDropdown>
          </div>
        </div>
            <v-divider></v-divider>
        </div>
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
        </v-list-item>
      </v-navigation-drawer>

      <v-main id="app-container" class="background">
        <v-container
          fluid
          style="width: calc(100vw - 150px); height: 100%;"
          class="mr-0 pa-0"
        >
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import RsAutoComplete from '@/components/rs-elements/RsAutoComplete'
import RsBtnDropdown from '@/components/rs-elements/RsBtnDropdown'

  export default {
    components: {
      RsAutoComplete,
      RsBtnDropdown
    },
    data() {
      return {
        theme: "light",
        pages: [
          {link: '', text: "Home"},
          {link: 'typography', text: "Typography"},
          {link: 'buttons', text: "Buttons"},
          {link: 'input-fields', text: "Input fields"},
          {link: 'chips', text: "Chips"},
          {link: 'tabs', text: "Tabs"},
          {link: 'settings-page', text: "Settings page"},
          {link: 'discover-page', text: "Discover page"},
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

.container { 
  overflow-y: auto !important
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
.v-main {
  margin-top: 56px;
}
.v-navigation-drawer{
  z-index: 100;
}
.container {
  padding: 0 !important;
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

.top-bar {
  position: fixed;
  z-index: 1000;
  right: 0;
  top: 0;
  width: calc(100vw - 150px);
  background: var(--rs-component-text-field-default-background-color);
  box-shadow: var(--rs-semantic-shadow-md-1-x) var(--rs-semantic-shadow-sm-1-y) var(--rs-semantic-shadow-md-1-blur) var(--rs-semantic-shadow-md-1-spread) var(--rs-semantic-shadow-md-1-color)
                !important;
}
.max-width {
    max-width: 650px;
}
</style>