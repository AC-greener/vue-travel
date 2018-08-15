<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) in cities"
      :key="key"
      :ref="key"
      @click="handleClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    alphabet () {
      const alphabet = []
      for (let i in this.cities) {
        alphabet.push(i)
      }
      return alphabet
    }
  },
  methods: {
    // 向父组件传递一个事件，让父组件接受到字母的点击
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 函数节流
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          // 每个字母的高度是20，除以20，得到当前手指所在字母的索引
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.alphabet.length) {
            this.$emit('change', this.alphabet[index])
          }
        }, 10)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
   @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor

</style>
