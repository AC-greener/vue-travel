<template>
  <div>
    <div class="banner" @click="handleBannerCilck">
      <img class="banner-img" src="http://www.runoob.com/wp-content/uploads/2016/02/react.png" alt="">
      <div class="banner-info">
        <div class="banner-title">
          大连圣亚海洋世界
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs='imgs'
      v-show="isShowGallary"
      @close='handleGallaryClose'
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      isShowGallary: false,
      imgs: ['http://www.runoob.com/wp-content/uploads/2016/02/react.png', 'http://www.runoob.com/wp-content/uploads/2016/02/react.png']
    }
  },
  methods: {
    handleBannerCilck () {
      this.isShowGallary = true
    },
    handleGallaryClose () {
      this.isShowGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
