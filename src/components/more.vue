<template>
    <div class="mt-[4.17vw] overflow-hidden ">
        <Nav/>
        <div class=" pt-[5.31vw] pb-[4.64vw] text-center">
            <h2 class="text-[3.13vw] font-normal text-black/80">企业宣传册</h2>
            <h3 class="text-[1.25vw] font-normal tracking-[0.75vw] text-black/20">case</h3>
            <h3 class="text-[0.83vw] font-normal text-black/50">某知名企业的公司产品宣传册案例</h3>
        </div>
        <div class=" w-[72.9vw] pb-[8.7vw] mx-auto flex flex-wrap" >
            <div :class="element.classStyle" v-for="element of qiyeData" :key="element.id">
                <img :src="element.img" alt="">
            </div>
        </div>
        <!-- 底部 -->
        <Footer/>
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
import Footer from '../components/footer.vue'
import { nanoid } from 'nanoid'
export default {
    name:'About',
    data() {
        return {
            qiyeData:[
                {
                    id:nanoid(),
                    classStyle:'w-[50%]',
                    img: new URL('../assets/img/qiye1.png',import.meta.url).href
                },
                {
                    id:nanoid(),
                    classStyle:'w-[50%]',
                    img: new URL('../assets/img/qiye2.png',import.meta.url).href
                },
                {
                    id:nanoid(),
                    classStyle:'w-full',
                    img: new URL('../assets/img/qiye3.png',import.meta.url).href
                },
                {
                    id:nanoid(),
                    classStyle:'w-full',
                    img: new URL('../assets/img/qiye4.png',import.meta.url).href
                },
                {
                    id:nanoid(),
                    classStyle:'w-[50%]',
                    img: new URL('../assets/img/qiye5.png',import.meta.url).href
                },
                {
                    id:nanoid(),
                    classStyle:'w-[50%]',
                    img: new URL('../assets/img/qiye6.png',import.meta.url).href
                },
                {
                    id:nanoid(),
                    classStyle:'w-full',
                    img: new URL('../assets/img/qiye7.png',import.meta.url).href
                },
                {
                    id:nanoid(),
                    classStyle:'w-full',
                    img: new URL('../assets/img/qiye8.png',import.meta.url).href
                },
            ]
        }
    },
    components:{
        Nav,Footer
    },
}
</script>
<style lang="postcss" scoped>
    
</style>