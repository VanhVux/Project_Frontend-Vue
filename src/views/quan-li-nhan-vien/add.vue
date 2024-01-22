<template>
  <v-form>
    <v-container>
      <v-card-text>Thêm Mới</v-card-text>
      <v-row>
        <v-col cols="12" align-self="auto">
          <span>Mã Nhân Viên: *</span>
          <v-text-field
            label="Nhập mã nhân viên..."
            required
            v-model="Manv"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-col cols="12">
            <span>Tên nhân viên</span>
            <v-text-field
              label="Nhập..."
              required
              v-model="Tennv"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <span>Số điện thoại</span>
            <v-text-field
              label="Nhập..."
              required
              v-model="Sdt"
            ></v-text-field>
          </v-col>
        </v-col>
        <v-col cols="6">
          <v-col cols="12">
            <span>Giới Tính</span>
            <v-text-field
              label="Nhập..."
              required
              v-model="Gioitinh"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <span>Quê Quán</span>
            <v-text-field label="Nhập quê quán" v-model="Quequan">
            </v-text-field>
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
      Manv: null,
      Tennv: "",
      Gioitinh: "",
      Quequan: "",
      Sdt: null
    };
  },
  components: {
    info,
  },
  methods: {
    addtb() {
      this.array.push("");
    },
    async getData() {
      try {
        await HTTP.get(
          `http://localhost:3000/nhanvien`,
          {
            data: {},
          }
        ).then((response) => (this.items = response.data.content));
        console.log(this.items);
      } catch (e) {
        console.log(e);
      }
    },
    async conFirm() {
      const response = await axios.post(
        "http://localhost:3000/nhanvien",
        {
          Manv: this.Manv,
          Tennv: this.Tennv,
          Gioitinh: this.Gioitinh,
          Quequan: this.Quequan,
          Sdt: this.Sdt,
        },
      );
      this.dialogOff();
      console.log(this.selected);
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