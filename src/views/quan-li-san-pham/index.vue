<template>
  <div class="wrapper">
    <div class="temp">
      <v-dialog v-model="dialog" width="1024">
        <template v-slot:activator="{ props }">
          <v-btn class="add-btn" v-bind="props">
            <v-icon>mdi-plus-circle-outline </v-icon>Thêm Mới</v-btn
          >
        </template>
        <v-card>
          <additem v-on:handleDialog="handleDialog" />
        </v-card>
      </v-dialog>
    </div>
    <div class="title-holder">
      <div class="title">QUẢN LÝ SẢN PHẨM</div>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">STT</th>
          <th class="text-left">Mã Sản Phẩm</th>
          <th class="text-left">Tên Sản Phẩm</th>
          <th class="text-left">Thao Tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ item.Masp }}</td>
          <td>{{ item.Tensp }}</td>
          <td class="action">
            <v-dialog v-model="dialogEdit" width="1024">
              <template v-slot:activator="{ props }">
                <button v-bind="props">
                  <v-icon>mdi-pencil</v-icon>
                </button>
              </template>
              <v-card>
                <v-form>
                  <v-container>
                    <v-card-text>Cập Nhật Thông Tin</v-card-text>
                    <v-row>
                      <v-col cols="12" align-self="auto">
                        <span>Mã sản phẩm: *</span>
                        <v-text-field
                          label="Nhập mã sản phẩm..."
                          required
                          v-model="item.Masp"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" align-self="auto">
                        <span>Tên Sản Phẩm *</span>
                        <v-text-field
                          label="Nhập..."
                          required
                          v-model="item.Tensp"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-btn @click="conFirm(item)">Confirm</v-btn>
                    <v-btn @click="dialogEdit = !dialogEdit">Back</v-btn>
                  </v-container>
                </v-form>
              </v-card>
              
            </v-dialog>
            <button class="delete" @click="deleteItem(item.Masp)">
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
export default {
  data() {
    return {
      items: [],
      dialog: false,
      dialogEdit: false,
      Masp: null,
      Tensp: ""
    };
  },
  components: {
    additem,
  },
  methods: {
    handleDialog() {
      this.dialog = !this.dialog;
      this.getData();
    },

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
    async deleteItem(Masp) {
      await HTTP.delete(
        `http://localhost:3000/sanpham/${Masp}`,
        {
          data: {},
        }
      ).then((response) => {
        console.log(response);
        this.getData();
      });
    },
    async conFirm(item) {
      const response = await HTTP.put(
        `http://localhost:3000/sanpham/${item.Masp}`,
        {
          Masp : item.Masp,
          Tensp : item.Tensp
        },
        {

          data: {},
        }
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
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #4267b2;
}
.v-icon {
  margin-right: 2%;
}
.edit {
  margin-right: 5%;
}
.action button {
  margin-left: 2%;
}
.search-field {
  width: 40%;
  height: 10%;
  margin-right: 50%;
}
.temp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>