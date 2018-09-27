import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)

import IboxPlugin from '@/plugins/ibox'
Vue.use(IboxPlugin)

const app = new Vue({
  store,
  ...App
})

app.$mount()

export default {
  config: {
    pages: [
      'pages/index/index',
      'pages/order/index',
      'pages/ucenter/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '凡有',
      navigationBarTextStyle: 'black',
      'enablePullDownRefresh': true
    },
    tabBar: {
      'backgroundColor': '#fafafa',
      'borderStyle': 'white',
      'selectedColor': '#b4282d',
      'color': '#666',
      'list': [{
        'pagePath': 'pages/index/index',
        'iconPath': 'static/images/ic_menu_choice_nor.png',
        'selectedIconPath': 'static/images/ic_menu_choice_pressed.png',
        'text': '首页'
      },
      {
        'pagePath': 'pages/order/index',
        'iconPath': 'static/images/ic_menu_topic_nor.png',
        'selectedIconPath': 'static/images/ic_menu_topic_pressed.png',
        'text': '订单'
      },
      {
        'pagePath': 'pages/ucenter/index',
        'iconPath': 'static/images/ic_menu_me_nor.png',
        'selectedIconPath': 'static/images/ic_menu_me_pressed.png',
        'text': '我的'
      }]
    }
  }
}
