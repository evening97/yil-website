<template>
    <div class="mt-[4.17vw] overflow-hidden ">
        <Nav/>
        <div class=" w-screen h-[36.25vw]">
            <img src="../assets/img/banner10.png" alt="">
        </div>
        <div class=" w-screen px-[13.25vw] py-[6.98vw]">
            <div class="sm:h-[27.14vw] text-center flex flex-col justify-between">
                <!-- 标题 -->
                <div class="">
                    <h2 class="text-[3.13vw] font-bold">联系我们</h2>
                    <h2 class="text-[1.25vw] text-[#ddd] font-[550] tracking-[.5vw]">CONTACT INFO</h2>
                </div>
                <div class="flex flex-col sm:flex-row justify-between mt-[5vw] items-center ">
                    <!-- 左边 -->
                    <div class=" inline-flex flex-col justify-start items-start">
                        <h3 class="text-[1.88vw] mb-0 sm:mb-[2.66vw]">广州市亚华印刷厂有限责任公司</h3>
                        <span class="text-[0.83vw] text-[#888]">电话：020-66358168 29147931</span>
                        <span class="text-[0.83vw] text-[#888]">地址：广州市白云区均禾街七星岗环岗二路15号</span>
                        <span class="text-[0.83vw] text-[#888]">联系人：陈小姐</span>
                        <span class="text-[0.83vw] text-[#888]">销售及支持Email：sales@gzyahua.com</span>
                        <span class="text-[0.83vw] text-[#888]">投资者交流热线：020-66358168 29147931</span>
                        <span class="text-[0.83vw] text-[#888]">Email：investor@gzyahua.com</span>
                    </div>
                    <!-- 右边 -->
                    <div class=" sm:w-[15.1vw] sm:h-[15.1vw] w-[30.2vw] h-[30.2vw] mt-[2vw] mx-auto sm:mx-0">
                        <img src="../assets/img/wx.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 地图 -->
        <div class=" w-screen h-[56.25vw] overflow-hidden">
            <img class=" hover:scale-[1.2]" src="../assets/img/map.png" alt="">
        </div>
        <Footer/>
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
import Footer from '../components/footer.vue'
export default {
    name:'About',
    components:{
        Nav,Footer
    }
}
</script>
<style lang="postcss" scoped>
    img{
        cursor: pointer;
        transition: all 1.5s;
    }
</style>