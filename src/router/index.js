module.exports = [
  {
    path: '/pages/index/index',
    name: 'index',
    config: {
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true
    }
  },
  {
    path: '/pages/order/index',
    config: {
      navigationBarTitleText: '订单',
      enablePullDownRefresh: true
    }
  },
  {
    path: '/pages/ucenter/index',
    config: {
      navigationBarTitleText: '我的',
      enablePullDownRefresh: false
    }
  },
  {
    path: '/pages/ucenter/address',
    config: {
      navigationBarTitleText: '地址管理',
      enablePullDownRefresh: false
    }
  },
  {
    path: '/pages/ucenter/addressAdd',
    config: {
      navigationBarTitleText: '地址编辑',
      enablePullDownRefresh: false
    }
  },
  {
    path: '/pages/goods/goods',
    config: {
      navigationBarTitleText: '商品详情',
      enablePullDownRefresh: false
    }
  },
  {
    path: '/pages/counter/index',
    config: {
      navigationBarTitleText: 'vuex例子'
    }
  },
  {
    path: '/pages/logs/index',
    config: {
      navigationBarTitleText: '日志'
    }
  }
]
