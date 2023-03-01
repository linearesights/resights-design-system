<template>
  <v-app id="resights">
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
          <v-list-item link to="/elevation">
          <v-list-item-content>
              <v-list-item-title>Elevation</v-list-item-title>
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

<style lang="css">
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
</style>