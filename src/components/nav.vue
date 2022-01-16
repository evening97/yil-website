<template>
    <nav class="w-full h-[4.17vw]  bg-white fixed top-0 left-0  z-[5] px-[3vw] ">
        <div class=" w-full h-full flex justify-between relative">
            <!-- 左边 -->
            <div class="w-[6vw] h-[4.17vw]">
                <img src="../assets/img/logo.png" alt />
            </div>
            <!-- 中间 -->
            <div class="relative">
                <div
                    class="w-[25vw] h-full mx-auto inline-flex items-center justify-between"
                    id="navCenter"
                    :style="navStyle"
                >
                <!-- 输入框 -->
                    <div class=" block sm:hidden my-5 px-3">
                        <input class=" w-[90%] block rounded-full box-content px-3 resize" type="text">
                    </div>
                <!-- 关闭按钮 -->
                    <div class=" px-[2vw] bg-white/80 shadow-lg cursor-pointer absolute top-0 left-1 -translate-x-full block sm:hidden">
                        <i class="ri-close-line text-[2vw]" @click="_close"></i>
                    </div> 
                    <div class="" v-for="(item,index) of navData" :key="index">
                        <router-link :to="item[2]" class="group">
                            <i :class="item[0]" class=" block sm:hidden"></i>
                            <span class="text-[1vw] font-[550] group-hover:text-orange-400">{{item[1]}}</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- 移动端 -->
            <div class="block sm:hidden absolute top-[-3px] right-0 cursor-pointer transition-all duration-[1.5s]" ref="muse" @click="_open" >
                <i class="ri-equalizer-line"></i>
            </div>
            <!-- 右边 -->
            <div class="w-[6.98vw] leading-[4.17vw] hidden sm:block whitespace-nowrap">
                <span class=" text-[0.5vw] sm:text-[1vw] font-[550] text-orange-400 flex-shrink-0">中文</span>
                <span class="text-[1.2vw] font-[550] mx-[1vw]">|</span>
                <span class="text-[1vw] font-[550]">EN</span>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:'Nav',
    data() {
        return {
            navData:[
                ['ri-user-add-fill','关于','about'],
                ['ri-product-hunt-fill','产品','product'],
                ['ri-file-text-fill','方案','programme'],
                ['ri-customer-service-2-fill','服务','service'],
                ['ri-contacts-fill','联系','contact'],
                ['ri-home-gear-fill','···','home_2']
            ],
            navStyle:{transform:`translate`},
        }
    },
    methods: {
        _close(){
            this.navStyle.transform = `translate(130%)`
            this.$refs.muse.classList.remove('rotate-90')
            this.$refs.muse.classList.remove('opacity-0')
        },
        _open(){
            this.navStyle.transform = `translate(-93%)`
            this.$refs.muse.classList.add('rotate-90')
            this.$refs.muse.classList.add('opacity-0')
        }
    },
}
</script>
<style lang="postcss" scoped>
@media (min-width: 0px) and (max-width:640px) {
    #navCenter{
        width: 45vw;
        height: 100vh;
        position: absolute;
        top:0;
        transform: translate(64px);
        background-color: white;
        opacity: .8;
        flex-direction: column;
        justify-content: start;
        transition: all 1.5s;
        box-shadow: 0px 6px 10px 6px rgba(0, 0, 0, 0.3);
    }
    #navCenter>div>a{
        width: 45vw;
        line-height: 9vw;
        text-align: center;
        border-bottom: 1px solid rgba(225,225,225,.5);
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15vw;
    }
    #navCenter>div>a:hover{
        background-color: orchid;
    }
}
</style>