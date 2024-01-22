<template>
  <v-form>
    <div class="head">
      <v-card-text>Sửa thông tin nhà trọ</v-card-text
      ><button @click="dialogOff()"><v-icon>mdi-close</v-icon></button>
    </div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <span>Tên Chủ Nhà: *</span>
          <v-text-field
            label="Nhập..."
            required
            v-model="item.TenChuNha"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <span>Số Điện Thoại: *</span>
          <v-text-field
            label="Nhập..."
            required
            v-model="item.SoDienThoai"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <span>Địa chỉ: *</span>
          <v-text-field
            label="Nhập..."
            required
            v-model="item.DiaChi"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <span>Số lượng phòng:</span>
          <v-text-field
            label="Nhập..."
            required
            v-model="item.SoLuongPhong"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="close" @click="dialogOff()"
        ><v-icon>mdi-close</v-icon>Thoát</v-btn
      >
      <v-btn @click="conFirm"><v-icon>mdi-file-document-plus-outline</v-icon>Cập Nhật</v-btn>
    </v-container>
  </v-form>
</template>
<script>
import axios from "axios";
export default {
  name: "add",
  data() {
    return {
    };
  },
  props: {
    item: Object
  },
  methods: {
    async getData() {
      try {
        await HTTP.get(
          `http://119.17.200.66:8373/v1/datasharing/nhatro/${this.item.PrimKey}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
            data: {},
          }
        ).then((response) => (this.selectedItem = response.data.content));
        console.log(this.selectedItem);
      } catch (e) {
        console.log(e);
      }
    },
    async conFirm() {
      const response = await axios.post(
        "http://119.17.200.66:8373/v1/datasharing/nhatro" + this.item.PrimKey,
        {
          TenChuNha: this.item.TenChuNha,
          SoDienThoai: this.item.SoDienThoai,
          DiaChi: this.item.DiaChi,
          SoLuongPhong: this.item.SoLuongPhong,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
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