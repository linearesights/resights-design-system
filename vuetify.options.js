import selectInputArrow from "~/static/icons/input-arrow.vue"
import searchIcon from "~/static/icons/search.vue"
import clearIcon from "~/static/icons/clear.vue"
import checkmarkIcon from "~/static/icons/checkmark.vue"
import checkmarkIndeterminateIcon from "~/static/icons/checkbox_indeterminate.vue"
import moreHorizontalIcon from "~/static/icons/more-horizontal.vue"
import signageIcon from "~/static/icons/signage.vue"
import briefcaseIcon from "~/static/icons/briefcase.vue"
import homeIcon from "~/static/icons/home.vue"
import closeIcon from "~/static/icons/close.vue"

export default {
    theme: {
      disable: true
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
        moreHorizontalIcon: {
          component: moreHorizontalIcon
        },
        signageIcon: {
          component: signageIcon
        },
        briefcaseIcon: {
          component: briefcaseIcon
        },
        homeIcon: {
          component: homeIcon
        },
        closeIcon: {
          component: closeIcon
        },
      },
    },
  }