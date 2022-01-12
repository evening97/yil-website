<template>
  <div class="mt-[4.17vw] overflow-hidden">
    <!-- 导航栏 -->
    <Nav />
    <!-- 第一张大图 轮播图 -->
    <div class="h-[56.25vw] bg-pink-600 overflow-hidden">
      <img src="../assets/img/banner2.png" alt />
    </div>
    <!-- 关于我们 -->
    <div class="w-screen h-[56.25vw] overflow-hidden relative">
      <div class="w-full h-full">
        <img src="../assets/img/banner3.png" alt />
      </div>
      <div
        class="w-screen sm:w-[73.02vw] absolute inset-0 sm:top-1/4 lg:top-1/2 text-center mx-auto flex flex-col sm:gap-3 gap-1 sm:px-[10vw] lg:-translate-y-1/4"
      >
        <h2 class="text-[3.96vw]">关于我们</h2>
        <h3 class="text-[1vw] tracking-[1vw] text-[#d6d6d6] font-medium font-Shadows">ABOUT</h3>
        <h4 class="sm:text-[1.67vw] text-[0.5vw]">非凡卓越的印刷工艺和独领风骚的排版团队</h4>
        <p
          class="text-[0.92vw] tracking-widest font-Shadows"
        >亚华科技是国内领先的高端品牌包装整体解决方案提供商，服务于数十家世界5O0强客户及数百个高端品牌，为消费电子、大健康、烟酒、化妆品、食品等行业客户提供专业的、有竞争力的包装产品、解决方案和服务，并致力于持续为客户提升品牌价值。亚华科技提供的产品和解决方案包括彩盒、礼盒、说明书、不干胶贴纸、细箱、纸托以及智能包装、环保包装、功能包装等，同时提供创意设计、创新研发、一体化制造、自动化大规模生产、多区域运营及就近快捷交付等专业胀务。亚华科技设计的作品多次获得德国的红点奖、F设计奖、美国奠比斯广告奖等世界顶级工业设计奖项。</p>
      </div>
    </div>
    <!-- 视频 -->
    <div class="w-screen h-[56.25vw] overflow-hidden">
      <video src="../assets/img/YH.mp4"></video>
    </div>

    <div class="w-[73.02vw] h-[56.25vw] flex flex-col justify-evenly items-center mx-auto">
      <div class="w-full">
        <img src="../assets/img/banner4.png" alt />
      </div>
      <button
        class="px-[4.1vw] py-[1.5vw] border border-solid border-[orange] rounded-full text-[1vw] font-semibold tracking-wider"
      >CASE SHOW</button>
    </div>
    <!--合作伙伴-->
    <Customer :customerImg="customerImg" />
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/footer.vue";
import Nav from '../components/nav.vue'
import Customer from '../components/customer.vue'
import { nanoid } from "nanoid";
export default {
  name: "Home",
  data() {
    return {
      customerImg: [
        {
          id:nanoid(),
          img: new URL("../assets/img/footer1.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer2.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer3.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer4.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer5.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer6.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer7.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer8.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer12.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer10.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer11.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer9.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer13.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer14.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer2.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer16.png", import.meta.url).href,
        },

        {
          id:nanoid(),
          img: new URL("../assets/img/footer7.png", import.meta.url).href,
        },
        {
          id:nanoid(),
          img: new URL("../assets/img/footer8.png", import.meta.url).href,
        },
      ],
    };
  },
  components: {
    Footer, Nav, Customer
  },
};
</script>
<style lang="postcss" scoped>
</style>
