<template>
  <v-app>
    <v-navigation-drawer app permanent clipped>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vanh Vũ </v-list-item-title>
          <v-list-item-subtitle> Quản Lý</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'Quản lý khách hàng', icon: 'mdi-account', link: '/quanlikhachhang' },
      { title: 'Quản lý nhân viên', icon: 'mdi-account-circle', link: '/quanlinhanvien' },
      { title: 'Quản lý sản phẩm', icon: 'mdi-coffee', link: '/quanlisanpham' },
    ],
  }),
  computed: {
    ...mapGetters(['user'])
  }
};
</script>