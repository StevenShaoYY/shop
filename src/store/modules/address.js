import Vue from 'vue'
const state = {
  // 地址数据
  addressList: []
}

const mutations = {
  GET_ADDRESS_LIST (state, res) {
    state.addressList = res.data.addressList;
  }
}

const actions = {
  async getAddressList ({ commit }, params = {}) {
    Vue.iBox.http('getAddressList', params)({
      method: 'get'
    }).then(res => {
      commit('GET_ADDRESS_LIST', res)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
