<template>
    <div class="mt-[4.17vw] overflow-hidden">
        <Nav/>
        <div class="w-screen h-[40.57vw]">
            <img src="../assets/img/banner6.png" alt />
        </div>
        <!-- 产品中心 -->
        <div class="text-center py-[4.46vw]">
            <h2 class="text-[2.5vw]">产品中心</h2>
            <h3
                class="text-[1.25vw] text-black/20 tracking-[0.9vw] font-normal translate-x-2"
            >products</h3>
        </div>
        <!-- 产品展示 -->
        <div class="h-[55.56vw] w-[72.94vw] mx-auto flex flex-wrap justify-between">
            <div
                class="w-[21.88vw] h-[24.28vw] flex flex-col justify-around items-center"
                v-for="element of products"
                :key="element"
            >
                <!-- 图片 -->
                <div class="w-full h-[15.63vw]">
                    <img :src="element.img" alt />
                </div>
                <!-- 文字简介 -->
                <div class="w-full h-[4.69vw] mx-auto text-center">
                    <h3 class="tracking-[0.13vw] text-[1.88vw]">{{ element.title }}</h3>
                    <div class="w-[3.13vw] h-[0.1vw] bg-[red] mx-auto"></div>
                    <h3
                        class="tracking-[0.33vw] text-[#555555] text-[1.25vw] font-normal"
                    >{{ element.info }}</h3>
                </div>
            </div>
        </div>
        <Customer :customerImg="customerImg" />
        <!-- 底部 -->
        <Footer/>
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
import Footer from "../components/footer.vue";
import Customer from '../components/customer.vue'
export default {
    name: 'About',
    data() {
        return {
            products: [
                {
                    img: new URL("../assets/img/product1.png", import.meta.url).href,
                    title: '彩盒印刷',
                    info: 'color boxes'
                },
                {
                    img: new URL("../assets/img/product2.png", import.meta.url).href,
                    title: '礼盒',
                    info: 'gift boxes'
                },
                {
                    img: new URL("../assets/img/product3.png", import.meta.url).href,
                    title: '说明书',
                    info: 'manuals'
                },
                {
                    img: new URL("../assets/img/product4.png", import.meta.url).href,
                    title: '不干胶贴纸',
                    info: 'stickers'
                },
                {
                    img: new URL("../assets/img/product5.png", import.meta.url).href,
                    title: '瓦楞纸箱',
                    info: 'corrugated boxes'
                },
                {
                    img: new URL("../assets/img/product6.png", import.meta.url).href,
                    title: '纸托',
                    info: 'molded pulp trays'
                },
            ],
            customerImg: [
            {
            img: new URL("../assets/img/footer11.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer2.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer3.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer4.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer5.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer6.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer7.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer8.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer12.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer10.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer11.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer9.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer13.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer14.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer2.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer16.png", import.meta.url).href,
            },

            {
            img: new URL("../assets/img/footer7.png", import.meta.url).href,
            },
            {
            img: new URL("../assets/img/footer8.png", import.meta.url).href,
            },
        ],
        }
    },
    components: {
        Nav, Footer,Customer
    }
}
</script>
<style lang="postcss" scoped>

</style>