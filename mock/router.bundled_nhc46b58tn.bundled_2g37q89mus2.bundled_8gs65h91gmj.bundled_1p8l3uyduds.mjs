// mock/router.bundled_nhc46b58tn.bundled_2g37q89mus2.bundled_8gs65h91gmj.mjs
var url = "/menus/routes";
var method = "get";
var data = {
  code: 200,
  data: [
    {
      path: "/system",
      component: "Layout",
      redirect: "/system/user",
      meta: {
        title: "\u7CFB\u7EDF\u7BA1\u7406",
        icon: "system",
        hidden: false,
        roles: ["ADMIN"],
        keepAlive: true
      },
      children: [
        {
          path: "user",
          component: "system/user/index",
          name: "User",
          meta: {
            title: "\u7528\u6237\u7BA1\u7406",
            icon: "user",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "role",
          component: "system/role/index",
          name: "Role",
          meta: {
            title: "\u89D2\u8272\u7BA1\u7406",
            icon: "role",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "menu",
          component: "system/menu/index",
          name: "Menu",
          meta: {
            title: "\u83DC\u5355\u7BA1\u7406",
            icon: "menu",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "dept",
          component: "system/dept/index",
          name: "Dept",
          meta: {
            title: "\u90E8\u95E8\u7BA1\u7406",
            icon: "tree",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "dict",
          component: "system/dict/index",
          name: "DictType",
          meta: {
            title: "\u5B57\u5178\u7BA1\u7406",
            icon: "dict",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        }
      ]
    },
    {
      path: "/api",
      component: "Layout",
      meta: {
        title: "\u63A5\u53E3",
        icon: "api",
        hidden: false,
        roles: ["ADMIN"],
        keepAlive: true
      },
      children: [
        {
          path: "apidoc",
          component: "demo/api-doc",
          name: "Apidoc",
          meta: {
            title: "\u63A5\u53E3\u6587\u6863",
            icon: "api",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: false
          }
        }
      ]
    },
    {
      path: "/external-link",
      component: "Layout",
      redirect: "noredirect",
      meta: {
        title: "\u5916\u90E8\u94FE\u63A5",
        icon: "link",
        hidden: false,
        roles: ["ADMIN"],
        keepAlive: true
      },
      children: [
        {
          path: "https://juejin.cn/post/7228990409909108793",
          meta: {
            title: "document",
            icon: "document",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        }
      ]
    },
    {
      path: "/multi-level",
      component: "Layout",
      redirect: "/multi-level/multi-level1",
      meta: {
        title: "\u591A\u7EA7\u83DC\u5355",
        icon: "multi_level",
        hidden: false,
        roles: ["ADMIN"],
        keepAlive: true
      },
      children: [
        {
          path: "multi-level1",
          component: "demo/multi-level/level1",
          redirect: "/multi-level/multi-level2",
          meta: {
            title: "\u83DC\u5355\u4E00\u7EA7",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          },
          children: [
            {
              path: "multi-level2",
              component: "demo/multi-level/children/level2",
              redirect: "/multi-level/multi-level2/multi-level3-1",
              meta: {
                title: "\u83DC\u5355\u4E8C\u7EA7",
                icon: "",
                hidden: false,
                roles: ["ADMIN"],
                keepAlive: true
              },
              children: [
                {
                  path: "multi-level3-1",
                  component: "demo/multi-level/children/children/level3-1",
                  name: "MultiLevel31",
                  meta: {
                    title: "\u83DC\u5355\u4E09\u7EA7-1",
                    icon: "",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true
                  }
                },
                {
                  path: "multi-level3-2",
                  component: "demo/multi-level/children/children/level3-2",
                  name: "MultiLevel32",
                  meta: {
                    title: "\u83DC\u5355\u4E09\u7EA7-2",
                    icon: "",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: "/component",
      component: "Layout",
      meta: {
        title: "\u7EC4\u4EF6\u5C01\u88C5",
        icon: "menu",
        hidden: false,
        roles: ["ADMIN"],
        keepAlive: true
      },
      children: [
        {
          path: "wang-editor",
          component: "demo/wang-editor",
          name: "wang-editor",
          meta: {
            title: "\u5BCC\u6587\u672C\u7F16\u8F91\u5668",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "upload",
          component: "demo/upload",
          name: "upload",
          meta: {
            title: "\u56FE\u7247\u4E0A\u4F20",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "icon-selector",
          component: "demo/icon-selector",
          name: "icon-selector",
          meta: {
            title: "\u56FE\u6807\u9009\u62E9\u5668",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "dict-demo",
          component: "demo/dict",
          name: "DictDemo",
          meta: {
            title: "\u5B57\u5178\u7EC4\u4EF6",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "taginput",
          component: "demo/taginput",
          name: "taginput",
          meta: {
            title: "\u6807\u7B7E\u8F93\u5165\u6846",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "signature",
          component: "demo/signature",
          name: "signature",
          meta: {
            title: "\u7B7E\u540D",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "table",
          component: "demo/table",
          name: "Table",
          meta: {
            title: "\u8868\u683C",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        }
      ]
    },
    {
      path: "/table",
      component: "Layout",
      meta: {
        title: "Table",
        icon: "table",
        hidden: false,
        roles: ["ADMIN"],
        keepAlive: true
      },
      children: [
        {
          path: "dynamic-table",
          component: "demo/table/dynamic-table/index",
          name: "DynamicTable",
          meta: {
            title: "\u52A8\u6001Table",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "drag-table",
          component: "demo/table/drag-table",
          name: "DragTable",
          meta: {
            title: "\u62D6\u62FDTable",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "complex-table",
          component: "demo/table/complex-table",
          name: "ComplexTable",
          meta: {
            title: "\u7EFC\u5408Table",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        }
      ]
    },
    {
      path: "/function",
      component: "Layout",
      meta: {
        title: "\u529F\u80FD\u6F14\u793A",
        icon: "menu",
        hidden: false,
        roles: ["ADMIN"],
        keepAlive: true
      },
      children: [
        {
          path: "permission",
          component: "demo/permission/page",
          name: "Permission",
          meta: {
            title: "Permission",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "icon-demo",
          component: "demo/icons",
          name: "Icons",
          meta: {
            title: "\u56FE\u6807",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "websocket",
          component: "demo/websocket",
          name: "Websocket",
          meta: {
            title: "Websocket",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        },
        {
          path: "other",
          component: "demo/other",
          meta: {
            title: "\u656C\u8BF7\u671F\u5F85...",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true
          }
        }
      ]
    }
  ],
  msg: "\u4E00\u5207ok"
};
var router_default = [
  {
    url,
    method,
    response: () => {
      return data;
    }
  }
];
export {
  router_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svbW9jay9yb3V0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcd29ya3NwYWNlXFxcXHdvcmtzdGF0aW9uLXVpXFxcXG1vY2tcXFxccm91dGVyLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFx3b3Jrc3RhdGlvbi11aVxcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi93b3Jrc3BhY2Uvd29ya3N0YXRpb24tdWkvbW9jay9yb3V0ZXIudHNcIjtpbXBvcnQgeyBNb2NrTWV0aG9kIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcbmNvbnN0IHVybCA9IFwiL2FwaS92MS9tZW51cy9yb3V0ZXNcIjtcbmNvbnN0IG1ldGhvZCA9IFwiZ2V0XCI7XG5jb25zdCBkYXRhID0ge1xuICBjb2RlOiAyMDAsXG4gIGRhdGE6IFtcbiAgICB7XG4gICAgICBwYXRoOiBcIi9zeXN0ZW1cIixcbiAgICAgIGNvbXBvbmVudDogXCJMYXlvdXRcIixcbiAgICAgIHJlZGlyZWN0OiBcIi9zeXN0ZW0vdXNlclwiLFxuICAgICAgbWV0YToge1xuICAgICAgICB0aXRsZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcIixcbiAgICAgICAgaWNvbjogXCJzeXN0ZW1cIixcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwidXNlclwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJzeXN0ZW0vdXNlci9pbmRleFwiLFxuICAgICAgICAgIG5hbWU6IFwiVXNlclwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NzUyOFx1NjIzN1x1N0JBMVx1NzQwNlwiLFxuICAgICAgICAgICAgaWNvbjogXCJ1c2VyXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcInJvbGVcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwic3lzdGVtL3JvbGUvaW5kZXhcIixcbiAgICAgICAgICBuYW1lOiBcIlJvbGVcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTg5RDJcdTgyNzJcdTdCQTFcdTc0MDZcIixcbiAgICAgICAgICAgIGljb246IFwicm9sZVwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJtZW51XCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcInN5c3RlbS9tZW51L2luZGV4XCIsXG4gICAgICAgICAgbmFtZTogXCJNZW51XCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU4M0RDXHU1MzU1XHU3QkExXHU3NDA2XCIsXG4gICAgICAgICAgICBpY29uOiBcIm1lbnVcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiZGVwdFwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJzeXN0ZW0vZGVwdC9pbmRleFwiLFxuICAgICAgICAgIG5hbWU6IFwiRGVwdFwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1OTBFOFx1OTVFOFx1N0JBMVx1NzQwNlwiLFxuICAgICAgICAgICAgaWNvbjogXCJ0cmVlXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImRpY3RcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwic3lzdGVtL2RpY3QvaW5kZXhcIixcbiAgICAgICAgICBuYW1lOiBcIkRpY3RUeXBlXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU1QjU3XHU1MTc4XHU3QkExXHU3NDA2XCIsXG4gICAgICAgICAgICBpY29uOiBcImRpY3RcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHBhdGg6IFwiL2FwaVwiLFxuICAgICAgY29tcG9uZW50OiBcIkxheW91dFwiLFxuICAgICAgbWV0YToge1xuICAgICAgICB0aXRsZTogXCJcdTYzQTVcdTUzRTNcIixcbiAgICAgICAgaWNvbjogXCJhcGlcIixcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiYXBpZG9jXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vYXBpLWRvY1wiLFxuICAgICAgICAgIG5hbWU6IFwiQXBpZG9jXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU2M0E1XHU1M0UzXHU2NTg3XHU2ODYzXCIsXG4gICAgICAgICAgICBpY29uOiBcImFwaVwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcIi9leHRlcm5hbC1saW5rXCIsXG4gICAgICBjb21wb25lbnQ6IFwiTGF5b3V0XCIsXG4gICAgICByZWRpcmVjdDogXCJub3JlZGlyZWN0XCIsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIlx1NTkxNlx1OTBFOFx1OTRGRVx1NjNBNVwiLFxuICAgICAgICBpY29uOiBcImxpbmtcIixcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiaHR0cHM6Ly9qdWVqaW4uY24vcG9zdC83MjI4OTkwNDA5OTA5MTA4NzkzXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiZG9jdW1lbnRcIixcbiAgICAgICAgICAgIGljb246IFwiZG9jdW1lbnRcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcIi9tdWx0aS1sZXZlbFwiLFxuICAgICAgY29tcG9uZW50OiBcIkxheW91dFwiLFxuICAgICAgcmVkaXJlY3Q6IFwiL211bHRpLWxldmVsL211bHRpLWxldmVsMVwiLFxuICAgICAgbWV0YToge1xuICAgICAgICB0aXRsZTogXCJcdTU5MUFcdTdFQTdcdTgzRENcdTUzNTVcIixcbiAgICAgICAgaWNvbjogXCJtdWx0aV9sZXZlbFwiLFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJtdWx0aS1sZXZlbDFcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9tdWx0aS1sZXZlbC9sZXZlbDFcIixcbiAgICAgICAgICByZWRpcmVjdDogXCIvbXVsdGktbGV2ZWwvbXVsdGktbGV2ZWwyXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU4M0RDXHU1MzU1XHU0RTAwXHU3RUE3XCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6IFwibXVsdGktbGV2ZWwyXCIsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL211bHRpLWxldmVsL2NoaWxkcmVuL2xldmVsMlwiLFxuICAgICAgICAgICAgICByZWRpcmVjdDogXCIvbXVsdGktbGV2ZWwvbXVsdGktbGV2ZWwyL211bHRpLWxldmVsMy0xXCIsXG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcdTgzRENcdTUzNTVcdTRFOENcdTdFQTdcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRoOiBcIm11bHRpLWxldmVsMy0xXCIsXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9tdWx0aS1sZXZlbC9jaGlsZHJlbi9jaGlsZHJlbi9sZXZlbDMtMVwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJNdWx0aUxldmVsMzFcIixcbiAgICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXHU4M0RDXHU1MzU1XHU0RTA5XHU3RUE3LTFcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aDogXCJtdWx0aS1sZXZlbDMtMlwiLFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vbXVsdGktbGV2ZWwvY2hpbGRyZW4vY2hpbGRyZW4vbGV2ZWwzLTJcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTXVsdGlMZXZlbDMyXCIsXG4gICAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlx1ODNEQ1x1NTM1NVx1NEUwOVx1N0VBNy0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiL2NvbXBvbmVudFwiLFxuICAgICAgY29tcG9uZW50OiBcIkxheW91dFwiLFxuICAgICAgbWV0YToge1xuICAgICAgICB0aXRsZTogXCJcdTdFQzRcdTRFRjZcdTVDMDFcdTg4QzVcIixcbiAgICAgICAgaWNvbjogXCJtZW51XCIsXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcIndhbmctZWRpdG9yXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vd2FuZy1lZGl0b3JcIixcbiAgICAgICAgICBuYW1lOiBcIndhbmctZWRpdG9yXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU1QkNDXHU2NTg3XHU2NzJDXHU3RjE2XHU4RjkxXHU1NjY4XCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJ1cGxvYWRcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby91cGxvYWRcIixcbiAgICAgICAgICBuYW1lOiBcInVwbG9hZFwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NTZGRVx1NzI0N1x1NEUwQVx1NEYyMFwiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiaWNvbi1zZWxlY3RvclwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL2ljb24tc2VsZWN0b3JcIixcbiAgICAgICAgICBuYW1lOiBcImljb24tc2VsZWN0b3JcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTU2RkVcdTY4MDdcdTkwMDlcdTYyRTlcdTU2NjhcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImRpY3QtZGVtb1wiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL2RpY3RcIixcbiAgICAgICAgICBuYW1lOiBcIkRpY3REZW1vXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU1QjU3XHU1MTc4XHU3RUM0XHU0RUY2XCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJ0YWdpbnB1dFwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3RhZ2lucHV0XCIsXG4gICAgICAgICAgbmFtZTogXCJ0YWdpbnB1dFwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NjgwN1x1N0I3RVx1OEY5M1x1NTE2NVx1Njg0NlwiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwic2lnbmF0dXJlXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vc2lnbmF0dXJlXCIsXG4gICAgICAgICAgbmFtZTogXCJzaWduYXR1cmVcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTdCN0VcdTU0MERcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcInRhYmxlXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vdGFibGVcIixcbiAgICAgICAgICBuYW1lOiBcIlRhYmxlXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU4ODY4XHU2ODNDXCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiL3RhYmxlXCIsXG4gICAgICBjb21wb25lbnQ6IFwiTGF5b3V0XCIsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIlRhYmxlXCIsXG4gICAgICAgIGljb246IFwidGFibGVcIixcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiZHluYW1pYy10YWJsZVwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3RhYmxlL2R5bmFtaWMtdGFibGUvaW5kZXhcIixcbiAgICAgICAgICBuYW1lOiBcIkR5bmFtaWNUYWJsZVwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NTJBOFx1NjAwMVRhYmxlXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImRyYWctdGFibGVcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby90YWJsZS9kcmFnLXRhYmxlXCIsXG4gICAgICAgICAgbmFtZTogXCJEcmFnVGFibGVcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTYyRDZcdTYyRkRUYWJsZVwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJjb21wbGV4LXRhYmxlXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vdGFibGUvY29tcGxleC10YWJsZVwiLFxuICAgICAgICAgIG5hbWU6IFwiQ29tcGxleFRhYmxlXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU3RUZDXHU1NDA4VGFibGVcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcIi9mdW5jdGlvblwiLFxuICAgICAgY29tcG9uZW50OiBcIkxheW91dFwiLFxuICAgICAgbWV0YToge1xuICAgICAgICB0aXRsZTogXCJcdTUyOUZcdTgwRkRcdTZGMTRcdTc5M0FcIixcbiAgICAgICAgaWNvbjogXCJtZW51XCIsXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcInBlcm1pc3Npb25cIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9wZXJtaXNzaW9uL3BhZ2VcIixcbiAgICAgICAgICBuYW1lOiBcIlBlcm1pc3Npb25cIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJQZXJtaXNzaW9uXCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJpY29uLWRlbW9cIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9pY29uc1wiLFxuICAgICAgICAgIG5hbWU6IFwiSWNvbnNcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTU2RkVcdTY4MDdcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcIndlYnNvY2tldFwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3dlYnNvY2tldFwiLFxuICAgICAgICAgIG5hbWU6IFwiV2Vic29ja2V0XCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiV2Vic29ja2V0XCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJvdGhlclwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL290aGVyXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU2NTZDXHU4QkY3XHU2NzFGXHU1Rjg1Li4uXCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHVybDogdXJsLFxuICAgIG1ldGhvZDogbWV0aG9kLFxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICB9LFxuXSBhcyBNb2NrTWV0aG9kW107XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsSUFBTSxNQUFNO0FBQ1osSUFBTSxTQUFTO0FBQ2YsSUFBTSxPQUFPO0VBQ1gsTUFBTTtFQUNOLE1BQU07SUFDSjtNQUNFLE1BQU07TUFDTixXQUFXO01BQ1gsVUFBVTtNQUNWLE1BQU07UUFDSixPQUFPO1FBQ1AsTUFBTTtRQUNOLFFBQVE7UUFDUixPQUFPLENBQUMsT0FBTztRQUNmLFdBQVc7TUFDYjtNQUNBLFVBQVU7UUFDUjtVQUNFLE1BQU07VUFDTixXQUFXO1VBQ1gsTUFBTTtVQUNOLE1BQU07WUFDSixPQUFPO1lBQ1AsTUFBTTtZQUNOLFFBQVE7WUFDUixPQUFPLENBQUMsT0FBTztZQUNmLFdBQVc7VUFDYjtRQUNGO1FBQ0E7VUFDRSxNQUFNO1VBQ04sV0FBVztVQUNYLE1BQU07VUFDTixNQUFNO1lBQ0osT0FBTztZQUNQLE1BQU07WUFDTixRQUFRO1lBQ1IsT0FBTyxDQUFDLE9BQU87WUFDZixXQUFXO1VBQ2I7UUFDRjtRQUNBO1VBQ0UsTUFBTTtVQUNOLFdBQVc7VUFDWCxNQUFNO1VBQ04sTUFBTTtZQUNKLE9BQU87WUFDUCxNQUFNO1lBQ04s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
