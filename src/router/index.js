import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/",
      component: () => import("@/views/Home"),
      children: [
        {
          name: "quanlikhachhang",
          path: "/quanlikhachhang",
          component: () => import("@/views/quan-li-khach-hang/index"),
          children: [
            {
              name: "add",
              path: "/add",
              component: () => import("@/views/quan-li-khach-hang/add"),
            },
            {
              name: "edit",
              path: "/edit/:Makh",
              component: () => import("@/views/quan-li-khach-hang/edit"),
            },
          ],
        },
        {
          name: "quanlinhanvien",
          path: "/quanlinhanvien",
          component: () => import("@/views/quan-li-nhan-vien/index"),
          children: [
            {
              name: "add",
              path: "/add",
              component: () => import("@/views/quan-li-nhan-vien/add"),
            },
            {
              name: "edit",
              path: "/edit/:Manv",
              component: () => import("@/views/quan-li-nhan-vien/edit"),
            },
          ],
        },
        {
          name: "quanlisanpham",
          path: "/quanlisanpham",
          component: () => import("@/views/quan-li-san-pham/index"),
          children: [
            {
              name: "add",
              path: "/add",
              component: () => import("@/views/quan-li-san-pham/add"),
            },
            {
              name: "edit",
              path: "/edit/:Masp",
              component: () => import("@/views/quan-li-san-pham/edit"),
            },
          ],
        },
      ],
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/login/index"),
    },
    
  ],
});
