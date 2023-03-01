import * as varibles from '~/design-system-tokens/build/js/variables.js'
import Vue from "vue";
import Vuetify from "vuetify";
import selectInputArrow from "~/static/icons/input-arrow.vue"

export default {
    theme: {
      themes: {
        light: {
          primary: varibles.SemanticColorPrimaryDefault,
          'primary-lighten-1': varibles.CoreColorBlue400,
          'primary-lighten-2': varibles.CoreColorBlue300,
          'primary-lighten-3': varibles.CoreColorBlue200,
          'primary-lighten-4': varibles.CoreColorBlue100,
          'primary-lighten-5': varibles.CoreColorBlue050,
          'primary-darken-1': varibles.CoreColorBlue600,
          'primary-darken-2': varibles.CoreColorBlue700,
          'primary-darken-3': varibles.CoreColorBlue800,
          'primary-darken-4': varibles.CoreColorBlue900,
          secondary: varibles.SemanticColorSecondaryDefault,
          info: varibles.SemanticColorSurfaceInformative,
          warning: varibles.SemanticColorSurfaceWarning,
          // error: varibles.ComponentFieldErrorValueColor,
          success: varibles.SemanticColorSurfaceSuccess,
          background: varibles.SemanticColorBackgroundDefault,
        },
      },
    },
    icons: {
      values: {
        selectInputArrow: {
          component: selectInputArrow
        },
      },
    },
  }