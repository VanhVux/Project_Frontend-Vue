<template>
  <div class="wrapper">
    <div class="top">
      <img :src="require(`@/assets/logo.png`)" alt="logo.png" />
      <span class="title">HỆ THỐNG QUẢN LÝ</span>
      <span>Cửa Hàng Bán Cà Phê</span>
    </div>
    <v-form @submit.prevent="login">
      <h3 class="dn-text">ĐĂNG NHẬP</h3>
      <hr />
      <div class="form-group">
        <label>Tên Đăng Nhập</label>
        <v-text-field
          v-model="username"
          flat
          clearable
          prepend-inner-icon="mdi-email"
          color="black"
          label="Nhập tên đăng nhập"
        ></v-text-field>
      </div>

      <div class="form-group">
        <label>Mật Khẩu</label>
        <v-text-field
          v-model="password"
          clearable
          prepend-inner-icon="mdi-lock"
          color="black"
          label="Nhập mật khẩu"
          :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append-inner="show = !show"
        ></v-text-field>
      </div>
      <v-btn class="mb-4 bg-blue" @click="login">Đăng Nhập</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      username: "vanh      ",
      password: "123       ",
    };
  },
  methods: {
    async login() {
      try {
        const trimmedUsername = this.username.trim();
        const trimmedPassword = this.password.trim();
        const response = await axios.get(
          "http://localhost:3000/login",
          
          {
            username: trimmedUsername,
            password: trimmedPassword,
          },
        );
        if (response.data.result && response.data.result.length > 0 &&
          response.data.result[0].username === this.username &&
          response.data.result[0].password === this.password) {
          this.$router.push("/quanlikhachhang");
        } else {
      console.log("Login failed!", response);
    }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: 100% 100%;
  padding-bottom: 9%;
  width: 100%;
}
.wrapper img {
  width: 80px;
  margin: auto;
}
.top {
  display: flex;
  flex-direction: column;
  padding-top: 9%;
}
.top span {
  color: black;
  font-family: "Times New Roman";
}
.title {
  font-size: 22px;
}
.dn-text {
  color: black;
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: "Times New Roman";
}
.v-form {
  width: 300px;
  margin-top: 2%;
  border: solid 2px;
  border-color: black;
  border-radius: 15px;
}
.form-group {
  margin: 10%;
  font-family: "Times New Roman";
}
.form-group label {
  color: black;
}
</style>