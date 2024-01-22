<template>
  <v-app>
    <v-navigation-drawer>
      <side-bar />
    </v-navigation-drawer>
    <v-main>
      <app-bar />
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <my-footer />
  </v-app>
</template>
<script>
import MyFooter from "@/components/MyFooter.vue";
import SideBar from "@/components/SideBar.vue";
import AppBar from "@/components/AppBar.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { MyFooter, SideBar, AppBar },
};
</script>
<style scoped>
</style>