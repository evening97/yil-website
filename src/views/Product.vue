<template>
    <div class="mt-[4.17vw] overflow-hidden">
        <Nav/>
        <div class="w-screen h-[40.57vw]">
            <img :src="productTopImg.url" alt />
        </div>
        <!-- 产品中心 -->
        <div class="text-center py-[4.46vw]">
            <h2 class="text-[2.5vw]">产品中心</h2>
            <h3
                class="text-[1.25vw] text-black/20 tracking-[0.9vw] font-normal translate-x-2"
            >products</h3>
        </div>
        <!-- 产品展示 -->
        <div class="sm:h-[55.56vw] h-[75.56vw] w-[72.94vw] mx-auto flex flex-wrap justify-between mb-[2vw] ">
            <div
                class="w-[21.88vw] h-[24.28vw] flex flex-col justify-around items-center"
                v-for="(element ,index) of products"
                :key="element.id"
            >
                <!-- 图片 -->
                <div class="w-full h-[15.63vw]">
                    <img :src="productsImg[index]" alt />
                </div>
                <!-- 文字简介 -->
                <div class="w-full h-[4.69vw] mx-auto text-center">
                    <h3 class="tracking-[0.13vw] text-[1.88vw]">{{ element.title }}</h3>
                    <div class="w-[3.13vw] h-[0.1vw] bg-[red] mx-auto"></div>
                    <h3
                        class="tracking-[0.33vw] text-[#555555] text-[.5vw] sm:text-[1.25vw] font-normal"
                    >{{ element.info }}</h3>
                </div>
            </div>
        </div>
        <Customer/>
        <!-- 底部 -->
        <Footer/>
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
import Footer from "../components/footer.vue";
import Customer from '../components/customer.vue'
import { nanoid } from 'nanoid';
import { mapState } from 'vuex';
export default {
    name: 'About',
    data() {
        return {
            products: [
                {
                    id:nanoid(),
                    title: '彩盒印刷',
                    info: 'color boxes'
                },
                {
                    id:nanoid(),
                    title: '礼盒',
                    info: 'gift boxes'
                },
                {
                    id:nanoid(),
                    title: '说明书',
                    info: 'manuals'
                },
                {
                    id:nanoid(),
                    title: '不干胶贴纸',
                    info: 'stickers'
                },
                {
                    id:nanoid(),
                    title: '瓦楞纸箱',
                    info: 'corrugated boxes'
                },
                {
                    id:nanoid(),
                    title: '纸托',
                    info: 'molded pulp trays'
                },
            ],
        }
    },
    components: {
        Nav, Footer,Customer
    },
    computed:{
        ...mapState({
            productTopImg:state => state.product.productTopImg,
            productsImg:state => state.product.productImg
        })
    },
    mounted() {
        this.$store.dispatch('getProductImg')
    },
}
</script>
<style lang="postcss" scoped>

</style>