<template>
    <div class="mt-[4.17vw] overflow-hidden ">
        <Nav/>
        <div class=" w-screen h-[46.77vw] relative">
            <div class="w-full h-full">
                <img src="../assets/img/banner9.png" alt="">
            </div>
            <div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
                <h2 class=" text-white text-[3.85vw]">服务支持</h2>
                <h2 class=" text-white text-[1.93vw] tracking-[.5vw]">Service & Supports</h2>
            </div>
        </div>
        <!-- 方案展示 -->
        <div class="">
            <div class=" xl:px-[25%] sm:px-[10%] px-[5%] py-[3%] text-center border-b border-solid space-y-8" v-for="(element,index) of items" :key="index">
                <div class="w-[11.96vw] h-[11.96vw] mx-auto">
                    <img :src="element.img" alt="">
                </div>
                <div>
                    <h2 class="sm:text-[2.34vw] text-[4.35vw]">{{element.title}}</h2>
                    <h2 class="text-[1vw] tracking-[.5vw] text-[#ccc]">{{element.title_2}}</h2>
                </div>
                <div class="line-clamp-3 cursor-pointer" v-for=" (item,index) of element.infos" :key="index" @click="line($event)">
                    <p class="text-left" v-for="(text,index) of item" :key="index">{{text.text}}</p>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <Footer/>
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
import Footer from '../components/footer.vue'
export default {
    name:'About',
    data() {
        return {
            items:[
                {
                    img: new URL("../assets/img/service1.png", import.meta.url).href,
                    title:'服务网点',
                    title_2:'SERVICE NETWORK',
                    infos:[
                        [
                            {
                                text:'客户至上是亚华的核心价值观。为了及时响应客户需求，缩短交付时间，亚华科技为客户提供就近服务与交付，在全球建有18个服务网点(同时是生产基地)，包括美国、香港、印度、越南、深圳、河北三河、四川成都、四川泸州、江苏苏州、山东烟台、安徽合肥、江西九江等。'
                            }
                        ],
                    ]
                },
                {
                    img: new URL("../assets/img/service2.png", import.meta.url).href,
                    title:'快速交付',
                    title_2:'FAST DELIVERY',
                    infos:[
                        [
                            {
                                text:'亚华科技为客户提供便捷快速的交付，建立了面向客户的高效协同运作体系。交付团队全程参与解决方案的制定，保障快速交付。公司的信息化和自动化管理、一体化解决方案、区域化多网点运营、完备的物流配送等，为快速响应客户需求并最短时间交付产品提供了坚实的保障。'
                            }
                        ]
                    ]
                },
                {
                    img: new URL("../assets/img/service3.png", import.meta.url).href,
                    title:'集成供应链',
                    title_2:'INTEGRATED SUPPLY CHAIN',
                    infos:[
                        [
                            {
                                text:'完善的供应畦解决方案是亚华科授的优势之一。集中采购，障低咸本:亚华供应蹉以大宗商品交易为核心业务，涉及传统印刷包囊、环保纸托包装等业务。领域，实时把握国际大宗商品的价格波动，规延风脸，并通过集中采购，实现规模效益，降低成本，构建外部供方战略合作伙伴关系。'
                            },
                        ],
                        [
                            {
                                text:'仓储物流，快速交付:通过自有仓库以及第三方合作仓储物流，提供专业化、高效率的仓储物流服务，大―宗商品初加工服务，帮助企业实现快速高效的交付能力。信息化管理，提升竞争力:通过构建信息化管理系统，连接内外，从生产、仓储、交易、物流等各环节，实时汇集物流、信息流、资金流，形成三位一体的完整供应链信息，并进而提供大数据服务、金融服务，把资金作为整个供应链的溶剂，解决中小企业融资难和供应链失衡的问题，增加资金流动性，促进中小企业与亚华建立长期战略协同关系，提升供应链的竞争能力。'
                            },
                        ]
                    ]
                },
                {
                    img: new URL("../assets/img/service4.png", import.meta.url).href,
                    title:'自动化管理',
                    title_2:'AUTOMATED',
                    infos:[
                        [
                            {
                                text:'亚华科技拥有集研发、工程、技术服务于一体的高端自动化设备制造供应团队，其服务涉及自动化多个领域，在行业中具有绝对的优势。我们能为客户提供:',
                            },
                            {
                                text:'1、大型自动包装及物流生产线。',
                            },
                            {
                                text:'2、各类电子零部件的自动化装配设备。',
                            },
                            {
                                text:'4、视觉应用。',
                            },
                            {
                                text:'5、机器人应用等。',
                            },
                            {
                                text:'其中在包装领域内更是处于领先地位，设计研发的酒盒、礼盒、保健品盒等全自动生产线得到客户的一致好评。凭借专业一流的技术与商务团队，我们不仅为客户带来优质产品，还可提供自动化工程技术服务及成套解决方案。目前，我们已经与国内外多家知名生产商达成稳定、友好的合作关系，并成为部分产品的指定合作伙伴。'
                            }
                        ]
                    ]
                },
                {
                    img: new URL("../assets/img/service5.png", import.meta.url).href,
                    title:'完备物流配送',
                    title_2:'DISTRIBUTION',
                    infos:[
                        [
                            {
                                text:'为贴近客户，提高对客户的响应速度，并最大限度的降低物流成本，公司已基本建成以长三角地区、环渤海湾经~济区、珠三角地区、越南为主的生产基地，整合四个区域的资源，确立全面竞争优势.对于重要客户，基于其差异化需求提供平面及工程设计、品牌与生产管理、仓储配送至生产线等产品供应以外的高附加值延伸服务，建立快速、高效的反应机制，以满足公司不断增加的多样化订单需求.'
                            }
                        ]
                    ]
                },
            ]
        }
    },
    components:{
        Nav,Footer
    },
    methods: {
        line(event){
            event.target.parentElement.classList.remove('line-clamp-3')
        }
    },
}
</script>
<style lang="postcss" scoped>
    
</style>