<template>
  <div class="login-box">
    <!-- 头部 -->
    <van-nav-bar title="登录" class="navBar"> 
      <van-icon name="cross" slot="left" @click="$router.back()"/>
    </van-nav-bar>
    <!-- form表单 -->
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field
        v-model="userinfo.mobile"
        name="用户名"
        placeholder="请输入手机号"
        :rules="userinfoRules.mobile"
        maxlength="11"
        type="number"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field
        v-model="userinfo.code"
        type="password"
        name="密码"
        placeholder="请输入验证码"
        :rules="userinfoRules.code"
        maxlength="6"
      >
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-count-down :time="time" format="ss 秒" v-if="showcountdown" />
          <van-button
            v-else
            size="small"
            type="primary"
            round
            class="code"
            @click="sendCode"
            native-type="button"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button
          block
          type="info"
          native-type="submit"
          class="loginbtn"
          @click="loginbtn"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userinfo: {
        mobile: "18200152794",
        code: "246810",
      },
      //倒计时时间设定以及是否展示
      time: 1000 * 60,
      showcountdown: false,
      // 表单验证规则
      userinfoRules: {
        mobile: [
          { required: true, message: "手机号不能为空" },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: "手机格式错误" },
        ],
        code: [
          { required: true, message: "验证码不能为空" },
          { pattern: /^\d{6}$/, message: "验证码格式错误" },
        ],
      },
    };
  },
  methods: {
    async onSubmit() {
      // 1.获取表单数据
      const userinfo = this.userinfo;
      // 2.表单验证
      // 3.提交表单请求登录
      this.$toast.loading({
        message: "登录中...",
        forbidClick: true, // 禁用背景点击
        duration: 0, // 持续时间，默认 2000，0 表示持续展示不关闭
      });
      try {
        const res = await login(userinfo);
        console.log("登录成功", res);
        this.$toast.success("登录成功");
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail("手机号或验证码错误");
        } else {
          this.$toast.fail("登录失败，请稍后重试");
        }
      }
    },
    // 登录按钮功能
    async loginbtn() {
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: "登录中...", // 提示消息
      });
      try {
        const res =
          (await login(this.userinfo)) +
          // res.data.data => { token: 'xxx', refresh_token: 'xxx' }
          this.$store.commit("setUser", res.data.data);

        // 提示 success 或者 fail 的时候，会先把其它的 toast 先清除
        this.$toast.success("登录成功");
      } catch (err) {
        console.log("登录失败", err);
        this.$toast.fail("登录失败，手机号或验证码错误");
      }

      // 停止 loading，它会把当前页面中所有的 toast 都给清除
      // loginToast.clear()
    },
    // 验证手机号
    async sendCode() {
      // 1. 校验手机号
      try {
        await this.$refs.loginForm.validate("mobile");
      } catch (err) {
        return console.log("验证失败", err);
      }
      // 2. 验证通过，显示倒计时
      this.showcountdown = true;
      // 3. 请求发送验证码
      try {
        await sendSms(this.user.mobile);
        this.$toast("发送成功");
      } catch (err) {
        // 发送失败，关闭倒计时
        this.isCountDownShow = false;
        if (err.response.status === 429) {
          this.$toast("发送太频繁了，请稍后重试");
        } else {
          this.$toast("发送失败，请稍后重试");
        }
      }
    },
  },
};
</script>

<style lang="less">
.login-box {
  .iconfont {
    font-size: 37px;
  }
  .code {
    font-size: 22px;
    color: #666666;
    width: 152px;
    height: 46px;
    background-color: #ededed;
    border-radius: 23px;
    border: none;
  }
  .loginbtn {
    width: 694px;
    height: 88px;
    background-color: #6db4fb;
    border-radius: 10px;
    border: none;
  }
}
</style>