<template>
  <v-form>
    <v-container>
      <v-card-text>Thêm Mới</v-card-text>
      <v-row>
        <v-col cols="12" align-self="auto">
          <span>Mã Khách Hàng: *</span>
          <v-text-field
            label="Nhập mã khách hàng..."
            required
            v-model="Makh"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-col cols="12">
            <span>Tên Khách Hàng: *</span>
            <v-text-field
              label="Nhập tên khách hàng..."
              required
              v-model="Tenkh"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <span>Số Điện Thoại:</span>
            <v-text-field
              label="Nhập số điện thoại..."
              required
              v-model="Sdt"
            ></v-text-field>
          </v-col>
        </v-col>
        <v-col cols="6">
          <v-col cols="12">
            <span>Địa chỉ:</span>
            <v-text-field
              label="Nhập địa chỉ..."
              required
              v-model="Diachi"
            ></v-text-field>
          </v-col>
        </v-col>
      </v-row>
      <v-btn @click="conFirm">Confirm</v-btn>
      <v-btn @click="dialogOff()">Back</v-btn>
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
      Makh: null,
      Tenkh: "",
      Sdt: null,
      Diachi: "",
    };
  },
  components: {
    info,
  },
  methods: {
    async getData() {
      try {
        await HTTP.get(
          `http://localhost:3000/khachhang`,
        ).then((response) => (this.items = response.data.result));
        console.log(this.items);
      } catch (e) {
        console.log(e);
      }
    },
    async conFirm() {
      const response = await axios.post(
        "http://localhost:3000/khachhang",
        {
          Makh: this.Makh,
          Tenkh: this.Tenkh,
          Sdt: this.Sdt,
          Diachi: this.Diachi,
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
</style>