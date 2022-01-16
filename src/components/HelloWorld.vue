<template>
  <div class>
    <div class="w-screen h-[460px]">
      <!-- 小米商城列表 -->
      <div class="w-[1226px] h-[460px] mx-auto">
        <ul
          class="w-[234px] h-[460px] py-[20px] bg-[#696565] flex justify-between items-end flex-col cursor-pointer relative"
          id="product"
          @click="toSearch"
        >
          <li
            class="group w-[234px]"
            v-for=" (item,index) of xiaoMiData"
            :key="item.id"
            @mouseenter="moveIn(index)"
            @mouseleave="currentIndex = -1"
          >
            <a>
              <span class="text-white ml-[30px]">{{ item.name }}</span>
              <span class="text-white mr-[14px]">></span>
            </a>
            <div
              class="h-[460px] whitespace-pre shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px]"
              :class="{ hidden: currentIndex != index }"
            >
              <!-- 右边展示栏 -->
              <ul
                class="w-[225px] ml-[23px] h-full inline-block overflow-hidden"
                v-for=" ulElement of item.ulData"
                :key="ulElement.id"
              >
                <li
                  class="w-full h-[40px] py-[18px] box-content"
                  v-for="liElement of ulElement.liData"
                  :key="liElement.id"
                >
                  <!-- 图片盒子 -->
                  <a
                    href="javascript:;"
                    :data-elementId="liElement.id"
                    :data-elementName="liElement.text"
                    class="w-full h-[40px] flex items-center gap-[22px]"
                  >
                    <img class="w-[40px] h-[40px] object-cover" :src="liElement.img" alt />
                    <span class="text-[14px] font-bold hover:text-[#ff6700]">{{ liElement.text }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-16 leading-[4rem] bg-green-400 relative text-center">
      <input
        type="text"
        name
        id
        class="border-cyan-300 border-2 text-teal-300 absolute top-1/2 left1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <i
        class="ri-search-line text-[4.5vw] sm:text-[1vw] absolute left-[64%] sm:left-[54%] cursor-pointer"
      ></i>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
import { mapState } from "vuex"
export default {
  name: 'HelloWorld',
  data() {
    return {
      currentIndex: 1,
    }
  },
  methods: {
    moveIn: throttle(function (index) {
      this.currentIndex = index
    }, 20, { 'trailing': false }),
    toSearch(event) {
      let targetNode = event.target.parentNode;
      let data = targetNode.dataset
      let {elementid,elementname} = data
      if (elementname) {
        let location = {
          name:'search'
        }
        let query = {
          elementId:elementid,
          elementName:elementname,
        }
        location.query = query
        //传递目标路由组件不能时懒加载路由组件 路由组件名也必须相同
        this.$router.push(location)
      }
    }
  },
  computed:{
    ...mapState({
      xiaoMiData:state => state.xiaoMi.xiaoMiData
    })
  },
  mounted() {
    this.$store.dispatch('getXiaoMiData')
  },
}

</script>

<style scoped>
#product > li > a {
  /* background-color: 696565; */
  flex-grow: 1;
  width: 100%;
  color: black;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 42px;
  /* position: relative; */
}
#product > li:hover {
  background-color: #ff6700;
}
</style>