<template>
    <footer class=" xl:h-[38.02vw] bg-[#222]" id="footer">
        <!-- 内容简介 -->
        <div class="w-[73.02vw] py-[1.5vw] sm:px-[13.8vw] sm:py-[6vw] mx-auto flex justify-between">
            <ul v-for="(item,index) of footerInfo" :key="index">
                <li v-for="element of item" :key="element">
                    <a>{{ element }}</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a>关注我们</a>
                </li>
                <li>
                    <img
                        class="sm:w-[6.67vw] sm:h-[6.67vw] w-[18vw] h-[18vw]"
                        src="../assets/img/erweima.png"
                        alt
                    />
                </li>
            </ul>
        </div>
        <div class="text-center py-[0.2vw] sm:py-[2.5vw] border-y border-solid border-black/70">
            <p class="text-[0.8vw] text-[#4c4c4c]">24小时服务热线：020-25885288 Mail：yahua@gmil.com</p>
        </div>
        <div class="px-[4vw] sm:py-[2vw] sm:px-[13.65vw] flex justify-between items-center">
            <span class="text-[0.8vw] text-[#686868]">© 2017 YAHUA ALL RESERVED</span>
            <div class="text-[0.8vw] text-[#686868]">
                <a>法律申明</a>
                <span class="text-[1.2vw] mx-[0.3vw]">|</span>
                <a>网站地图</a>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name:'Footer',
    data() {
        return {
            footerInfo: [
                ['关于我们', '亚华简介', '企业文化', '荣誉资质', '社会责任', '创意设计', '亚华展厅'],
                ['新闻动态', '亚华新闻', '展会活动', '媒体报道', '新闻中心', '品牌活动', '员工天地'],
                ['快速链接', '产品中心', '服务中心', '视频中心', '经典案例', '行业方案', '联系我们'],
            ]
        }
    },
}
</script>
<style lang="postcss" scoped>
footer > div > ul {
    @apply inline-flex flex-col gap-[0.45vw] text-[#68686868] text-[0.97vw];
}
footer > div > ul > li:first-child {
    @apply mb-[1vw] text-[#4c4c4c];
}
</style>