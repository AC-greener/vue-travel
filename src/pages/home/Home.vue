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
import { mapState } from 'vuex'
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
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('static/mock/index.json?city=' + this.city)
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
  // 页面首次加载的时候执行
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  // 页面被重新显示的时候执行
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
