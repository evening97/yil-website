<template>
  <div class="p-[50px] relative">
    <!-- left -->
    <div
      class="w-[350px] h-[350px] relative cursor-move overflow-hidden"
      ref="goodBox"
      @mousemove="move"
    >
      <!-- <img class="w-full" src="../assets/img/small.jpg" alt /> -->
      <div
        class="absolute inset-0 w-[200px] h-[200px] bg-[yellow]/40 pointer-events-none"
        ref="mask"
        :style="lTranslate"
      ></div>
    </div>
    <div class="absolute top-[50px] left-[400px] w-[400px] h-[400px] overflow-hidden">
      <!-- <img
        class="max-w-none absolute"
        :style="rTranslate"
        ref="imgSize"
        src="../assets/img/big.jpg"
        alt
      /> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      // lShow:false,
      rTranslate: { top: "", left: "" },
      lTranslate: { top: "", left: "" },
      goodBoxHeight: 0,
      goodBoxWidth: 0,
      maskHeight: 0,
      maskWidth: 0
    }
  },
  methods: {
    move(event) {
      let x = event.layerX - this.maskWidth / 2 < 0 ? 0 : event.layerX - this.maskWidth / 2
      let y = event.layerY - this.maskHeight / 2 < 0 ? 0 : event.layerY - this.maskHeight / 2
      if (y > this.goodBoxHeight - this.maskHeight) {
        y = this.goodBoxHeight - this.maskHeight
      }
      if (x > this.goodBoxWidth - this.maskWidth) {
        x = this.goodBoxWidth - this.maskWidth
      }
      this.lTranslate.top = `${y}px`
      this.lTranslate.left = `${x}px`
      this.rTranslate.top = `-${y * 2.64}px`
      this.rTranslate.left = `-${x * 2.64}px`
    }
  },
  mounted() {
    this.goodBoxHeight = this.$refs.goodBox.clientHeight
    this.goodBoxWidth = this.$refs.goodBox.clientWidth
    this.maskHeight = this.$refs.mask.clientHeight
    this.maskWidth = this.$refs.mask.clientWidth
    console.log(this.$refs.imgSize.clientHeight)
  },
}
</script>
<style scoped>
</style>

