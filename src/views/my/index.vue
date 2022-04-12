<template>
  <div class="my-box">
    <div class="header not-login" @click="$router.push('/login')">
      <img src="~@/assets/mobile.png" class="mobile-img" />
      <div class="tips">登录 / 注册</div>
    </div>
    <!-- 已经登录头部 -->
    <div class="header login">
      <div class="info">
        <div class="left">
          <van-image
            class="head-img"
            round
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span>黑马头条号</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data">
        <div class="item">
          <span class="item-num">8</span>
          <span class="item-text">头条</span>
        </div>
        <div class="item">
          <span class="item-num">66</span>
          <span class="item-text">关注</span>
        </div>
        <div class="item">
          <span class="item-num">88</span>
          <span class="item-text">粉丝</span>
        </div>
        <div class="item">
          <span class="item-num">88</span>
          <span class="item-text">获赞</span>
        </div>
      </div>
    </div>
    <!-- 收藏历史 -->
    <van-grid :column-num="2" class="grid-box" clickable>
      <van-grid-item>
        <i slot="icon" class="iconfont icon-shoucang"></i>
        <span slot="text" class="grid-text">收藏</span>
      </van-grid-item>
      <van-grid-item>
        <i slot="icon" class="iconfont icon-lishi"></i>
        <span slot="text" class="grid-text">历史</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "my",
};
</script>

<style lang="less">
.my-box {
  .header.not-login {
    background: url("~@/assets/banner.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .mobile-img {
      width: 132px;
      height: 132px;
    }
    .tips {
      font-size: 28px;
      color: #fff;
      margin-top: 15px;
    }
  }
}
.header.login {
  background: url("~@/assets/banner.png");
  background-size: cover;
  padding: 0 30px;
  .info {
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .head-img {
        width: 132px;
        height: 132px;
        background-color: #ccc;
        border: 4px solid #fff;
      }
      span {
        font-size: 30px;
        color: #fff;
        margin-left: 24px;
      }
    }
    .right {
      .van-button {
        width: 116px;
        height: 33px;
        background-color: #ffffff;
        border-radius: 16px;
        border: 0;
       
      }
    }
  }
  .data {
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      flex: 1;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      .item-num {
        font-size: 36px;
        color: #fff;
      }
      .item-text {
        font-size: 23px;
        margin-top: 10px;
        display: inline-block;
        color: #fff;
      }
    }
  }
}
.grid-box {
  .iconfont {
    font-size: 45px;
  }
  .icon-shoucang {
    color: #eb5253;
  }
  .icon-lishi {
    color: #ff9d1d;
  }
  .grid-text {
    font-size: 28px;
    color: #333;
    margin-top: 5px;
  }
}
</style>