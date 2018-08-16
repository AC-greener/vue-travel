<template>
  <div>
   <home-header ></home-header>
   <home-swiper :list='swiperList'></home-swiper>
   <home-icons :icon='iconList'></home-icons>
   <home-recommend :recommend='recommendList'></home-recommend>
   <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      recommendList: [],
      iconList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('static/mock/index.json')
        .then(this.getHomeSuccess)
    },
    getHomeSuccess (res) {
      res = res.data
      if (res.ret) {
        const data = res.data
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
        this.iconList = data.iconList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
