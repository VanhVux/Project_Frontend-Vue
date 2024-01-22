<template>
  <v-form>
    <v-container>
      <v-card-text>Cập Nhật Thông Tin</v-card-text>
      <v-row>
        <v-col cols="12" align-self="auto">
          <span>Mã Chuyên Mục: *</span>
          <v-text-field label="Nhập mã chuyên mục..." required v-model="MaChuyenMuc"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-col cols="12">
            <span>Tên Chuyên Mục: *</span>
            <v-text-field label="Nhập tên chuyên mục..." required v-model="TenChuyenMuc"></v-text-field>
          </v-col>
          <v-col cols="12">
            <span>Số Thứ Tự:</span>
            <v-text-field label="Nhập số thứ tự..." required v-model="SoThuTu"></v-text-field>
          </v-col>
          <v-col cols="12">
            <span>Chuyên Mục Cha:</span>
            <v-text-field label="Chọn" required v-model="MaChuyenMucCha"></v-text-field>
          </v-col>
        </v-col>
        <v-col cols="6">
          <v-col cols="12">
            <span>Tên Tiếng Anh:</span>
            <v-text-field label="Nhập tên tiếng anh..." required v-model="TenTiengAnh"></v-text-field>
          </v-col>
          <v-col cols="12">
            <span>Nhóm quyền:</span>
            <v-text-field label="Chọn" required v-model="TenNhomQuyen"></v-text-field>
          </v-col>
          <v-col cols="12">
            <span>Tình trạng:</span>
            <v-text-field label="Chọn" required v-model="TinhTrang"></v-text-field>
          </v-col>
        </v-col>
      </v-row>
      <v-btn @click="conFirm">Confirm</v-btn>
      <v-btn to="/crud">Back</v-btn>
    </v-container>
  </v-form>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: [],
      // ChuyenMucChaList:[],
      // NhomQuyenList:[],
      // TinhTrangList: [],
      MaChuyenMuc: null,
      TenChuyenMuc: "",
      SoThuTu: null,
      MaChuyenMucCha:"",
      TenTiengAnh: "",
      TenNhomQuyen: "",
      TinhTrang: ""
    };
  },
  methods: {
    async conFirm() {
      const response = await axios.post(
        `http://119.17.200.66:8373/v1/datasharing/chuyenmuctintuc/${localStorage.getItem("PrimKey")}`,
        {
          MaChuyenMuc: this.MaChuyenMuc,
          TenChuyenMuc: this.TenChuyenMuc,
          SoThuTu: this.SoThuTu,
          MaChuyenMucCha: this.MaChuyenMucCha,
          TenTiengAnh: this.TenTiengAnh,
          TenNhomQuyen: this.TenNhomQuyen,
          TinhTrang: this.TinhTrang
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          },
          data: {}
        }
        );
      console.log(response);
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