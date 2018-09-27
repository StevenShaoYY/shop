import Vue from 'vue'
const state = {
  // 首页数据
  goods: {},
  gallery: [{ img_url: '' }],
  attribute: [],
  issueList: [],
  comment: {},
  brand: {},
  specificationList: [],
  productList: [],
  userHasCollect: 0,
  goodDetailHTMLstr: ''
}

const mutations = {
  GET_GOODS_DETAIL (state, res) {
    state.goods = res.data.info;
    state.gallery = res.data.gallery.length > 0 ? res.data.gallery : [{ img_url: '/static/images/icon_error.png' }];
    state.attribute = res.data.attribute;
    state.issueList = res.data.issue;
    state.comment = res.data.comment;
    state.brand = res.data.brand;
    state.specificationList = res.data.specificationList;
    state.productList = res.data.productList;
    state.userHasCollect = res.data.userHasCollect;
    state.goodDetailHTMLstr = res.data.info.goods_desc ? res.data.info.goods_desc : '暂无详情数据';
  }
}

const actions = {
  async getGoodsDetail ({ commit }, params = {id: ''}) {
    Vue.iBox.http('getGoodsDetail', params)({
      method: 'get'
    }).then(res => {
      console.log(res)
      commit('GET_GOODS_DETAIL', res)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
