<template>
  <div class="wrapper">
    <v-dialog v-model="dialog" width="1024">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props"
          ><v-icon>mdi-plus-circle-outline</v-icon>Thêm Mới</v-btn
        >
      </template>
      <v-card>
        <additem v-on:handleDialog="handleDialog" />
      </v-card>
    </v-dialog>
    <div class="title-holder">
      <div class="title">Danh Sách Khách Hàng</div>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">STT</th>
          <th class="text-left">Mã Khách Hàng</th>
          <th class="text-left">Tên Khách Hàng</th>
          <th class="text-left">Số Điện Thoại</th>
          <th class="text-left">Địa Chỉ</th>
          <th class="text-left">Thao Tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.Makh }}</td>
          <td>{{ item.Tenkh }}</td>
          <td>
            {{item.Sdt}}
          </td>
          <td>{{ item.Diachi }}</td>
          <td>
            <v-dialog v-model="dialogEdit" width="1024">
              <template v-slot:activator="{ props }">
                <button v-bind="props"><v-icon>mdi-pencil</v-icon></button>
              </template>
              <v-card>
                <v-form>
                  <v-container>
                    <v-card-text>Cập Nhật Thông Tin</v-card-text>
                    <v-row>
                      <v-col cols="12" align-self="auto">
                        <span>Mã Khách Hàng: *</span>
                        <v-text-field
                          label="Nhập mã khách hàng..."
                          required
                          v-model="item.Makh"
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
                            v-model="item.Tenkh"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <span>Số Điện Thoại:</span>
                          <v-text-field
                            label="Nhập số điện thoại..."
                            required
                            v-model="item.Sdt"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <span>Địa Chỉ:</span>
                          <v-text-field
                            label="Nhập địa chỉ..."
                            required
                            v-model="item.Diachi"
                          ></v-text-field>
                        </v-col>
                      </v-col>
                    </v-row>
                    <v-btn @click="conFirm(item)">Confirm</v-btn>
                    <v-btn @click="dialogEdit = !dialogEdit">Back</v-btn>
                  </v-container>
                </v-form>
              </v-card>
            </v-dialog>
            <button class="delete" @click="deleteItem(item.Makh)">
              <v-icon>mdi-eraser</v-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script>
import { HTTP } from "../../axios";
import additem from "./add.vue";
import edititem from "./edit.vue";
export default {
  data() {
    return {
      items: [],
      dialog: false,
      dialogEdit: false,
      Makh: null,
      Tenkh: "",
      Sdt: null,
      Diachi: "",
    };
  },
  components: {
    additem,
    edititem,
  },
  methods: {
    handleDialog() {
      this.dialog = !this.dialog;
      this.getData();
    },
    async getData() {
      try {
        const response = await HTTP.get(
          `http://localhost:3000/khachhang`,
        ).then((response) => (this.items = response.data.result));
        console.log(response.data)
        console.log(this.items);
      } catch (e) {
        console.log(e);
      }
    },
    async deleteItem(Makh) {
      await HTTP.delete(
        `http://localhost:3000/khachhang/${Makh}`,
      ).then((response) => {
        console.log(response);
        this.getData();
      });
    },
    async conFirm(item) {
      const response = await HTTP.put(
        `http://localhost:3000/khachhang/${item.Makh}`,
        {
          Makh: item.Makh,
          Tenkh: item.Tenkh,
          Sdt: item.Sdt,
          Diachi: item.Diachi,
        },
      );
      console.log(response);
      this.dialogEdit = !this.dialogEdit;
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
.v-btn {
  text-transform: unset !important;
  background-color: #4267b2;
  color: white;
  margin-right: 2%;
}
.title-holder {
  width: 100%;
  border-bottom: 2px solid #4267b2;
}
.title {
  margin-top: 2%;
  color: white;
  padding-top: 5px;
  padding-left: 2%;
  padding-bottom: 5px;
  width: 23%;
  background: linear-gradient(-135deg, transparent 45px, #4267b2 0) top right;
}
.v-icon {
  margin-right: 2%;
}
.edit {
  margin-right: 5%;
}
</style>