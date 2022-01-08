<template>
  <div class=" w-screen  overflow-scroll">
    <!-- 第一张大图 轮播图 -->
    <div class=" w-screen h-[56.25vw] overflow-hidden">
      <img src="../assets/img/banner2.png" alt="">
    </div>
    <!-- 关于我们 -->
    <div class=" w-screen h-[56.25vw] overflow-hidden">
      <img src="../assets/img/banner3.png" alt="">
    </div>
    <!-- 视频 -->
    <div class=" w-screen h-[56.25vw] ">
      <video src="../assets/img/YH.mp4"></video>
    </div>
    
    <div class=" w-[73.02vw] h-[56.25vw] flex flex-col justify-evenly items-center mx-auto">
      <div class=" w-full">
        <img src="../assets/img/banner4.png" alt="">
      </div>
      <button class=" px-[4.1vw] py-[1.5vw] border border-solid border-[orange] rounded-full text-[1vw] font-semibold tracking-wider">CASE SHOW</button>
    </div>
    <!--文字-->
    <div class=" w-full h-[38.7vw]  text-center">
      <h1 class="sm:text-[3.18vw]  text-[5vw] tracking-[0.5vw]">合作伙伴</h1>
      <h2 class="text-[1vw] font-bold tracking-[1.3vw] text-black/20">CUSTOMER</h2>
      <!-- 品牌图片 -->
      <div class="w-[73.02vw] mx-auto">
        <ul id="brand" class=" w-full h-full flex justify-between flex-wrap items-center">
          <li v-for="(item,index) of footerImg" :key ="index">
            <a>
              <img :src="item.img" alt="">
            </a>
          </li>
        </ul>
      </div>
      <!-- 底部 -->
      <footer class="w-screen sm:h-[38.02vw] bg-[#222]" id="footer">
        <!-- 内容简介 -->
        <div class="w-[73.02vw] py-[1.5vw] sm:px-[13.8vw] sm:py-[6vw] mx-auto flex justify-between ">
          <ul v-for="(item,index) of footerInfo" :key="index">
            <li v-for="element of item" :key="element">
              <a>{{element}}</a>
            </li>
          </ul>
          <ul>
            <li><a>关注我们</a></li>
            <li><img class="sm:w-[6.67vw] sm:h-[6.67vw] w-[18vw] h-[18vw]" src="../assets/img/erweima.png" alt=""></li>
          </ul>
        </div>
        <div class="text-center py-[2.5vw] border-y border-solid border-black/70">
          <p class="text-[0.8vw] text-[#4c4c4c]">24小时服务热线：020-25885288 Mail：yahua@gmil.com</p>
        </div>
        <div class="py-[2vw] px-[13.65vw] flex justify-between items-center">
          <span class="text-[0.8vw] text-[#686868]">© 2017 YAHUA ALL RESERVED</span>
          <div class="text-[0.8vw] text-[#686868]">
            <a >法律申明</a>
            <span class="text-[1.2vw] mx-[0.3vw]">|</span>
            <a >网站地图</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data() {
    return {
      footerImg:[
        {
          img:new URL('../assets/img/footer1.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer2.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer3.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer4.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer5.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer6.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer7.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer8.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer12.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer10.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer11.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer9.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer13.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer14.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer2.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer16.png',import.meta.url).href
        },

        {
          img:new URL('../assets/img/footer7.png',import.meta.url).href
        },
        {
          img:new URL('../assets/img/footer8.png',import.meta.url).href
        }
      ],
      footerInfo:[
        ['关于我们','亚华简介','企业文化','荣誉资质','社会责任','创意设计','亚华展厅'],
        ['新闻动态','亚华新闻','展会活动','媒体报道','新闻中心','品牌活动','员工天地'],
        ['快速链接','产品中心','服务中心','视频中心','经典案例','行业方案','联系我们'],
      ]
    }
  },
  components: {

  }
}
</script>
<style lang="postcss" scoped>
  #brand >li{
    @apply block mb-[1vw] flex-shrink-0 w-[21.56vw] h-[9.975vw]  sm:w-[10.78vw] sm:h-[6.65vw]
  }
  #brand>li>a>img{
    @apply object-contain 
  }
  footer>div>ul {
    @apply inline-flex flex-col gap-[0.45vw] text-[#68686868] text-[0.97vw]
  }
  footer>div>ul>li:first-child{
    @apply mb-[1vw] text-[#4c4c4c]
  }
</style>