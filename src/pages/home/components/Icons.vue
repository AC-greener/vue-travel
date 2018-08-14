<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" v-bind:src="item.imgUrl"  alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }, {
        id: '004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }, {
        id: '005',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }, {
        id: '006',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }, {
        id: '007',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }, {
        id: '008',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }, {
        id: '009',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }, {
        id: '010',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
        desc: '景点门票'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      // 吧一位数组变成二维
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        // console.log("index:", index)
        // console.log("index / 8:", index / 8)
        // console.log("page:", page)
        if (!pages[page]) {
          pages[page] = []
        }
        // console.log('pages[page]:', pages[page])
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
