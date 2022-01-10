<template>
    <div class="mt-[4.17vw] overflow-hidden">
        <Nav />
        <div class="h-[52.08vw] w-screen overflow-hidden">
            <div v-swiper:mySwiper_2="swiperOption" id="bottomBanner" class="cursor-pointer relative" @mousemove="move_2" @mouseout="out_2">
                <div class="swiper-wrapper bg-green-500">
                    <div class="swiper-slide" :key="banner" v-for="banner in topBanners">
                        <img class=" w-full h-full object-contain" :src="banner" />
                    </div>
                </div>
                <div class="swiper-pagination absolute top-[44vw] sm:top-[48vw]" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-blue sm:ml-8 ml-2 opacity-0 hidden lg:block" ref="buttonPrev_2"></div>
                <div class="swiper-button-next swiper-button-blue sm:mr-8 mr-2 opacity-0  hidden lg:block" ref="buttonNext_2"></div>
            </div>
        </div>
        <!-- top -->
        <div class="w-screen flex flex-wrap gap-4 mt-4 sm:h-[25.05vw] sm:flex-nowrap sm:gap-0 sm:mt-0">
            <div id="case" class="h-[30vh] sm:h-full">
                <img src="../assets/img/case.png" alt />
            </div>
            <div id="case" class="h-[30vh] sm:h-full">
                <img src="../assets/img/case2.png" alt />
            </div>
            <div id="case" class="h-[30vh] sm:h-full">
                <img src="../assets/img/case3.png" alt />
            </div>
        </div>
        <!-- middle -->
        <div class="flex flex-col gap-4 text-center py-[2vw]">
            <span class="text-[2.25vw] font-[550] tracking-wider">经典案例</span>
            <span class="text-[1.2vw] text-[#dedede] font-semibold">GOOD CASE</span>
        </div>
        <!-- bottom -->
        <div id="bottom" class="w-screen h-[25.05vw] flex">
            <div :key="banner" v-for="banner in banners">
                <img :src="banner" alt />
            </div>
        </div>
        <!-- 轮播图 -->
        <div v-swiper:mySwiper="swiperOption" id="bottomBanner" class=" hidden cursor-pointer">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="banner" v-for="banner in banners">
                    <img class=" object-contain" :src="banner" />
                </div>
            </div>
            <div class="swiper-pagination" slot="pagination"></div>

        </div>
        <Footer />
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
import Footer from '../components/footer.vue'
export default {
    name: 'About',
    data() {
        return {
            banners: [new URL("../assets/img/case4.png", import.meta.url).href,
            new URL("../assets/img/case5.png", import.meta.url).href,
            new URL("../assets/img/case6.png", import.meta.url).href
            ],
            topBanners:[
                new URL("../assets/img/banner.png", import.meta.url).href,
                new URL("../assets/img/banner2.png", import.meta.url).href,
                new URL("../assets/img/banner3.png", import.meta.url).href,
                new URL("../assets/img/banner5.png", import.meta.url).href,
            ],
            swiperOption: {
                loop : true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
            },
            swiperOption_2: {
                loop : true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
            }
        }
    },
    methods: {
        move_2(){
            this.$refs.buttonPrev_2.classList.remove('opacity-0')
            this.$refs.buttonNext_2.classList.remove('opacity-0')
        },
        out_2(){
            this.$refs.buttonPrev_2.classList.add('opacity-0')
            this.$refs.buttonNext_2.classList.add('opacity-0')
        }
    },
    mounted() {
        this.mySwiper.slideTo(3, 1000, false)
        this.mySwiper_2.slideTo(3, 1000, false)
    },
    components: {
        Nav, Footer
    }
}
</script>
<style lang="postcss" scoped>
@media (min-width: 0px) and (max-width: 640px) {
    #case {
        width: 90vw;
        margin-left: 4vw;
    }
    #case>img{
        @apply rounded-xl 
    }
    #bottom{
        display: none;
    }
    #bottomBanner{
        display: block;
        margin-bottom: 4vw;
    }
}
.swiper-button-next,.swiper-button-prev{
    transition:opacity 0.7s;
}
</style>