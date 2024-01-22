<template>
  <v-form>
    <div class="head">
      <v-card-text>Thêm mới sản phẩm</v-card-text
      ><button @click="dialogOff()"><v-icon>mdi-close</v-icon></button>
    </div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <span>Mã Sản Phẩm: *</span>
          <v-text-field
            label="Nhập..."
            required
            v-model="Masp"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <span>Tên Sản Phẩm *</span>
          <v-text-field
            label="Nhập..."
            required
            v-model="Tensp"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="close" @click="dialogOff()"
        ><v-icon>mdi-close</v-icon>Thoát</v-btn
      >
      <v-btn @click="conFirm"><v-icon>mdi-file-plus</v-icon>Thêm mới</v-btn>
    </v-container>
  </v-form>
</template>
<script>
import axios from "axios";
import info from "./index.vue";
export default {
  name: "add",
  data() {
    return {
      items: [],
      Masp: "",
      Tensp: "",
    };
  },
  components: {
    info,
  },
  methods: {
    async getData() {
      try {
        await HTTP.get(
          `http://localhost:3000/sanpham`,
          {
            data: {},
          }
        ).then((response) => (this.items = response.data.result));
        console.log(this.items);
      } catch (e) {
        console.log(e);
      }
    },
    async conFirm() {
      const response = await axios.post(
        "http://localhost:3000/sanpham",
        {
          Masp : this.Masp,
          Tensp : this.Tensp
        },
      );
      this.dialogOff();
      console.log(response);
    },
    dialogOff() {
      this.$emit("handleDialog");
    },
  },
};
</script>
<style scoped>
.v-btn {
  background-color: #4267b2;
  color: white;
  margin-right: 2%;
}
.v-card-text {
  margin-bottom: 2%;
}
.close {
  background-color: red;
}
.v-card-text {
  background-color: #4267b2;
  color: white;
  font-size: 18px;
}
.head {
  display: flex;
}
.head button {
  background-color: #4267b2;
  width: 5%;
  margin-bottom: 2%;
  color: white
}
.head button :hover{
  background-color: #5876b1;
}
</style>