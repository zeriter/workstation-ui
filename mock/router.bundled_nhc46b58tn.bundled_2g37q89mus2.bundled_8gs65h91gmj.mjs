// mock/router.bundled_nhc46b58tn.bundled_2g37q89mus2.mjs
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svcm91dGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFx3b3Jrc3RhdGlvbi11aVxcXFxtb2NrXFxcXHJvdXRlci50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcd29ya3N0YXRpb24tdWlcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRDovd29ya3NwYWNlL3dvcmtzdGF0aW9uLXVpL21vY2svcm91dGVyLnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gXCJ2aXRlLXBsdWdpbi1tb2NrXCI7XG5jb25zdCB1cmwgPSBcIi9hcGkvdjEvbWVudXMvcm91dGVzXCI7XG5jb25zdCBtZXRob2QgPSBcImdldFwiO1xuY29uc3QgZGF0YSA9IHtcbiAgY29kZTogMjAwLFxuICBkYXRhOiBbXG4gICAge1xuICAgICAgcGF0aDogXCIvc3lzdGVtXCIsXG4gICAgICBjb21wb25lbnQ6IFwiTGF5b3V0XCIsXG4gICAgICByZWRpcmVjdDogXCIvc3lzdGVtL3VzZXJcIixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGl0bGU6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XCIsXG4gICAgICAgIGljb246IFwic3lzdGVtXCIsXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcInVzZXJcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwic3lzdGVtL3VzZXIvaW5kZXhcIixcbiAgICAgICAgICBuYW1lOiBcIlVzZXJcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTc1MjhcdTYyMzdcdTdCQTFcdTc0MDZcIixcbiAgICAgICAgICAgIGljb246IFwidXNlclwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJyb2xlXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcInN5c3RlbS9yb2xlL2luZGV4XCIsXG4gICAgICAgICAgbmFtZTogXCJSb2xlXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU4OUQyXHU4MjcyXHU3QkExXHU3NDA2XCIsXG4gICAgICAgICAgICBpY29uOiBcInJvbGVcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwibWVudVwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJzeXN0ZW0vbWVudS9pbmRleFwiLFxuICAgICAgICAgIG5hbWU6IFwiTWVudVwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1ODNEQ1x1NTM1NVx1N0JBMVx1NzQwNlwiLFxuICAgICAgICAgICAgaWNvbjogXCJtZW51XCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImRlcHRcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwic3lzdGVtL2RlcHQvaW5kZXhcIixcbiAgICAgICAgICBuYW1lOiBcIkRlcHRcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTkwRThcdTk1RThcdTdCQTFcdTc0MDZcIixcbiAgICAgICAgICAgIGljb246IFwidHJlZVwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJkaWN0XCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcInN5c3RlbS9kaWN0L2luZGV4XCIsXG4gICAgICAgICAgbmFtZTogXCJEaWN0VHlwZVwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NUI1N1x1NTE3OFx1N0JBMVx1NzQwNlwiLFxuICAgICAgICAgICAgaWNvbjogXCJkaWN0XCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBwYXRoOiBcIi9hcGlcIixcbiAgICAgIGNvbXBvbmVudDogXCJMYXlvdXRcIixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGl0bGU6IFwiXHU2M0E1XHU1M0UzXCIsXG4gICAgICAgIGljb246IFwiYXBpXCIsXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImFwaWRvY1wiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL2FwaS1kb2NcIixcbiAgICAgICAgICBuYW1lOiBcIkFwaWRvY1wiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NjNBNVx1NTNFM1x1NjU4N1x1Njg2M1wiLFxuICAgICAgICAgICAgaWNvbjogXCJhcGlcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCIvZXh0ZXJuYWwtbGlua1wiLFxuICAgICAgY29tcG9uZW50OiBcIkxheW91dFwiLFxuICAgICAgcmVkaXJlY3Q6IFwibm9yZWRpcmVjdFwiLFxuICAgICAgbWV0YToge1xuICAgICAgICB0aXRsZTogXCJcdTU5MTZcdTkwRThcdTk0RkVcdTYzQTVcIixcbiAgICAgICAgaWNvbjogXCJsaW5rXCIsXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImh0dHBzOi8vanVlamluLmNuL3Bvc3QvNzIyODk5MDQwOTkwOTEwODc5M1wiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBpY29uOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCIvbXVsdGktbGV2ZWxcIixcbiAgICAgIGNvbXBvbmVudDogXCJMYXlvdXRcIixcbiAgICAgIHJlZGlyZWN0OiBcIi9tdWx0aS1sZXZlbC9tdWx0aS1sZXZlbDFcIixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGl0bGU6IFwiXHU1OTFBXHU3RUE3XHU4M0RDXHU1MzU1XCIsXG4gICAgICAgIGljb246IFwibXVsdGlfbGV2ZWxcIixcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwibXVsdGktbGV2ZWwxXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vbXVsdGktbGV2ZWwvbGV2ZWwxXCIsXG4gICAgICAgICAgcmVkaXJlY3Q6IFwiL211bHRpLWxldmVsL211bHRpLWxldmVsMlwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1ODNEQ1x1NTM1NVx1NEUwMFx1N0VBN1wiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiBcIm11bHRpLWxldmVsMlwiLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9tdWx0aS1sZXZlbC9jaGlsZHJlbi9sZXZlbDJcIixcbiAgICAgICAgICAgICAgcmVkaXJlY3Q6IFwiL211bHRpLWxldmVsL211bHRpLWxldmVsMi9tdWx0aS1sZXZlbDMtMVwiLFxuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXHU4M0RDXHU1MzU1XHU0RThDXHU3RUE3XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aDogXCJtdWx0aS1sZXZlbDMtMVwiLFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vbXVsdGktbGV2ZWwvY2hpbGRyZW4vY2hpbGRyZW4vbGV2ZWwzLTFcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTXVsdGlMZXZlbDMxXCIsXG4gICAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlx1ODNEQ1x1NTM1NVx1NEUwOVx1N0VBNy0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGg6IFwibXVsdGktbGV2ZWwzLTJcIixcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL211bHRpLWxldmVsL2NoaWxkcmVuL2NoaWxkcmVuL2xldmVsMy0yXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIk11bHRpTGV2ZWwzMlwiLFxuICAgICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcdTgzRENcdTUzNTVcdTRFMDlcdTdFQTctMlwiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcIi9jb21wb25lbnRcIixcbiAgICAgIGNvbXBvbmVudDogXCJMYXlvdXRcIixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGl0bGU6IFwiXHU3RUM0XHU0RUY2XHU1QzAxXHU4OEM1XCIsXG4gICAgICAgIGljb246IFwibWVudVwiLFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJ3YW5nLWVkaXRvclwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3dhbmctZWRpdG9yXCIsXG4gICAgICAgICAgbmFtZTogXCJ3YW5nLWVkaXRvclwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NUJDQ1x1NjU4N1x1NjcyQ1x1N0YxNlx1OEY5MVx1NTY2OFwiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwidXBsb2FkXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vdXBsb2FkXCIsXG4gICAgICAgICAgbmFtZTogXCJ1cGxvYWRcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTU2RkVcdTcyNDdcdTRFMEFcdTRGMjBcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImljb24tc2VsZWN0b3JcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9pY29uLXNlbGVjdG9yXCIsXG4gICAgICAgICAgbmFtZTogXCJpY29uLXNlbGVjdG9yXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU1NkZFXHU2ODA3XHU5MDA5XHU2MkU5XHU1NjY4XCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJkaWN0LWRlbW9cIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9kaWN0XCIsXG4gICAgICAgICAgbmFtZTogXCJEaWN0RGVtb1wiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NUI1N1x1NTE3OFx1N0VDNFx1NEVGNlwiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwidGFnaW5wdXRcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby90YWdpbnB1dFwiLFxuICAgICAgICAgIG5hbWU6IFwidGFnaW5wdXRcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTY4MDdcdTdCN0VcdThGOTNcdTUxNjVcdTY4NDZcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcInNpZ25hdHVyZVwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3NpZ25hdHVyZVwiLFxuICAgICAgICAgIG5hbWU6IFwic2lnbmF0dXJlXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU3QjdFXHU1NDBEXCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJ0YWJsZVwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3RhYmxlXCIsXG4gICAgICAgICAgbmFtZTogXCJUYWJsZVwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1ODg2OFx1NjgzQ1wiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcIi90YWJsZVwiLFxuICAgICAgY29tcG9uZW50OiBcIkxheW91dFwiLFxuICAgICAgbWV0YToge1xuICAgICAgICB0aXRsZTogXCJUYWJsZVwiLFxuICAgICAgICBpY29uOiBcInRhYmxlXCIsXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImR5bmFtaWMtdGFibGVcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby90YWJsZS9keW5hbWljLXRhYmxlL2luZGV4XCIsXG4gICAgICAgICAgbmFtZTogXCJEeW5hbWljVGFibGVcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTUyQThcdTYwMDFUYWJsZVwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJkcmFnLXRhYmxlXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vdGFibGUvZHJhZy10YWJsZVwiLFxuICAgICAgICAgIG5hbWU6IFwiRHJhZ1RhYmxlXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU2MkQ2XHU2MkZEVGFibGVcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiY29tcGxleC10YWJsZVwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3RhYmxlL2NvbXBsZXgtdGFibGVcIixcbiAgICAgICAgICBuYW1lOiBcIkNvbXBsZXhUYWJsZVwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1N0VGQ1x1NTQwOFRhYmxlXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCIvZnVuY3Rpb25cIixcbiAgICAgIGNvbXBvbmVudDogXCJMYXlvdXRcIixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGl0bGU6IFwiXHU1MjlGXHU4MEZEXHU2RjE0XHU3OTNBXCIsXG4gICAgICAgIGljb246IFwibWVudVwiLFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJwZXJtaXNzaW9uXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vcGVybWlzc2lvbi9wYWdlXCIsXG4gICAgICAgICAgbmFtZTogXCJQZXJtaXNzaW9uXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiUGVybWlzc2lvblwiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiaWNvbi1kZW1vXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vaWNvbnNcIixcbiAgICAgICAgICBuYW1lOiBcIkljb25zXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU1NkZFXHU2ODA3XCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJ3ZWJzb2NrZXRcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby93ZWJzb2NrZXRcIixcbiAgICAgICAgICBuYW1lOiBcIldlYnNvY2tldFwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIldlYnNvY2tldFwiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwib3RoZXJcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9vdGhlclwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NjU2Q1x1OEJGN1x1NjcxRlx1NUY4NS4uLlwiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB1cmw6IHVybCxcbiAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICByZXNwb25zZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcbiAgfSxcbl0gYXMgTW9ja01ldGhvZFtdO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLElBQU0sTUFBTTtBQUNaLElBQU0sU0FBUztBQUNmLElBQU0sT0FBTztFQUNYLE1BQU07RUFDTixNQUFNO0lBQ0o7TUFDRSxNQUFNO01BQ04sV0FBVztNQUNYLFVBQVU7TUFDVixNQUFNO1FBQ0osT0FBTztRQUNQLE1BQU07UUFDTixRQUFRO1FBQ1IsT0FBTyxDQUFDLE9BQU87UUFDZixXQUFXO01BQ2I7TUFDQSxVQUFVO1FBQ1I7VUFDRSxNQUFNO1VBQ04sV0FBVztVQUNYLE1BQU07VUFDTixNQUFNO1lBQ0osT0FBTztZQUNQLE1BQU07WUFDTixRQUFRO1lBQ1IsT0FBTyxDQUFDLE9BQU87WUFDZixXQUFXO1VBQ2I7UUFDRjtRQUNBO1VBQ0UsTUFBTTtVQUNOLFdBQVc7VUFDWCxNQUFNO1VBQ04sTUFBTTtZQUNKLE9BQU87WUFDUCxNQUFNO1lBQ04sUUFBUTtZQUNSLE9BQU8sQ0FBQyxPQUFPO1lBQ2YsV0FBVztVQUNiO1FBQ0Y7UUFDQTtVQUNFLE1BQU07VUFDTixXQUFXO1VBQ1gsTUFBTTtVQUNOLE1BQU07WUFDSixPQUFPO1lBQ1AsTUFBTTtZQUNOLFFBQVE7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
