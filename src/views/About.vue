<template>
    <div class="mt-[4.17vw] overflow-hidden relative">
        <Nav />
        <div class="w-screen h-[52.08vw]">
            <img src="../assets/img/banner5.png" alt />
        </div>
        <!-- 关于我们 -->
        <div class="w-screen  text-center px-[22vw] py-[7.06vw] flex flex-wrap gap-3">
            <h2 class=" w-full text-[3.18vw] font-normal inline-block">关于我们</h2>
            <span class=" w-full text-[1vw] text-[#dadada] tracking-[1vw] font-[550] inline-block">ABOUT</span>
            <h3 class=" w-full text-[1.63vw] text-[#7f7f7f] inline-block">非凡卓越的印刷工艺和独领风骚的排版团队</h3>
            <p class="text-[.83vw] text-left mt-[2vw] line-clamp-3 sm:line-clamp-none " @click="line($event)">亚华科技成立于2002年，总部位于广州，亚华科技是国内领先的高端品牌包装整体解决方案提供商，服务于数十家世界50O强客户及数百个高端品牌，为消费电子、大健廪、烟酒、化妆品、食品等行业客户提供专业的、有竞争力的包装产品、解决方案和服务，并致力于持续为客户提升品牌价值。</p>
            <p class="text-[.83vw] text-left mt-[2vw] line-clamp-3 sm:line-clamp-none " @click="line($event)">亚华科技提供的产品和解决方案包括彩盒、礼盒、说明书、不干胶贴纸、纸箱、纸托以及智能包装、环保包装、功能包装等，同时提供创意设计、创新研发、一体化制造、自动化大规模生产、多区域运营及就近快捷交付等专业服务。亚华科技设计的作品多次获得德国的红点奖、F设计奖、美国莫比斯广告奖等世界顶级工业设计奖项。亚华科技实行集团化管理，截至2017年6月，已拥有37家子公司和5家分公司，在珠三角、长三角、华东、华南、华北、越南、印度等地区设有生产基地，并在美国、中国香港等地区设有服务中心，就近为全球客户提供服务。亚华科技始终将“坚持自主创新，保持技术领先”作为核心战略，设立了亚华研究院，2016投入到研发领域的费用达到营业额的3%，拥有丰硕的具有自主知识产权的研发成果，累计有上百项行业领先技术，为公司的持续发展提供丰富的创造力和强大的技术支持。</p>
            <p class="text-[.83vw] text-left mt-[2vw] line-clamp-3 sm:line-clamp-none " @click="line($event)">近年来，亚华科技先后获得了“2016年、2017年中国印刷包装企业100强第一名”、“中国优秀包装品牌”﹑“国家印刷示范企业”、“国家文化出口重点企业”、“广东省著名商标”、“深圳市百强企业”、“深圳市文化创意产业百强企业”、“宝安区科学技术奖区长奖”等荣誉。</p>
        </div>
        <!-- 宣传视频 -->
        <div class="w-screen  text-center py-[2vw] flex flex-wrap gap-3">
            <h2 class=" w-full text-[3.18vw] font-normal inline-block">宣传视频</h2>
            <span class=" w-full text-[1vw] text-[#dadada] tracking-[1vw] font-[550] inline-block">VIDEO</span>
            <div class="w-screen h-[56.25vw] overflow-hidden">
                <video src="../assets/img/YH.mp4"></video>
            </div>
        </div>
        <!-- 企业文化 -->
        <div class=" pt-[5.05vw] pb-[9.48vw] px-[22vw] text-center flex flex-wrap gap-4">
            <h2 class=" w-full text-[3.18vw] font-normal inline-block">企业文化</h2>
            <span class=" w-full text-[1vw] text-[#dadada] tracking-[1vw] font-[550] inline-block">corporate culture</span>
            <p class="text-[.83vw] text-left mt-[2vw] line-clamp-3 sm:line-clamp-none " @click="line($event)">客户至上:以客户为中心，是裕同生存和发展的基壁。没有客户就没有裕同。只有成就客户才能或就裕同。信守承诺，媳尽所能满足客户需求。工作相关同事也是客户，内外部客户要一视同仁。以人为本:以人为本，是裕同生存和发展的根本。人才是裕同最宝贵的资本。公司搭建让员工充分发展的平台，做到“人尽其才”。尊重和关爱员工，让员工在愉悦的环境中工作。重视客户体验，用“以人为本”的原则来发屣产品和服务。</p>
            <p class="text-[.83vw] text-left mt-[2vw] line-clamp-3 sm:line-clamp-none " @click="line($event)">持续创新:持续创新，是裕同生存和发展的关键。创新是公司的“魂”，要根植于每个裕同人的心中。公司致力于营造良好的创新环境。持续创新，霞在“断”，贵在“恒”。协作共赢:协作共赢，是裕同生存和发展的保障。与客户/协作商/员工及其他利益相关者携手并进、共生共荣。公司利益至上,团队利益至上,反对部门本位和个人主义。</p>
        </div>
        <!-- 专业团队 -->
        <div class=" w-screen text-center bg-black py-[2vw] px-[22vw]">
            <h2 class=" w-full text-[3.18vw] text-white font-normal inline-block">专业团队</h2>
            <span class=" w-full text-[1vw] text-[#dadada] tracking-[1vw] font-[550] inline-block">TEAM</span>
            <h3 class=" w-full text-[1.63vw] text-[#7f7f7f] inline-block">非凡卓越的印刷工艺和独领风骚的排版团队</h3>
            <p class="text-[.83vw] mt-[2vw] line-clamp-3 sm:line-clamp-none text-white/20" @click="line($event)">亚华科技高度重视创意设计，以品牌策划为核心，从品牌定位，概念设计到系列产品包装设计进行全案策划，从平面、结构、造型、材料、工艺等方面提供全方位的创新设计和整体包装解决方案，为客户提升产品附加价位。亚华科技设有两个设计中心，共有上百名优秀设计师，包括高级策划师，平面设计师，结构设计师，造型设计师，工艺设计师等。除深圳总部外，亚华科技在成都、武汉、上海、烟台等多个中心城市设立了设计分部。此外，亚华设计中心有多位专业领城设计高手成立的独立工作室，设计成果和效率已得到客户的高度赞誉。</p>
            <!-- start -->
            <div class="flex flex-col xl:flex-row">
                <div class=" xl:w-[19.17vw]  py-[2vw] px-[.5vw] inline-flex flex-col justify-evenly items-center gap-2"
                        v-for="item of startData" :key="item.id">
                    <div class=" w-[6.98vw] h-[6.98vw]">
                        <img :src="item.img" alt="">
                    </div>
                    <h2 class="text-white tracking-[0.5vw]">{{item.name}}</h2>
                    <span class="text-[orange]">{{item.occupation}}</span>
                    <div class="w-[4.13vw] h-[0.1vw] bg-white/30 my-[1vw]"></div>
                    <p class="text-[0.68vw] text-[#4d4d4d] line-clamp-2 sm:line-clamp-none" @click="line($event)">{{item.info}}</p>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <Footer/>
        <!-- <div class=" w-screen h-screen bg-white/70 absolute top-0">
            <loading></loading>
        </div> -->
        <!-- <img class=" w-screen h-screen" src="https://cdn.seovx.com/ha/?mom=302" alt=""> -->
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
import Footer from '../components/footer.vue'
import loading from './loading.vue'
import { nanoid } from 'nanoid'
export default {
    name: 'About',
    data() {
        return {
            startData:[
                {
                    id:nanoid(),
                    img: new URL("../assets/img/team1.png", import.meta.url).href,
                    name:'PAUL RICHARDSON',
                    occupation:'DESIGNER',
                    info:'I have related the substance of severalconversations l had with my master during thegreatest part of the time l had the honour to be in his service.'
                },
                {
                    id:nanoid(),
                    img: new URL("../assets/img/team2.png", import.meta.url).href,
                    name:'DOMENIC FOX',
                    occupation:'DESIGNER',
                    info:'With what mingled joy and sorrow do l take upthe pen to write to my dearest friendl Oh, what a change between to-day and yesterday.'
                },
                {
                    id:nanoid(),
                    img: new URL("../assets/img/team3.png", import.meta.url).href,
                    name:'CAMILLA BYRD',
                    occupation:'DESIGNER',
                    info:'She clutched the matron by the arm, and forcingher into a chair by the bedside, was about to speak, when looking round.'
                }
            ]
        }
    },
    components: {
        Nav,Footer,loading
    },
    methods: {
        line(event){
            event.target.classList.remove('line-clamp-3')
            event.target.classList.remove('line-clamp-2')
        }
    },
}
</script>
<style lang="postcss" scoped>
@media (min-width: 0px) and (max-width: 640px){

}
</style>
