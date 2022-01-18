<template>
    <div class="mt-[4.17vw] overflow-hidden">
        <Nav />
        <div class="h-[52.08vw] w-screen overflow-hidden">
            <div v-swiper:mySwiper_2="swiperOption" id="bottomBanner" class="cursor-pointer relative" @mousemove="move_2" @mouseout="out_2">
                <div class="swiper-wrapper bg-green-500">
                    <div class="swiper-slide" :key="banner.id" v-for="banner in homeBannerImg">
                        <img class=" w-full h-full object-contain" :src="banner.url" />
                    </div>
                </div>
                <div class="swiper-pagination absolute top-[44vw] sm:top-[48vw]" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-blue sm:ml-8 ml-2 opacity-0 hidden lg:block" ref="buttonPrev_2"></div>
                <div class="swiper-button-next swiper-button-blue sm:mr-8 mr-2 opacity-0  hidden lg:block" ref="buttonNext_2"></div>
            </div>
        </div>
        <!-- top -->
        <div class="w-screen flex flex-wrap gap-4 mt-4 sm:h-[25.05vw] sm:flex-nowrap sm:gap-0 sm:mt-0">
            <div id="case" class="h-[30vh] sm:h-full" :key="case1.id" v-for=" case1 in homeCaseImg">
                <img :src="case1.url" alt />
            </div>
        </div>
        <!-- middle -->
        <div class="flex flex-col gap-4 text-center py-[2vw]">
            <span class="text-[2.25vw] font-[550] tracking-wider">经典案例</span>
            <span class="text-[1.2vw] text-[#dedede] font-semibold">GOOD CASE</span>
        </div>
        <!-- bottom -->
        <div id="bottom" class="w-screen h-[25.05vw] flex">
            <div :key="case2.id" v-for="case2 in homeCase2Img">
                <img class=" object-contain" :src="case2.url" />
            </div>
        </div>
        <!-- 轮播图 -->
        <div v-swiper:mySwiper="swiperOption" id="bottomBanner" class=" hidden cursor-pointer">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="case2.id" v-for="case2 in homeCase2Img">
                    <img class=" object-contain" :src="case2.url" />
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
import { mapState } from 'vuex'
export default {
    name: 'About',
    data() {
        return {
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
        //从vuex当中把数据捞到vue组件当中使用
        //从vuex拿到的数据(state 和 getters 当中的东西)，都在computed当中使用
        //从vuex拿到的数据(mutations 和 actions当中的东西)，都在methods当中使用
        this.$store.dispatch('getHomeBannerImg')
        this.$store.dispatch('getBannerList')
        this.mySwiper.slideTo(3, 1000, false)
        this.mySwiper_2.slideTo(1, 1000, false)
    },
    computed:{
        //数据是总state当中的数据 
        ...mapState({
            //头部录播图
            homeBannerImg:state => state.home.homeBannerImg,
            //case1 0-3
            homeCaseImg : state => state.home.homeCaseImg,
            //case2 4-6
            homeCase2Img: state => state.home.homeCase2Img,
        }),
        //mock
        ...mapState({
            bannerList:state => state.home.bannerList
        })
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