<template>
    <div class="mt-[4.17vw] overflow-hidden ">
        <Nav/>
        <div class=" relative">
            <div class=" w-screen h-[42.29vw]">
                <img class=" object-cover" src="../assets/img/banner8.png" alt="">
            </div>
            <div class="h-screen flex absolute top-0 left-1/2 -translate-x-1/2">
                <!-- 左边 -->
                <div class=" w-[14.22vw]">
                    <div class=" w-full h-[9.2vw] bg-pink-500">
                        <img src="../assets/img/cs1.png" alt="">
                    </div>
                    <div class=" w-full h-[9.2vw] bg-pink-500">
                        <img src="../assets/img/cs2.png" alt="">
                    </div>
                    <div class=" w-full h-[9.2vw] bg-pink-500">
                        <img src="../assets/img/cs3.png" alt="">
                    </div>
                    <div class=" w-full h-[9.2vw] bg-pink-500">
                        <img src="../assets/img/cs4.png" alt="">
                    </div>
                </div>
                <!-- 中间 -->
                <div class="w-[42.66vw]">
                    <div class=" relative">
                        <div class="h-[27.6vw] w-[42.66vw]">
                            <img src="../assets/img/cs12.png" alt="">
                        </div>
                        <div class="absolute h-[27.6vw] w-[42.66vw] bg-black/80 top-0">
                            <h2 class=" text-[#f60] text-[4vw] font-[700]">YH</h2>
                            <h3></h3>
                        </div>
                    </div>
                    <div class=" w-[14.22vw] h-[9.2vw] inline-block">
                        <img src="../assets/img/cs1.png" alt="">
                    </div>
                    <div class=" w-[14.22vw] h-[9.2vw] inline-block">
                        <img src="../assets/img/cs5.png" alt="">
                    </div>
                    <div class=" w-[14.22vw] h-[9.2vw] inline-block">
                        <img src="../assets/img/cs6.png" alt="">
                    </div>
                </div>
                <!-- 右边 -->
                <div class=" w-[14.22vw]">
                    <div class=" w-full h-[9.2vw] bg-pink-500">
                        <img src="../assets/img/cs10.png" alt="">
                    </div>
                    <div class=" w-full h-[9.2vw] bg-pink-500">
                        <img src="../assets/img/cs9.png" alt="">
                    </div>
                    <div class=" w-full h-[9.2vw] bg-pink-500">
                        <img src="../assets/img/cs8.png" alt="">
                    </div>
                    <div class=" w-full h-[9.2vw] bg-pink-500">
                        <img src="../assets/img/cs11.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
export default {
    name:'About',
    components:{
        Nav
    },
}
</script>
<style lang="postcss" scoped>
    
</style>