<template>
    <div class="text-center">
        <h1 class="sm:text-[3.18vw] text-[5vw] tracking-[0.5vw]">合作伙伴</h1>
        <h2 class="text-[1vw] font-bold tracking-[1.3vw] text-black/20">CUSTOMER</h2>
        <div class="w-[73.02vw] mx-auto">
            <ul id="brand" class="w-full h-full flex justify-between flex-wrap items-center">
                <li v-for="item of customerImgs" :key="item.id">
                    <a>
                        <img :src="item.url" alt />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>import { mapState } from "vuex"

export default {
    name:'Customer',
    data() {
        return {
        }
    },
    mounted() {
        this.$store.dispatch('getCustomerImg')
    },
    computed:{
        ...mapState({
            customerImgs:state => state.customer.customerImg
        })
    }
}
</script>
<style lang="postcss" scoped>
#brand > li {
    @apply block mb-[1vw] flex-shrink-0 w-[21.56vw] h-[9.975vw]  sm:w-[10.78vw] sm:h-[6.65vw];
}
#brand > li > a > img {
    @apply object-contain;
}
</style>