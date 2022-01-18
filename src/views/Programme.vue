<template>
    <div class="mt-[4.17vw] overflow-hidden">
        <Nav />
        <div class="relative">
            <div class="w-screen h-[42.29vw]">
                <img class="object-cover" src="../assets/img/banner8.png" alt />
            </div>
            <div class="flex absolute top-0 left-1/2 -translate-x-1/2">
                <!-- 左边 -->
                <div class="w-[14.22vw]">
                    <div class="w-full h-[9.2vw] ">
                        <img :src="programmeTopImg[0]" alt />
                    </div>
                    <div class="w-full h-[9.2vw] ">
                        <img :src="programmeTopImg[2]" alt />
                    </div>
                    <div class="w-full h-[9.2vw] ">
                        <img :src="programmeTopImg[3]" alt />
                    </div>
                    <div class="w-full h-[9.2vw] ">
                        <img :src="programmeTopImg[4]" alt />
                    </div>
                </div>
                <!-- 中间 -->
                <div class="w-[42.66vw]">
                    <div class="relative">
                        <div class="h-[27.6vw] w-[42.66vw]">
                            <img :src="programmeTopImg[2]" alt />
                        </div>
                        <div
                            class="cursor-pointer opacity-0 hover:opacity-100 transition-all duration-700 absolute h-[27.6vw] w-[42.66vw] bg-black/80 top-0 flex flex-col justify-center items-center"
                        >
                            <h2 class="text-[2.97vw] text-[#ff3d00] font-normal">YH</h2>
                            <h3 class="text-[2.5vw] text-white">专业品牌包装整体方案提供商</h3>
                            <h3
                                class="text-[1.88vw] text-white tracking-[-0.05vw]"
                            >Professional Packing</h3>
                        </div>
                    </div>
                    <div class="w-[14.22vw] h-[9.2vw] inline-block">
                        <img :src="programmeTopImg[0]" alt />
                    </div>
                    <div class="w-[14.22vw] h-[9.2vw] inline-block">
                        <img :src="programmeTopImg[5]" alt />
                    </div>
                    <div class="w-[14.22vw] h-[9.2vw] inline-block">
                        <img :src="programmeTopImg[6]" alt />
                    </div>
                </div>
                <!-- 右边 -->
                <div class="w-[14.22vw]">
                    <div class="w-full h-[9.2vw] ">
                        <img :src="programmeTopImg[7]" alt />
                    </div>
                    <div class="w-full h-[9.2vw] ">
                        <img :src="programmeTopImg[9]" alt />
                    </div>
                    <div class="w-full h-[9.2vw] ">
                        <img :src="programmeTopImg[8]" alt />
                    </div>
                    <div class="w-full h-[9.2vw] ">
                        <img :src="programmeTopImg[1]" alt />
                    </div>
                </div>
            </div>
        </div>
        <!-- 行业解决方案 -->
        <div class="w-screen xl:h-[46.3vw] text-center pt-[7.5vw] pb-[5.16vw] px-[13.75vw]">
            <h2 class="text-[3.13vw] opacity-80">行业解决方案</h2>
            <h3 class="text-[1.25vw] tracking-[0.75vw] opacity-20">Industry Solutions</h3>
            <h3 class="text-[1.56vw] tracking-[0.31vw] opacity-60">一站式解决行业内所有印刷问题</h3>
            <div class="xl:mt-[2.06vw] mt-[4.06vw] flex justify-between flex-wrap space-y-3">
                <div
                    class=" w-[90%] sm:w-[17.81vw] xl:h-[23.02vw] flex flex-col items-center gap-3"
                    v-for="(item,index) of avaData"
                    :key="index"
                >
                    <div class="w-[10.47vw] h-[10.47vw] rounded-full">
                        <img :src="programmeMiddleImg[index]" alt />
                    </div>
                    <div class="space-y-3">
                        <h2 class="text-[1.25vw] tracking-[0.06vw] opacity-80">{{ item.h2 }}</h2>
                        <div class="sm:w-[2.6vw] w-[4.6vw] h-[0.05vw] bg-[#3b3b3b] mx-auto "></div>
                    </div>
                    <p class="text-[0.94vw] font-norma opacity-60">{{ item.p }}</p>
                    <span class="text-[2vw] hidden sm:block">，，</span>
                </div>
            </div>
        </div>
        <!-- 经典案例 -->
        <div class="pt-[5.57vw] pb-[2.14vw] text-center">
            <h2 class="text-[2.5vw] text-[#555555]">经典案例</h2>
            <h3 class="text-[1.25vw] tracking-[0.75vw] text-[#888888]/80">good case</h3>
            <div class="mx-auto space-x-[1.56vw] mt-[2.4vw]">
                <span
                    v-for="(item,index) of textData" :key="index"
                    class="inline-block leading-[1.61vw] border-b-[0.1vw] border-transparent border-solid hover:border-[#ff3d00] text-[0.94vw] tracking-[0.01vw] text-[#888888] cursor-pointer hover:text-[#ff3d00]"
                >{{item}}</span>
            </div>
        </div>
        <div class=" w-screen flex flex-wrap">
            <div class=" relative w-[33.33vw] h-[25vw]" v-for="(item,index) of programmeBottomImg" :key="index">
                <div class="w-full h-full">
                    <img :src="programmeBottomImg[index]" alt="">
                </div>
                <!-- 遮罩层 -->
                <div class="w-full h-full bg-black/60 absolute top-0 opacity-0 hover:opacity-100 cursor-pointer transition-all duration-300">
                    <div class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-1 sm:space-y-3">
                        <h2 class=" text-[1.88vw] font-normal text-white/50">手提袋案例</h2>
                        <div class=" w-[4.17vw] h-[0.1vw] bg-white/10 mx-auto"></div>
                        <h3 class=" text-[1.25vw] font-normal tracking-[0.25vw] text-white/20 whitespace-nowrap">Paper bag</h3>
                        <router-link to="/more" class="block w-[10.42vw] leading-[2.6vw] rounded-full bg-[#ff3d00] text-center cursor-pointer mx-auto">
                                <span class="text-[0.94vw] font-normal text-white">more</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
import Footer from '../components/footer.vue'
import { mapState } from 'vuex'
export default {
    name: 'About',
    data() {
        return {
            avaData: [
                {
                    h2: '一体化包装',
                    p: '一体化包装解决方案：指为客户提供从包装材料的选取、方案设计、生产制造和物流配送的端到端服务。'
                },
                {
                    h2: '智能包装',
                    p: '亚华的智慧物联大数据平台包括裕同云创盒酷平台、文化产业云平台、化妆品溯源营销平台、大健康产品溯源营销平台等。'
                },
                {
                    h2: '功能性包装',
                    p: '亚华研发的智能缓释微胶囊保鲜包装材料具有强大的吸附力，可吸附乙烯及有害气体延长水果保鲜时间1-3倍。'
                }
            ],
            textData: [
                '全部包装', '化妆品包装', '数码包装', '烟酒包装', '彩盒包装', '手工包装'
            ],
        }
    },
    components: {
        Nav,Footer
    },
    mounted() {
        this.$store.dispatch('getProgrammeImg')
    },
    computed:{
        ...mapState({
            programmeTopImg:state => state.programme.ProgrammeTopImg,
            programmeMiddleImg:state => state.programme.ProgrammeMiddleImg,
            programmeBottomImg:state => state.programme.ProgrammeBottomImg
        })
    }
}
</script>
<style lang="postcss" scoped>
</style>