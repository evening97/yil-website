<template>
    <div class=" h-screen w-screen flex justify-center items-center min-h-screen">
        <div class="relative flex gap-4">
            <span class="relative w-[50px] h-[50px] gap-4 rounded-[50%] bg-[#eaeef0]" style="--i:0"></span>
            <span class="relative w-[50px] h-[50px] gap-4 rounded-[50%] bg-[#eaeef0]" style="--i:1"></span>
            <span class="relative w-[50px] h-[50px] gap-4 rounded-[50%] bg-[#eaeef0]" style="--i:2"></span>
            <span class="relative w-[50px] h-[50px] gap-4 rounded-[50%] bg-[#eaeef0]" style="--i:3"></span>
            <span class="relative w-[50px] h-[50px] gap-4 rounded-[50%] bg-[#eaeef0]" style="--i:4"></span>
            <span class="relative w-[50px] h-[50px] gap-4 rounded-[50%] bg-[#eaeef0]" style="--i:5"></span>
            <span class="relative w-[50px] h-[50px] gap-4 rounded-[50%] bg-[#eaeef0]" style="--i:6"></span>
            <span class="relative w-[50px] h-[50px] gap-4 rounded-[50%] bg-[#eaeef0]" style="--i:7"></span>
            <span class="relative w-[50px] h-[50px] gap-4 rounded-[50%] bg-[#eaeef0]" style="--i:8"></span>
        </div>
    </div>
</template>

<script>
export default {
    name:"Animation_loading",
}
</script>

<style lang="postcss" scoped>
    span{
        box-shadow: -8px -8px 15px rgba(255,255,255,1),
                    8px 8px 15px rgba(0,0,0,0.2),
                    inset 3px 3px 5px rgba(0,0,0,.1),
                    inset -1px -1px 5px rgba(255,255,255,1);
        border:6px solid #eaeef0;
    }
    span::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: aquamarine;
        top:0;
        left:0;
        border-radius: 50%;
        @apply animate-loading scale-0;
        border-top-color:inset 3px 3px 5px rgba(0,0,0,.1),
                        inset -1px -1px 5px rgba(255,255,255,1);
        animation-delay: calc(var(--i)*0.2s);
    }
</style>