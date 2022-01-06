<template>
  <div class="w-screen h-[460px]">
    <!-- 小米商城列表 -->
    <div class="w-[1226px] h-[460px] mx-auto">
      <ul
        class="w-[234px] h-[460px] py-[20px] bg-[#696565] flex justify-between items-end flex-col cursor-pointer relative"
        id="product"
      >
        <li class="group">
          <span class="text-white ml-[30px]">手机</span>
          <span class="text-white mr-[14px]">></span>
          <div
            class="h-[460px] whitespace-pre shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px] hidden group-hover:block"
          >
            <!-- 手机 -->
            <ul
              class="w-[225px] ml-[23px] h-full inline-block"
              v-for="(item,index) of iphone"
              :key="index"
            >
              <li
                class="w-full h-[40px] py-[18px] box-content flex items-center gap-[12px]"
                v-for="(element) of item"
                :key="element.text"
              >
                <div class="w-[40px] h-[40px] inline-block">
                  <img class="w-[40px] h-[40px] object-cover" :src="element.img" alt />
                </div>
                <span class="text-[14px] font-bold hover:text-[#ff6700]">{{ element.text }}</span>
              </li>
            </ul>
          </div>
        </li>
        <li class="group">
          <span class="text-white ml-[30px]">电视</span>
          <span class="text-white mr-[14px]">></span>
          <div
            class="h-[460px] whitespace-pre shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px] hidden group-hover:block"
          >
            <!-- 电视机 -->
            <ul
              class="w-[225px] ml-[23px] h-full inline-block"
              v-for="(item,index) of watchTv"
              :key="index"
            >
              <li
                class="w-full h-[40px] py-[18px] box-content flex items-center gap-[12px]"
                v-for="(element) of item"
                :key="element.text"
              >
                <div class="w-[40px] h-[40px] inline-block">
                  <img class="w-[40px] h-[40px] object-cover" :src="element.img" alt />
                </div>
                <span class="text-[14px] font-bold hover:text-[#ff6700]">{{ element.text }}</span>
              </li>
            </ul>
          </div>
        </li>
        <li class="group">
          <span class="text-white ml-[30px]">笔记本 平板</span>
          <span class="text-white mr-[14px]">></span>
          <div
            class="h-[460px] whitespace-nowrap  shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px] hidden group-hover:block"
          >
            <!-- 笔记本 -->
            <ul
              class="w-[225px] ml-[23px] h-full inline-block  align-top"
              v-for="(item,index) of notebook"
              :key="index"
            >
              <li
                class="w-full h-[40px] py-[18px] box-content flex items-center gap-[12px]"
                v-for="(element) of item"
                :key="element.text"
              >
                <div class="w-[40px] h-[40px] inline-block">
                  <img class="w-[40px] h-[40px] object-cover" :src="element.img" alt />
                </div>
                <span class="text-[14px] font-bold hover:text-[#ff6700]">{{ element.text }}</span>
              </li>
            </ul>
          </div>
        </li>
        <li class="group">
          <span class="text-white ml-[30px]">出行 穿戴</span>
          <span class="text-white mr-[14px]">></span>
          <div
            class="h-[460px] whitespace-nowrap  shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px] hidden group-hover:block"
          >
            <!-- 笔记本 -->
            <ul
              class="w-[225px] ml-[23px] h-full inline-block  align-top"
              v-for="(item,index) of runTest"
              :key="index"
            >
              <li
                class="w-full h-[40px] py-[18px] box-content flex items-center gap-[12px]"
                v-for="(element) of item"
                :key="element.text"
              >
                <div class="w-[40px] h-[40px] inline-block">
                  <img class="w-[40px] h-[40px] object-cover" :src="element.img" alt />
                </div>
                <span class="text-[14px] font-bold hover:text-[#ff6700]">{{ element.text }}</span>
              </li>
            </ul>
          </div>
        </li>
        <li class="group">
          <span class="text-white ml-[30px]">智能 路由器</span>
          <span class="text-white mr-[14px]">></span>
          <div
            class="w-[992px] h-[460px] bg-white shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px] hidden group-hover:block"
          ></div>
        </li>
        <li class="group">
          <span class="text-white ml-[30px]">电源 配件</span>
          <span class="text-white mr-[14px]">></span>
          <div
            class="w-[992px] h-[460px] bg-white shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px] hidden group-hover:block"
          ></div>
        </li>
        <li class="group">
          <span class="text-white ml-[30px]">健康 儿童</span>
          <span class="text-white mr-[14px]">></span>
          <div
            class="w-[992px] h-[460px] bg-white shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px] hidden group-hover:block"
          ></div>
        </li>
        <li class="group">
          <span class="text-white ml-[30px]">耳机 音箱</span>
          <span class="text-white mr-[14px]">></span>
          <div
            class="w-[992px] h-[460px] bg-white shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px] hidden group-hover:block"
          ></div>
        </li>
        <li class="group">
          <span class="text-white ml-[30px]">生活 箱包</span>
          <span class="text-white mr-[14px]">></span>
          <div
            class="w-[992px] h-[460px] bg-white shadow-xl border-[1px] border-solid border-black/10 absolute top-0 left-[234px] hidden group-hover:block"
          ></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      iphone: [
        [
          { text: 'Xiaomi 12 Pro', img: new URL(`../assets/img/ia_100004070.png`, import.meta.url).href },
          { text: 'Xiaomi 12', img: new URL(`../assets/img/ia_100004071.png`, import.meta.url).href },
          { text: 'Xiaomi 12X', img: new URL(`../assets/img/ia_100004072.png`, import.meta.url).href },
          { text: 'Xiaomi 11 青春活力版', img: new URL(`../assets/img/ia_100004073.png`, import.meta.url).href },
          { text: 'Note 11 Pro 系列', img: new URL(`../assets/img/ia_100004074.png`, import.meta.url).href },
          { text: 'Note 11 4G', img: new URL(`../assets/img/ia_100004074.png`, import.meta.url).href }
        ],
        [
          { text: 'Note 11 5G', img: new URL(`../assets/img/ia_100004076.png`, import.meta.url).href },
          { text: 'Redmi K40', img: new URL(`../assets/img/ia_100004077.png`, import.meta.url).href },
          { text: 'Xiaomi Civi', img: new URL(`../assets/img/ia_100004078.png`, import.meta.url).href },
          { text: 'Xiaomi MIX 4', img: new URL(`../assets/img/ia_100004079.png`, import.meta.url).href },
          { text: 'Xiaomi MIX FOLD', img: new URL(`../assets/img/ia_100004080.png`, import.meta.url).href },
          { text: 'Xiaomi 11 Ultra', img: new URL(`../assets/img/ia_100004080.png`, import.meta.url).href }
        ],
        [
          { text: 'Xiaomi 11 Pro', img: new URL(`../assets/img/ia_100004082.png`, import.meta.url).href },
          { text: 'Xiaomi 11', img: new URL(`../assets/img/ia_100004083.png`, import.meta.url).href },
          { text: 'Xiaomi 10S', img: new URL(`../assets/img/ia_100004084.png`, import.meta.url).href },
          { text: 'K40 游戏增强版', img: new URL(`../assets/img/ia_100004085.png`, import.meta.url).href },
          { text: 'K40 Pro 系列', img: new URL(`../assets/img/ia_100004086.png`, import.meta.url).href },
          { text: 'Note 10 5G', img: new URL(`../assets/img/ia_100004086.png`, import.meta.url).href }
        ],
        [
          { text: 'Note 10 Pro', img: new URL(`../assets/img/ia_100004088.png`, import.meta.url).href },
          { text: 'Redmi 9A', img: new URL(`../assets/img/ia_100004089.jpg`, import.meta.url).href },
          { text: 'Xiaomi 11 青春', img: new URL(`../assets/img/ia_100004090.png`, import.meta.url).href },
          { text: '黑鲨4S Pro', img: new URL(`../assets/img/ia_100004093.png`, import.meta.url).href },
          { text: '黑鲨4S', img: new URL(`../assets/img/ia_100004070.png`, import.meta.url).href },
          { text: 'Redmi Note 9 4G', img: new URL(`../assets/img/ia_100004071.png`, import.meta.url).href }
        ]
      ],
      watchTv: [
        [
          { text: 'Xiaomi 12 Pro', img: new URL(`../assets/img/ia_100004070.png`, import.meta.url).href },
          { text: 'Xiaomi 12', img: new URL(`../assets/img/ia_100004071.png`, import.meta.url).href },
          { text: 'Xiaomi 12X', img: new URL(`../assets/img/ia_100004072.png`, import.meta.url).href },
          { text: 'Xiaomi 11 青春活力版', img: new URL(`../assets/img/ia_100004073.png`, import.meta.url).href },
          { text: 'Note 11 Pro 系列', img: new URL(`../assets/img/ia_100004074.png`, import.meta.url).href },
          { text: 'Note 11 4G', img: new URL(`../assets/img/ia_100004074.png`, import.meta.url).href }
        ],
        [
          { text: 'Note 11 5G', img: new URL(`../assets/img/ia_100004076.png`, import.meta.url).href },
          { text: 'Redmi K40', img: new URL(`../assets/img/ia_100004077.png`, import.meta.url).href },
          { text: 'Xiaomi Civi', img: new URL(`../assets/img/ia_100004078.png`, import.meta.url).href },
          { text: 'Xiaomi MIX 4', img: new URL(`../assets/img/ia_100004079.png`, import.meta.url).href },
          { text: 'Xiaomi MIX FOLD', img: new URL(`../assets/img/ia_100004080.png`, import.meta.url).href },
          { text: 'Xiaomi 11 Ultra', img: new URL(`../assets/img/ia_100004080.png`, import.meta.url).href }
        ],
        [
          { text: 'Xiaomi 11 Pro', img: new URL(`../assets/img/ia_100004082.png`, import.meta.url).href },
          { text: 'Xiaomi 11', img: new URL(`../assets/img/ia_100004083.png`, import.meta.url).href },
          { text: 'Xiaomi 10S', img: new URL(`../assets/img/ia_100004084.png`, import.meta.url).href },
          { text: 'K40 游戏增强版', img: new URL(`../assets/img/ia_100004085.png`, import.meta.url).href },
          { text: 'K40 Pro 系列', img: new URL(`../assets/img/ia_100004086.png`, import.meta.url).href },
          { text: 'Note 10 5G', img: new URL(`../assets/img/ia_100004086.png`, import.meta.url).href }
        ]
      ],
      notebook: [
        [
          { text: 'Xiaomi 12 Pro', img: new URL(`../assets/img/ia_100004070.png`, import.meta.url).href },
          { text: 'Xiaomi 12', img: new URL(`../assets/img/ia_100004071.png`, import.meta.url).href },
          { text: 'Xiaomi 12X', img: new URL(`../assets/img/ia_100004072.png`, import.meta.url).href },
          { text: 'Xiaomi 11 青春活力版', img: new URL(`../assets/img/ia_100004073.png`, import.meta.url).href },
          { text: 'Note 11 Pro 系列', img: new URL(`../assets/img/ia_100004074.png`, import.meta.url).href },
          { text: 'Note 11 4G', img: new URL(`../assets/img/ia_100004074.png`, import.meta.url).href }
        ],
        [
          { text: 'Note 11 5G', img: new URL(`../assets/img/ia_100004076.png`, import.meta.url).href },
          { text: 'Redmi K40', img: new URL(`../assets/img/ia_100004077.png`, import.meta.url).href },
          { text: 'Xiaomi Civi', img: new URL(`../assets/img/ia_100004078.png`, import.meta.url).href },
          { text: 'Xiaomi MIX 4', img: new URL(`../assets/img/ia_100004079.png`, import.meta.url).href },
          { text: 'Xiaomi MIX FOLD', img: new URL(`../assets/img/ia_100004080.png`, import.meta.url).href },
          { text: 'Xiaomi 11 Ultra', img: new URL(`../assets/img/ia_100004080.png`, import.meta.url).href }
        ]
      ],
      runTest: [
        [
          { text: 'Xiaomi 12 Pro', img: new URL(`../assets/img/ia_100004070.png`, import.meta.url).href },
          { text: 'Xiaomi 12', img: new URL(`../assets/img/ia_100004071.png`, import.meta.url).href },
          { text: 'Xiaomi 12X', img: new URL(`../assets/img/ia_100004072.png`, import.meta.url).href },
          { text: 'Xiaomi 11 青春活力版', img: new URL(`../assets/img/ia_100004073.png`, import.meta.url).href },
          { text: 'Note 11 Pro 系列', img: new URL(`../assets/img/ia_100004074.png`, import.meta.url).href },
          { text: 'Note 11 4G', img: new URL(`../assets/img/ia_100004074.png`, import.meta.url).href }
        ],
        [
          { text: 'Note 11 5G', img: new URL(`../assets/img/ia_100004076.png`, import.meta.url).href },
          { text: 'Redmi K40', img: new URL(`../assets/img/ia_100004077.png`, import.meta.url).href },
          { text: 'Xiaomi Civi', img: new URL(`../assets/img/ia_100004078.png`, import.meta.url).href },
        ]
      ],
    }
  },
}
  // 解析地址栏
  // let paramsObj = {};
  // location.search.slice(1).split('&').forEach(item => paramsObj[item.split('=')[0]] = item.split('='[1]))

</script>

<style scoped>
#product > li {
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