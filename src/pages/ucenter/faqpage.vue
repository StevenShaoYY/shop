<template >
<view class="container">
  <ul class="trans-faq">
    <li :style="{height:item.height}" :class="{'content-show':item.show}" v-for="(item, index) of faqList" :key="item.id" :data-index="index"  @click="showDetail($event)">
      <h2>{{item.title}}</h2>
      <div class="faqUl" :data-index="index" :data-show="item.show" >
        <text>
          {{item.content}}
        </text>
      </div>
    </li>
  </ul>
</view>
</template>

<script>

export default {
  data () {
    return {
      faqList: [
        {
          id: '1',
          title: '关于租机',
          height: '90rpx',
          show: false,
          content: '关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机'
        },
        {
          id: '2',
          title: '关于租机',
          height: '90rpx',
          show: false,
          content: '关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机'
        },
        {
          id: '3',
          title: '关于租机',
          height: '90rpx',
          show: false,
          content: '关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机'
        },
        {
          id: '4',
          title: '关于租机',
          height: '90rpx',
          show: false,
          content: '关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机'
        },
        {
          id: '5',
          title: '关于租机',
          height: '90rpx',
          show: false,
          content: '关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机关于租机'
        }
      ]
    }
  },
  async mounted () {
  },
  methods: {
    showDetail (e) {
      var query = wx.createSelectorQuery()
      query.selectAll('.faqUl').boundingClientRect((rects) => {
        rects.forEach((rect) => {
          if (rect.dataset.index.toString() === e.currentTarget.dataset.index.toString()) {
            this.$set(this.faqList[rect.dataset.index], 'show', true)
            this.$set(this.faqList[rect.dataset.index], 'height', rect.height + 40 + 'px')
          } else {
            this.$set(this.faqList[rect.dataset.index], 'show', false)
            this.$set(this.faqList[rect.dataset.index], 'height', '90rpx')
          }
        })
      }).exec()
    }
  }
}
</script>

<style>
page{
    background: #f4f4f4;
    min-height: 100%;
}

.container{
    background: #f4f4f4;
    min-height: 100%;
}

.trans-faq{
  width: 94%;
  margin: 2% 3%;
}

.trans-faq li {
  width: 100%;
  /* height: 90rpx; */
  overflow: hidden;
  background-color: #fff;
  border-radius: 8rpx;
  box-shadow: 2px 2px 10px #cccccc;
  transition: all .3s ease;
}

.trans-faq li + li{
  margin-top: 20rpx;
}

.trans-faq li h2{
  width: 100%;
  height: 90rpx;
  overflow: hidden;
  line-height: 90rpx;
  font-size: 26rpx;
  padding-left: 26rpx;
  color:#444444;
}
.trans-faq li div{
  width: 92%;
  line-height: 40rpx;
  font-size: 25rpx;
  padding: 0 0 26rpx 4%;
  margin: -30rpx 0 0 0;
  color:#555555;
}
.trans-faq li div text{
  width: 100%;
}

/* .trans-faq .content-show{
  height: 400rpx;
} */
</style>
