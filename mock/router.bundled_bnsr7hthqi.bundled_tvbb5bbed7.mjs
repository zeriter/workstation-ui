// mock/router.bundled_bnsr7hthqi.mjs
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL3JvdXRlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcd29ya3N0YXRpb24tdWlcXFxcbW9ja1xcXFxyb3V0ZXIudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcd29ya3NwYWNlXFxcXHdvcmtzdGF0aW9uLXVpXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L3dvcmtzcGFjZS93b3Jrc3RhdGlvbi11aS9tb2NrL3JvdXRlci50c1wiO2ltcG9ydCB7IE1vY2tNZXRob2QgfSBmcm9tIFwidml0ZS1wbHVnaW4tbW9ja1wiO1xuY29uc3QgdXJsID0gXCIvYXBpL3YxL21lbnVzL3JvdXRlc1wiO1xuY29uc3QgbWV0aG9kID0gXCJnZXRcIjtcbmNvbnN0IGRhdGEgPSB7XG4gIGNvZGU6IDIwMCxcbiAgZGF0YTogW1xuICAgIHtcbiAgICAgIHBhdGg6IFwiL3N5c3RlbVwiLFxuICAgICAgY29tcG9uZW50OiBcIkxheW91dFwiLFxuICAgICAgcmVkaXJlY3Q6IFwiL3N5c3RlbS91c2VyXCIsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIlx1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlwiLFxuICAgICAgICBpY29uOiBcInN5c3RlbVwiLFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJ1c2VyXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcInN5c3RlbS91c2VyL2luZGV4XCIsXG4gICAgICAgICAgbmFtZTogXCJVc2VyXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU3NTI4XHU2MjM3XHU3QkExXHU3NDA2XCIsXG4gICAgICAgICAgICBpY29uOiBcInVzZXJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwicm9sZVwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJzeXN0ZW0vcm9sZS9pbmRleFwiLFxuICAgICAgICAgIG5hbWU6IFwiUm9sZVwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1ODlEMlx1ODI3Mlx1N0JBMVx1NzQwNlwiLFxuICAgICAgICAgICAgaWNvbjogXCJyb2xlXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcIm1lbnVcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwic3lzdGVtL21lbnUvaW5kZXhcIixcbiAgICAgICAgICBuYW1lOiBcIk1lbnVcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTgzRENcdTUzNTVcdTdCQTFcdTc0MDZcIixcbiAgICAgICAgICAgIGljb246IFwibWVudVwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJkZXB0XCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcInN5c3RlbS9kZXB0L2luZGV4XCIsXG4gICAgICAgICAgbmFtZTogXCJEZXB0XCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU5MEU4XHU5NUU4XHU3QkExXHU3NDA2XCIsXG4gICAgICAgICAgICBpY29uOiBcInRyZWVcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiZGljdFwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJzeXN0ZW0vZGljdC9pbmRleFwiLFxuICAgICAgICAgIG5hbWU6IFwiRGljdFR5cGVcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTVCNTdcdTUxNzhcdTdCQTFcdTc0MDZcIixcbiAgICAgICAgICAgIGljb246IFwiZGljdFwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgcGF0aDogXCIvYXBpXCIsXG4gICAgICBjb21wb25lbnQ6IFwiTGF5b3V0XCIsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIlx1NjNBNVx1NTNFM1wiLFxuICAgICAgICBpY29uOiBcImFwaVwiLFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJhcGlkb2NcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9hcGktZG9jXCIsXG4gICAgICAgICAgbmFtZTogXCJBcGlkb2NcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTYzQTVcdTUzRTNcdTY1ODdcdTY4NjNcIixcbiAgICAgICAgICAgIGljb246IFwiYXBpXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiL2V4dGVybmFsLWxpbmtcIixcbiAgICAgIGNvbXBvbmVudDogXCJMYXlvdXRcIixcbiAgICAgIHJlZGlyZWN0OiBcIm5vcmVkaXJlY3RcIixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGl0bGU6IFwiXHU1OTE2XHU5MEU4XHU5NEZFXHU2M0E1XCIsXG4gICAgICAgIGljb246IFwibGlua1wiLFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJodHRwczovL2p1ZWppbi5jbi9wb3N0LzcyMjg5OTA0MDk5MDkxMDg3OTNcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJkb2N1bWVudFwiLFxuICAgICAgICAgICAgaWNvbjogXCJkb2N1bWVudFwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiL211bHRpLWxldmVsXCIsXG4gICAgICBjb21wb25lbnQ6IFwiTGF5b3V0XCIsXG4gICAgICByZWRpcmVjdDogXCIvbXVsdGktbGV2ZWwvbXVsdGktbGV2ZWwxXCIsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIlx1NTkxQVx1N0VBN1x1ODNEQ1x1NTM1NVwiLFxuICAgICAgICBpY29uOiBcIm11bHRpX2xldmVsXCIsXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcIm11bHRpLWxldmVsMVwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL211bHRpLWxldmVsL2xldmVsMVwiLFxuICAgICAgICAgIHJlZGlyZWN0OiBcIi9tdWx0aS1sZXZlbC9tdWx0aS1sZXZlbDJcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTgzRENcdTUzNTVcdTRFMDBcdTdFQTdcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogXCJtdWx0aS1sZXZlbDJcIixcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vbXVsdGktbGV2ZWwvY2hpbGRyZW4vbGV2ZWwyXCIsXG4gICAgICAgICAgICAgIHJlZGlyZWN0OiBcIi9tdWx0aS1sZXZlbC9tdWx0aS1sZXZlbDIvbXVsdGktbGV2ZWwzLTFcIixcbiAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlx1ODNEQ1x1NTM1NVx1NEU4Q1x1N0VBN1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGg6IFwibXVsdGktbGV2ZWwzLTFcIixcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL211bHRpLWxldmVsL2NoaWxkcmVuL2NoaWxkcmVuL2xldmVsMy0xXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIk11bHRpTGV2ZWwzMVwiLFxuICAgICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcdTgzRENcdTUzNTVcdTRFMDlcdTdFQTctMVwiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRoOiBcIm11bHRpLWxldmVsMy0yXCIsXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9tdWx0aS1sZXZlbC9jaGlsZHJlbi9jaGlsZHJlbi9sZXZlbDMtMlwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJNdWx0aUxldmVsMzJcIixcbiAgICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXHU4M0RDXHU1MzU1XHU0RTA5XHU3RUE3LTJcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCIvY29tcG9uZW50XCIsXG4gICAgICBjb21wb25lbnQ6IFwiTGF5b3V0XCIsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIlx1N0VDNFx1NEVGNlx1NUMwMVx1ODhDNVwiLFxuICAgICAgICBpY29uOiBcIm1lbnVcIixcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwid2FuZy1lZGl0b3JcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby93YW5nLWVkaXRvclwiLFxuICAgICAgICAgIG5hbWU6IFwid2FuZy1lZGl0b3JcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTVCQ0NcdTY1ODdcdTY3MkNcdTdGMTZcdThGOTFcdTU2NjhcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcInVwbG9hZFwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3VwbG9hZFwiLFxuICAgICAgICAgIG5hbWU6IFwidXBsb2FkXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU1NkZFXHU3MjQ3XHU0RTBBXHU0RjIwXCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJpY29uLXNlbGVjdG9yXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vaWNvbi1zZWxlY3RvclwiLFxuICAgICAgICAgIG5hbWU6IFwiaWNvbi1zZWxlY3RvclwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NTZGRVx1NjgwN1x1OTAwOVx1NjJFOVx1NTY2OFwiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiZGljdC1kZW1vXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vZGljdFwiLFxuICAgICAgICAgIG5hbWU6IFwiRGljdERlbW9cIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTVCNTdcdTUxNzhcdTdFQzRcdTRFRjZcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcInRhZ2lucHV0XCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vdGFnaW5wdXRcIixcbiAgICAgICAgICBuYW1lOiBcInRhZ2lucHV0XCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU2ODA3XHU3QjdFXHU4RjkzXHU1MTY1XHU2ODQ2XCIsXG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJzaWduYXR1cmVcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby9zaWduYXR1cmVcIixcbiAgICAgICAgICBuYW1lOiBcInNpZ25hdHVyZVwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1N0I3RVx1NTQwRFwiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwidGFibGVcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby90YWJsZVwiLFxuICAgICAgICAgIG5hbWU6IFwiVGFibGVcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTg4NjhcdTY4M0NcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCIvdGFibGVcIixcbiAgICAgIGNvbXBvbmVudDogXCJMYXlvdXRcIixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGl0bGU6IFwiVGFibGVcIixcbiAgICAgICAgaWNvbjogXCJ0YWJsZVwiLFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJkeW5hbWljLXRhYmxlXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vdGFibGUvZHluYW1pYy10YWJsZS9pbmRleFwiLFxuICAgICAgICAgIG5hbWU6IFwiRHluYW1pY1RhYmxlXCIsXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6IFwiXHU1MkE4XHU2MDAxVGFibGVcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiZHJhZy10YWJsZVwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3RhYmxlL2RyYWctdGFibGVcIixcbiAgICAgICAgICBuYW1lOiBcIkRyYWdUYWJsZVwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NjJENlx1NjJGRFRhYmxlXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImNvbXBsZXgtdGFibGVcIixcbiAgICAgICAgICBjb21wb25lbnQ6IFwiZGVtby90YWJsZS9jb21wbGV4LXRhYmxlXCIsXG4gICAgICAgICAgbmFtZTogXCJDb21wbGV4VGFibGVcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTdFRkNcdTU0MDhUYWJsZVwiLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHJvbGVzOiBbXCJBRE1JTlwiXSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiL2Z1bmN0aW9uXCIsXG4gICAgICBjb21wb25lbnQ6IFwiTGF5b3V0XCIsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIlx1NTI5Rlx1ODBGRFx1NkYxNFx1NzkzQVwiLFxuICAgICAgICBpY29uOiBcIm1lbnVcIixcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwicGVybWlzc2lvblwiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL3Blcm1pc3Npb24vcGFnZVwiLFxuICAgICAgICAgIG5hbWU6IFwiUGVybWlzc2lvblwiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlBlcm1pc3Npb25cIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImljb24tZGVtb1wiLFxuICAgICAgICAgIGNvbXBvbmVudDogXCJkZW1vL2ljb25zXCIsXG4gICAgICAgICAgbmFtZTogXCJJY29uc1wiLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlx1NTZGRVx1NjgwN1wiLFxuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwid2Vic29ja2V0XCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vd2Vic29ja2V0XCIsXG4gICAgICAgICAgbmFtZTogXCJXZWJzb2NrZXRcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJXZWJzb2NrZXRcIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcIm90aGVyXCIsXG4gICAgICAgICAgY29tcG9uZW50OiBcImRlbW8vb3RoZXJcIixcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJcdTY1NkNcdThCRjdcdTY3MUZcdTVGODUuLi5cIixcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiBtZXRob2QsXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gIH0sXG5dIGFzIE1vY2tNZXRob2RbXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxJQUFNLE1BQU07QUFDWixJQUFNLFNBQVM7QUFDZixJQUFNLE9BQU87RUFDWCxNQUFNO0VBQ04sTUFBTTtJQUNKO01BQ0UsTUFBTTtNQUNOLFdBQVc7TUFDWCxVQUFVO01BQ1YsTUFBTTtRQUNKLE9BQU87UUFDUCxNQUFNO1FBQ04sUUFBUTtRQUNSLE9BQU8sQ0FBQyxPQUFPO1FBQ2YsV0FBVztNQUNiO01BQ0EsVUFBVTtRQUNSO1VBQ0UsTUFBTTtVQUNOLFdBQVc7VUFDWCxNQUFNO1VBQ04sTUFBTTtZQUNKLE9BQU87WUFDUCxNQUFNO1lBQ04sUUFBUTtZQUNSLE9BQU8sQ0FBQyxPQUFPO1lBQ2YsV0FBVztVQUNiO1FBQ0Y7UUFDQTtVQUNFLE1BQU07VUFDTixXQUFXO1VBQ1gsTUFBTTtVQUNOLE1BQU07WUFDSixPQUFPO1lBQ1AsTUFBTTtZQUNOLFFBQVE7WUFDUixPQUFPLENBQUMsT0FBTztZQUNmLFdBQVc7VUFDYjtRQUNGO1FBQ0E7VUFDRSxNQUFNO1VBQ04sV0FBVztVQUNYLE1BQU07VUFDTixNQUFNO1lBQ0osT0FBTztZQUNQLE1BQU07WUFDTixRQUFRO1lBQ1Is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
