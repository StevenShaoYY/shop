<template >
<view class="container">
  <ul class="tab-list">
    <li v-for="(item,index) of tabList" :key="index" :class="{'active':index==activeItem}" @click="switchTab(index)">
      {{item}}
    </li>
  </ul>
  <swiper class="swiper-container" :current="activeItem" duration="300" @change="switchTabBySwiper" :style="{height:winHeight+'rpx'}" skip-hidden-item-layout="true">
    <swiper-item v-for="(item,index) of detailList" :key="index">
      <scroll-view scroll-y="true">
        <div>
          {{item}}
        </div>
      </scroll-view>
    </swiper-item>
  </swiper>
</view>
</template>

<script>
export default {
  async mounted () {
    this.getOrderData()
    wx.getSystemInfo({
      success: res => {
        const clientHeight = res.windowHeight
        const clientWidth = res.windowWidth
        const rpxR = 750 / clientWidth;
        const calc = clientHeight * rpxR - 100;
        this.winHeight = calc
      }
    });
  },

  data () {
    return {
      tabList: ['进行中', '已完成', '已取消'],
      activeItem: 0,
      detailList: [[111111111], [22222222], [333333333]],
      winHeight: ''
    }
  },
  methods: {
    getOrderData () {
      console.log(111111)
    },
    switchTabBySwiper (e) {
      this.activeItem = e.mp.detail.current
    },
    switchTab (index) {
      this.activeItem = index
    }
  },

  // 原生的分享功能
  onShareAppMessage: function () {
    return {
      title: '凡有',
      desc: '凡有商城',
      path: '/pages/index/index'
    }
  }
}
</script>

<style lang="scss">
.tab-list {
  display: flex;
  height: 50px;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  li {
    font-size: 14px;
    line-height: 40px;
    color: #a8a8a8;
    border-radius: 25px;
    width: 100px;
    display: flex;
    justify-content: center;
    border: 0.5px solid #FFFFFF;
    &.active {
      border: 0.5px solid #f6f6f6;
      box-shadow: 2px 2px 10px #cccccc;
      color:#1b1b1b;
    }
  }
}
.swiper-container {
  width: 94%;
}
</style>
