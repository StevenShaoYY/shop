import Vue from 'vue'
const state = {
  // 首页数据
  newGoods: [],
  hotGoods: [],
  topics: [],
  brands: [],
  floorGoods: [],
  banner: [],
  channel: []
}

const mutations = {
  GET_INDEX_DATA (state, res) {
    state.newGoods = res.data.newGoodsList;
    state.hotGoods = res.data.hotGoodsList;
    state.topics = res.data.topicList;
    state.brands = res.data.brandList;
    state.floorGoods = res.data.categoryList;
    state.banner = res.data.banner;
    state.channel = res.data.channel;
  }
}

const actions = {
  getIndexData ({ commit }, params = {}) {
    Vue.iBox.http('getIndexData', params)({method: 'get'}).then(res => {
      if (res.errno !== 0) return
      commit('GET_INDEX_DATA', res)
      wx.stopPullDownRefresh()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
