<template>
  <div>
    <detail-banner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list='categoryList'></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './componets/Banner'
import DetailHeader from './componets/Header'
import DetailList from './componets/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('static/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailSuccess)
    },
    getDetailSuccess (res) {
      res = res.data
      if (res.ret) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang='stylus' scoped>

</style>
