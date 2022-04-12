<template>
  <div class="layout-box">
    <router-view></router-view>
    <!-- tabbar部分 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/index">
        <i slot="icon" class="iconfont icon-shouye"></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i slot="icon" class="iconfont icon-wenda"></i>
        <span>问答</span>
      </van-tabbar-item>
      <van-tabbar-item to="/shipin">
        <i slot="icon" class="iconfont icon-shipin"></i>
        <span>视频</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="iconfont icon-wode"></i>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less">
.layout-box{
  .iconfont{
    font-size: 40px;
  }
  span{
    color: #666666;
    font-size: 20px;
  }
}
</style>