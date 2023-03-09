// import * as variblesDark from '~/resights-design-tokens/build/js/variables-dark.js'
// import * as variblesDefault from '~/resights-design-tokens/build/js/variables.js'

import selectInputArrow from "~/static/icons/input-arrow.vue"
import searchIcon from "~/static/icons/search.vue"
import clearIcon from "~/static/icons/clear.vue"
import checkmarkIcon from "~/static/icons/checkmark.vue"
import checkmarkIndeterminateIcon from "~/static/icons/checkbox_indeterminate.vue"

export default {
    theme: {
      themes: {
        light: {
          // primary: variblesDefault.SemanticColorPrimaryDefault,
          // 'primary-lighten-1': variblesDefault.CoreColorBlue400,
          // 'primary-lighten-2': variblesDefault.CoreColorBlue300,
          // 'primary-lighten-3': variblesDefault.CoreColorBlue200,
          // 'primary-lighten-4': variblesDefault.CoreColorBlue100,
          // 'primary-lighten-5': variblesDefault.CoreColorBlue050,
          // 'primary-darken-1': variblesDefault.CoreColorBlue600,
          // 'primary-darken-2': variblesDefault.CoreColorBlue700,
          // 'primary-darken-3': variblesDefault.CoreColorBlue800,
          // 'primary-darken-4': variblesDefault.CoreColorBlue900,
          // secondary: variblesDefault.SemanticColorSecondaryDefault,
          // info: variblesDefault.SemanticColorSurfaceInformative,
          // warning: variblesDefault.SemanticColorSurfaceWarning,
          // // error: variblesDefault.ComponentFieldErrorValueColor,
          // success: variblesDefault.SemanticColorSurfaceSuccess,
          // background: variblesDefault.SemanticColorBackgroundDefault,
        },
        dark: {
          // primary: variblesDefault.SemanticColorPrimaryDefault,
          // 'primary-lighten-1': variblesDefault.CoreColorBlue400,
          // 'primary-lighten-2': variblesDefault.CoreColorBlue300,
          // 'primary-lighten-3': variblesDefault.CoreColorBlue200,
          // 'primary-lighten-4': variblesDefault.CoreColorBlue100,
          // 'primary-lighten-5': variblesDefault.CoreColorBlue050,
          // 'primary-darken-1': variblesDefault.CoreColorBlue600,
          // 'primary-darken-2': variblesDefault.CoreColorBlue700,
          // 'primary-darken-3': variblesDefault.CoreColorBlue800,
          // 'primary-darken-4': variblesDefault.CoreColorBlue900,
          // secondary: variblesDefault.SemanticColorSecondaryDefault,
          // info: variblesDefault.SemanticColorSurfaceInformative,
          // warning: variblesDefault.SemanticColorSurfaceWarning,
          // // error: variblesDefault.ComponentFieldErrorValueColor,
          // success: variblesDefault.SemanticColorSurfaceSuccess,
          // background: variblesDefault.SemanticColorBackgroundDefault,
        }
      },
    },
    icons: {
      values: {
        selectInputArrow: {
          component: selectInputArrow
        },
        searchIcon: {
          component: searchIcon
        },
        clearIcon: {
          component: clearIcon
        },
        checkmarkIcon: {
          component: checkmarkIcon
        },
        checkmarkIndeterminateIcon: {
          component: checkmarkIndeterminateIcon
        },
      },
    },
  }