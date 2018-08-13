<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- 显示轮播图的分页 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts6/1606/31/6c66293b21d5689a.jpg_r_390x260x90_abdf9e92.jpg'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts4/1701/6d/c48662846ee9aa02.jpg_r_390x260x90_85e7c536.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式进行穿透， 不受scoped的限制
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
