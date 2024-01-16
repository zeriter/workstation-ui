// mock/user.bundled_jutd142l7n.mjs
var user_default = [
  {
    url: "/api/hello_world",
    method: "get",
    response: (request) => {
      return {
        msg: "hello world",
        headers: request.headers
      };
    }
  },
  {
    url: "/auth/captcha",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          captchaKey: "534b8ef2b0a24121bec76391ddd159f9",
          captchaBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAkCAIAAADNSmkJAAAFKUlEQVR4Xu2ZXUwcVRiGV70wMWo08V5NvPXCrDbFaGpMaZW2hqQxaoiJTRsaMBCNSYtpa2JTKiFSelFa+Q/QZcMWqEhBlh+htbEpZhMrBQrlJ0hBywLLyrJ0WZbje3bqOvPNLHPWrDvdOE9ONmfe78zkzMs335wzWJhJQrBQweS/wTQ6QWgYHdoIOcecOe05O+t2WkutO+p2ZF3Ksg/YV9ZW6FATYajR3nveg60H9327r3O8c35lHgp+r05dPdJzBL73TPSQ8SaCKIxGLsPlop+K0JHrEkPuoT31e5qGmmjARACF0agYyGVNlyVm/pzZXrN9fHGcBkz0UBid+31u93i3XFFT80vN8cvHqWqih8Lo1NpUqS5vwh3vnd223VQ10UNh9NbyrcFQUK6oCawHUipSqGqiB83oBf+CXFGDMp1mS6OqiR4Ko7FexkpOrqhpHGw82nOUqiZ6KIzGrkRuorW0dJMmOy+hOCfYGzb2RBFv6HRO0gEJw/U7y+pgL1bwmTxexN6sZ31TdEwEhdG+gA+7EqyXpUO1uZH20cWL8hMTRt1N9tBXzCJrOIRoCPJpSO2RAp4HmtCdIfZ+2JWgEBN9LbR28seTGU0Zue1tMLp+YIAMSADzfvbkKX4/eb28j4YODiGin3heqmIlLja5hAUCu+nmGY3JWKvpMAlqNGgebsauBOvlqSX+JEx7p7EbTLen53XlzfmWUioqXikrc68Y8N2juJ/fyVsNChGHEE//rBANYWaZz+TRQqpLaBgNsPfDrgSpbS21YtV87IdjrlkX9JZbt5DOma2t9ITo5F+5glN22WwL/n+yDv00mw06orKxOqQ5+J04hhViwzAXETIcJDVm8uxZqktoGx2Nj9t43Wgaul/ERQiGQvtbWnDWgZYW9CXlQFjZ/7ciyHNn+Z2MexTimIeLz59TiIln0M1e+IbPpOAaDUnEYPTi6iqKxpbycs/qKo1tCslfKcffPn9enuMiPPY1vxO/ckeFQ4h46cdGqUWoidE/y54q5tPY5WDrGzQqIXot4BgchEE57e00IMCw2/1qZSVO/7SjA78o9INzcxsbrL+fnTnDDh9mmZn8F30oG1Hm+nABv5mQMopDS/h1HxtqTzWbABMe9sxpPoe9zezeOo1GELqWhPS8t46M0IAYHbdvR1aHbaOjbjfLz2eFhez6dba4yAfgF30o0BFVE8+Mjh/wFxPI+I5mAEHU6Ls+38vhTFwOBGhMDF8gkFpbC5ffsdv/uBs6dIj19dExEtARVXv9YNbop8NFY3aZ6gRRo+tu3IBHnzmdNCBMXldXJKPfL74WzWUJRE+coDUknqsOdZXQbAJYwluVTbOZI3Qt8GFzMwxyjo3RgBiN4fr+elXVpZGRLWXl6PdOTtJBSlBDUK/lnIrjOlrtqWYTQDJaF6FrTXu9sOa1ysrVoM5HVE1GFxZQcyJ/p+xzv6K/rbr6N6+XDpUBl0tKFIrbz78qWB6YnWFMCBld4XLBms+7df75ook/GNzb0GCV7U1Qfz9p64TyQWNjYD3qe9rj4SMJtQP3MyjSDPzWIRHPjH7X4YAvfXoPuyZf9Pbi3PcuXIh4mp3NllYC6XY79C+jl2o8PBipxjnBttn4MgMNnWgfcRJGPI2OL8hTj3LloIlmRicvBhiNykvecpqoa3RSY4DRcLAwyicuOepVR1JjgNFYHWONHL04czTX0UmNAUYD7Pr+xc4wqTHGaBb2OtZvHUmNYUazcA2J6etdUmOk0f8rTKMTxF91RG0D1SwYGwAAAABJRU5ErkJggg=="
        },
        msg: "\u4E00\u5207ok"
      };
    }
  },
  {
    url: "/auth/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        data: {
          accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjE2YWJkNTlkOTAxNzQwZDliYmI3ZjczODBhZDkyNzNhIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZGVwdElkIjoxLCJkYXRhU2NvcGUiOjEsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNjkxMTAzMzgyfQ.P4cuIfmPepl3HuguhMS7NXn5a7IUPpsLbmtA_rHOhHk",
          tokenType: "Bearer",
          refreshToken: null,
          expires: null
        },
        msg: "\u4E00\u5207ok"
      };
    }
  },
  {
    url: "/users/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          userId: 2,
          nickname: "\u7CFB\u7EDF\u7BA1\u7406\u5458",
          avatar: "https://oss.youlai.tech/youlai-boot/2023/05/16/811270ef31f548af9cffc026dfc3777b.gif",
          roles: ["ADMIN"],
          perms: [
            "sys:menu:delete",
            "sys:dept:edit",
            "sys:dict_type:add",
            "sys:dict:edit",
            "sys:dict:delete",
            "sys:dict_type:edit",
            "sys:menu:add",
            "sys:user:add",
            "sys:role:edit",
            "sys:dept:delete",
            "sys:user:edit",
            "sys:user:delete",
            "sys:user:reset_pwd",
            "sys:dept:add",
            "sys:role:delete",
            "sys:dict_type:delete",
            "sys:menu:edit",
            "sys:dict:add",
            "sys:role:add"
          ]
        },
        msg: "\u4E00\u5207ok"
      };
    }
  },
  {
    url: "/auth/logout",
    method: "delete",
    response: () => {
      return {
        code: 200,
        data: {},
        msg: "string"
      };
    }
  },
  {
    url: "/users/page",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          list: [
            {
              id: 2,
              username: "admin",
              nickname: "\u7CFB\u7EDF\u7BA1\u7406\u5458",
              mobile: "17621210366",
              genderLabel: "\u7537",
              avatar: "https://oss.youlai.tech/youlai-boot/2023/05/16/811270ef31f548af9cffc026dfc3777b.gif",
              email: null,
              status: 1,
              deptName: "\u6709\u6765\u6280\u672F",
              roleNames: "\u7CFB\u7EDF\u7BA1\u7406\u5458",
              createTime: "2019-10-10"
            },
            {
              id: 3,
              username: "test",
              nickname: "\u6D4B\u8BD5\u5C0F\u7528\u6237",
              mobile: "17621210366",
              genderLabel: "\u7537",
              avatar: "https://oss.youlai.tech/youlai-boot/2023/05/16/811270ef31f548af9cffc026dfc3777b.gif",
              email: null,
              status: 1,
              deptName: "\u6D4B\u8BD5\u90E8\u95E8",
              roleNames: "\u8BBF\u95EE\u6E38\u5BA2",
              createTime: "2021-06-04"
            }
          ],
          total: 2
        },
        msg: "\u4E00\u5207ok"
      };
    }
  },
  {
    url: "/users/:id/form",
    method: "get",
    response: ({url}) => {
      const id = url.match(/\/api\/v1\/users\/(\d+)\/form/)[1];
      let formData = null;
      if (id == 2) {
        formData = {
          id: 2,
          username: "admin",
          nickname: "\u7CFB\u7EDF\u7BA1\u7406\u5458",
          mobile: "17621210366",
          gender: 1,
          avatar: "https://oss.youlai.tech/youlai-boot/2023/05/16/811270ef31f548af9cffc026dfc3777b.gif",
          email: "",
          status: 1,
          deptId: 1,
          roleIds: [2]
        };
      } else if (id == 3) {
        formData = {
          id: 3,
          username: "test",
          nickname: "\u6D4B\u8BD5\u5C0F\u7528\u6237",
          mobile: "17621210366",
          gender: 1,
          avatar: "https://oss.youlai.tech/youlai-boot/2023/05/16/811270ef31f548af9cffc026dfc3777b.gif",
          email: "youlaitech@163.com",
          status: 1,
          deptId: 3,
          roleIds: [3]
        };
      }
      return {
        code: 200,
        data: formData,
        msg: "\u4E00\u5207ok"
      };
    }
  }
];
export {
  user_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL3VzZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcd29ya3NwYWNlXFxcXHdvcmtzdGF0aW9uLXVpXFxcXG1vY2tcXFxcdXNlci50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcd29ya3N0YXRpb24tdWlcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRDovd29ya3NwYWNlL3dvcmtzdGF0aW9uLXVpL21vY2svdXNlci50c1wiO2ltcG9ydCB7IE1vY2tNZXRob2QgfSBmcm9tIFwidml0ZS1wbHVnaW4tbW9ja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB1cmw6IFwiL2FwaS9oZWxsb193b3JsZFwiLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKHJlcXVlc3QpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1zZzogXCJoZWxsbyB3b3JsZFwiLFxuICAgICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiL2FwaS92MS9hdXRoL2NhcHRjaGFcIixcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNhcHRjaGFLZXk6IFwiNTM0YjhlZjJiMGEyNDEyMWJlYzc2MzkxZGRkMTU5ZjlcIixcbiAgICAgICAgICBjYXB0Y2hhQmFzZTY0OlxuICAgICAgICAgICAgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUhnQUFBQWtDQUlBQUFETlNta0pBQUFGS1VsRVFWUjRYdTJaWFV3Y1ZSaUdWNzB3TVdvMDhWNU52UFhDckRiRmFHcE1hWlcyaHFReGFvaUpUUnNhTUJDTlNZdHBhMkpUS2lGU2VsRmErUS9RWmNNV3FFaEJsaCtodGJFcFpoTXJCUXJsSjBoQnl3TEx5ckowV1piamUzYnFPdlBOTEhQV3JEdmRPRTlPTm1mZTc4emt6TXMzMzV3eldKaEpRckJRd2VTL3dUUTZRV2dZSGRvSU9jZWNPZTA1Tyt0MldrdXRPK3AyWkYzS3NnL1lWOVpXNkZBVFlhalIzbnZlZzYwSDkzMjdyM084YzM1bEhncCtyMDVkUGRKekJMNzNUUFNROFNhQ0tJeEdMc1Bsb3ArSzBKSHJFa1B1b1QzMWU1cUdtbWpBUkFDRjBhZ1l5R1ZObHlWbS9welpYck45ZkhHY0JrejBVQmlkKzMxdTkzaTNYRkZUODB2TjhjdkhxV3FpaDhMbzFOcFVxUzV2d2gzdm5kMjIzVlExMFVOaDlOYnlyY0ZRVUs2b0Nhd0hVaXBTcUdxaUI4M29CZitDWEZHRE1wMW1TNk9xaVI0S283RmV4a3BPcnFocEhHdzgybk9VcWlaNktJekdya1J1b3JXMGRKTW1PeStoT0NmWUd6YjJSQkZ2NkhSTzBnRUp3L1U3eStwZ0wxYndtVHhleE42c1ozMVRkRXdFaGRHK2dBKzdFcXlYcFVPMXVaSDIwY1dMOGhNVFJ0MU45dEJYekNKck9JUm9DUEpwU08yUkFwNEhtdENkSWZaKzJKV2dFQk45TGJSMjhzZVRHVTBadWUxdE1McCtZSUFNU0FEemZ2YmtLWDQvZWIyOGo0WU9EaUdpbjNoZXFtSWxMamE1aEFVQ3Urbm1HWTNKV0t2cE1BbHFOR2dlYnNhdUJPdmxxU1grSkV4N3A3RWJUTGVuNTNYbHpmbVdVaW9xWGlrcmM2OFk4TjJqdUovZnlWc05DaEdIRUUvL3JCQU5ZV2FaeitUUlFxcExhQmdOc1BmRHJnU3BiUzIxWXRWODdJZGpybGtYOUpaYnQ1RE9tYTJ0OUlUbzVGKzVnbE4yMld3TC9uK3lEdjAwbXcwNm9yS3hPcVE1K0owNGhoVml3ekFYRVRJY0pEVm04dXhacWt0b0d4Mk5qOXQ0M1dnYXVsL0VSUWlHUXZ0YlduRFdnWllXOUNYbFFGalovN2NpeUhObitaMk1leFRpbUllTHo1OVRpSWxuME0xZStJYlBwT0FhRFVuRVlQVGk2aXFLeHBieWNzL3FLbzF0Q3NsZktjZmZQbjllbnVNaVBQWTF2eE8vY2tlRlE0aDQ2Y2RHcVVXb2lkRS95NTRxNXRQWTVXRHJHelFxSVhvdDRCZ2NoRUU1N2UwMElNQ3cyLzFxWlNWTy83U2pBNzhvOUlOemN4c2JyTCtmblRuRERoOW1tWm44RjMwb0cxSG0rbkFCdjVtUU1vcERTL2gxSHh0cVR6V2JBQk1lOXN4cFBvZTl6ZXplT28xR0VMcVdoUFM4dDQ2TTBJQVlIYmR2UjFhSGJhT2piamZMejJlRmhlejZkYmE0eUFmZ0YzMG8wQkZWRTgrTWpoL3dGeFBJK0k1bUFFSFU2THMrMzh2aFRGd09CR2hNREY4Z2tGcGJDNWZmc2R2L3VCczZkSWoxOWRFeEV0QVJWWHY5WU5ib3A4TkZZM2FaNmdSUm8rdHUzSUJIbnptZE5DQk1YbGRYSktQZkw3NFd6V1VKUkUrY29EVWtucXNPZFpYUWJBSll3bHVWVGJPWkkzUXQ4R0Z6TXd4eWpvM1JnQmlONGZyK2VsWFZwWkdSTFdYbDZQZE9UdEpCU2xCRFVLL2xuSXJqT2xydHFXWVRRREphRjZGclRYdTlzT2ExeXNyVm9NNUhWRTFHRnhaUWN5Si9wK3h6djZLL3JicjZONitYRHBVQmwwdEtGSXJiejc4cVdCNlluV0ZNQ0JsZDRYTEJtcys3ZGY3NW9vay9HTnpiMEdDVjdVMVFmejlwNjRUeVFXTmpZRDNxZTlyajRTTUp0UVAzTXlqU0RQeldJUkhQakg3WDRZQXZmWG9QdXlaZjlQYmkzUGN1WEloNG1wM05sbFlDNlhZNzlDK2psMm84UEJpcHhqbkJ0dG40TWdNTm5XZ2ZjUkpHUEkyT0w4aFRqM0xsb0lsbVJpY3ZCaGlOeWt2ZWNwcW9hM1JTWTREUmNMQXd5aWN1T2VwVlIxSmpnTkZZSFdPTkhMMDRjelRYMFVtTkFVWUQ3UHIreGM0d3FUSEdhQmIyT3RadkhVbU5ZVWF6Y0EySjZldGRVbU9rMGY4clRLTVR4RjkxUkcwRDFTd1lHd0FBQUFCSlJVNUVya0pnZ2c9PVwiLFxuICAgICAgICB9LFxuICAgICAgICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXBpL3YxL2F1dGgvbG9naW5cIixcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBhY2Nlc3NUb2tlbjpcbiAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKemRXSWlPaUpoWkcxcGJpSXNJbXAwYVNJNklqRTJZV0prTlRsa09UQXhOelF3WkRsaVltSTNaamN6T0RCaFpEa3lOek5oSWl3aWRYTmxja2xrSWpveUxDSjFjMlZ5Ym1GdFpTSTZJbUZrYldsdUlpd2laR1Z3ZEVsa0lqb3hMQ0prWVhSaFUyTnZjR1VpT2pFc0ltRjFkR2h2Y21sMGFXVnpJanBiSWxKUFRFVmZRVVJOU1U0aVhTd2laWGh3SWpveE5qa3hNVEF6TXpneWZRLlA0Y3VJZm1QZXBsM0h1Z3VoTVM3TlhuNWE3SVVQcHNMYm10QV9ySE9oSGtcIixcbiAgICAgICAgICB0b2tlblR5cGU6IFwiQmVhcmVyXCIsXG4gICAgICAgICAgcmVmcmVzaFRva2VuOiBudWxsLFxuICAgICAgICAgIGV4cGlyZXM6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hcGkvdjEvdXNlcnMvbWVcIixcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVzZXJJZDogMixcbiAgICAgICAgICBuaWNrbmFtZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NThcIixcbiAgICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgICBcImh0dHBzOi8vb3NzLnlvdWxhaS50ZWNoL3lvdWxhaS1ib290LzIwMjMvMDUvMTYvODExMjcwZWYzMWY1NDhhZjljZmZjMDI2ZGZjMzc3N2IuZ2lmXCIsXG4gICAgICAgICAgcm9sZXM6IFtcIkFETUlOXCJdLFxuICAgICAgICAgIHBlcm1zOiBbXG4gICAgICAgICAgICBcInN5czptZW51OmRlbGV0ZVwiLFxuICAgICAgICAgICAgXCJzeXM6ZGVwdDplZGl0XCIsXG4gICAgICAgICAgICBcInN5czpkaWN0X3R5cGU6YWRkXCIsXG4gICAgICAgICAgICBcInN5czpkaWN0OmVkaXRcIixcbiAgICAgICAgICAgIFwic3lzOmRpY3Q6ZGVsZXRlXCIsXG4gICAgICAgICAgICBcInN5czpkaWN0X3R5cGU6ZWRpdFwiLFxuICAgICAgICAgICAgXCJzeXM6bWVudTphZGRcIixcbiAgICAgICAgICAgIFwic3lzOnVzZXI6YWRkXCIsXG4gICAgICAgICAgICBcInN5czpyb2xlOmVkaXRcIixcbiAgICAgICAgICAgIFwic3lzOmRlcHQ6ZGVsZXRlXCIsXG4gICAgICAgICAgICBcInN5czp1c2VyOmVkaXRcIixcbiAgICAgICAgICAgIFwic3lzOnVzZXI6ZGVsZXRlXCIsXG4gICAgICAgICAgICBcInN5czp1c2VyOnJlc2V0X3B3ZFwiLFxuICAgICAgICAgICAgXCJzeXM6ZGVwdDphZGRcIixcbiAgICAgICAgICAgIFwic3lzOnJvbGU6ZGVsZXRlXCIsXG4gICAgICAgICAgICBcInN5czpkaWN0X3R5cGU6ZGVsZXRlXCIsXG4gICAgICAgICAgICBcInN5czptZW51OmVkaXRcIixcbiAgICAgICAgICAgIFwic3lzOmRpY3Q6YWRkXCIsXG4gICAgICAgICAgICBcInN5czpyb2xlOmFkZFwiLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hcGkvdjEvYXV0aC9sb2dvdXRcIixcbiAgICBtZXRob2Q6IFwiZGVsZXRlXCIsXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIG1zZzogXCJzdHJpbmdcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXBpL3YxL3VzZXJzL3BhZ2VcIixcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBcImFkbWluXCIsXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiBcIlx1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1OFwiLFxuICAgICAgICAgICAgICBtb2JpbGU6IFwiMTc2MjEyMTAzNjZcIixcbiAgICAgICAgICAgICAgZ2VuZGVyTGFiZWw6IFwiXHU3NTM3XCIsXG4gICAgICAgICAgICAgIGF2YXRhcjpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vb3NzLnlvdWxhaS50ZWNoL3lvdWxhaS1ib290LzIwMjMvMDUvMTYvODExMjcwZWYzMWY1NDhhZjljZmZjMDI2ZGZjMzc3N2IuZ2lmXCIsXG4gICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgICAgIGRlcHROYW1lOiBcIlx1NjcwOVx1Njc2NVx1NjI4MFx1NjcyRlwiLFxuICAgICAgICAgICAgICByb2xlTmFtZXM6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4XCIsXG4gICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IFwiMjAxOS0xMC0xMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgbmlja25hbWU6IFwiXHU2RDRCXHU4QkQ1XHU1QzBGXHU3NTI4XHU2MjM3XCIsXG4gICAgICAgICAgICAgIG1vYmlsZTogXCIxNzYyMTIxMDM2NlwiLFxuICAgICAgICAgICAgICBnZW5kZXJMYWJlbDogXCJcdTc1MzdcIixcbiAgICAgICAgICAgICAgYXZhdGFyOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9vc3MueW91bGFpLnRlY2gveW91bGFpLWJvb3QvMjAyMy8wNS8xNi84MTEyNzBlZjMxZjU0OGFmOWNmZmMwMjZkZmMzNzc3Yi5naWZcIixcbiAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgZGVwdE5hbWU6IFwiXHU2RDRCXHU4QkQ1XHU5MEU4XHU5NUU4XCIsXG4gICAgICAgICAgICAgIHJvbGVOYW1lczogXCJcdThCQkZcdTk1RUVcdTZFMzhcdTVCQTJcIixcbiAgICAgICAgICAgICAgY3JlYXRlVGltZTogXCIyMDIxLTA2LTA0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdG90YWw6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICB1cmw6IFwiL2FwaS92MS91c2Vycy86aWQvZm9ybVwiLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKHsgdXJsIH0pID0+IHtcbiAgICAgIGNvbnN0IGlkID0gdXJsLm1hdGNoKC9cXC9hcGlcXC92MVxcL3VzZXJzXFwvKFxcZCspXFwvZm9ybS8pWzFdO1xuICAgICAgbGV0IGZvcm1EYXRhID0gbnVsbDtcbiAgICAgIGlmIChpZCA9PSAyKSB7XG4gICAgICAgIGZvcm1EYXRhID0ge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIHVzZXJuYW1lOiBcImFkbWluXCIsXG4gICAgICAgICAgbmlja25hbWU6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4XCIsXG4gICAgICAgICAgbW9iaWxlOiBcIjE3NjIxMjEwMzY2XCIsXG4gICAgICAgICAgZ2VuZGVyOiAxLFxuICAgICAgICAgIGF2YXRhcjpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9vc3MueW91bGFpLnRlY2gveW91bGFpLWJvb3QvMjAyMy8wNS8xNi84MTEyNzBlZjMxZjU0OGFmOWNmZmMwMjZkZmMzNzc3Yi5naWZcIixcbiAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgZGVwdElkOiAxLFxuICAgICAgICAgIHJvbGVJZHM6IFsyXSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoaWQgPT0gMykge1xuICAgICAgICBmb3JtRGF0YSA9IHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICB1c2VybmFtZTogXCJ0ZXN0XCIsXG4gICAgICAgICAgbmlja25hbWU6IFwiXHU2RDRCXHU4QkQ1XHU1QzBGXHU3NTI4XHU2MjM3XCIsXG4gICAgICAgICAgbW9iaWxlOiBcIjE3NjIxMjEwMzY2XCIsXG4gICAgICAgICAgZ2VuZGVyOiAxLFxuICAgICAgICAgIGF2YXRhcjpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9vc3MueW91bGFpLnRlY2gveW91bGFpLWJvb3QvMjAyMy8wNS8xNi84MTEyNzBlZjMxZjU0OGFmOWNmZmMwMjZkZmMzNzc3Yi5naWZcIixcbiAgICAgICAgICBlbWFpbDogXCJ5b3VsYWl0ZWNoQDE2My5jb21cIixcbiAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgZGVwdElkOiAzLFxuICAgICAgICAgIHJvbGVJZHM6IFszXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG5dIGFzIE1vY2tNZXRob2RbXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxJQUFPLGVBQVE7RUFDYjtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxDQUFDLFlBQVk7QUFDckIsYUFBTztRQUNMLEtBQUs7UUFDTCxTQUFTLFFBQVE7TUFDbkI7SUFDRjtFQUNGO0VBQ0E7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87UUFDTCxNQUFNO1FBQ04sTUFBTTtVQUNKLFlBQVk7VUFDWixlQUNFO1FBQ0o7UUFDQSxLQUFLO01BQ1A7SUFDRjtFQUNGO0VBQ0E7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87UUFDTCxNQUFNO1FBQ04sTUFBTTtVQUNKLGFBQ0U7VUFDRixXQUFXO1VBQ1gsY0FBYztVQUNkLFNBQVM7UUFDWDtRQUNBLEtBQUs7TUFDUDtJQUNGO0VBQ0Y7RUFDQTtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztRQUNMLE1BQU07UUFDTixNQUFNO1VBQ0osUUFBUTtVQUNSLFVBQVU7VUFDVixRQUNFO1VBQ0YsT0FBTyxDQUFDLE9BQU87VUFDZixPQUFPO1lBQ0w7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsS0FBSztNQUNQO0lBQ0Y7RUFDRjtFQUNBO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLE1BQU07QUFDZCxhQUFPO1FBQ0wsTUFBTTtRQUNOLE1BQU0sQ0FBQztRQUNQLEtBQUs7TUFDUDtJQUNGO0VBQ0Y7RUFDQTtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztRQUNMLE1BQU07UUFDTixNQUFNO1VBQ0osTUFBTTtZQUNKO2NBQ0UsSUFBSTtjQUNKLFVBQVU7Y0FDVixVQUFVO2NBQ1YsUUFBUTtjQUNSLGFBQWE7Y0FDYixRQUNFO2NBQ0YsT0FBTztjQUNQLFFBQVE7Y0FDUixVQUFVO2NBQ1YsV0FBVztjQUNYLFlBQVk7WUFDZDtZQUNBO2NBQ0UsSUFBSTtjQUNKLFVBQVU7Y0FDVixVQUFVO2NBQ1YsUUFBUTtjQUNSLGFBQWE7Y0FDYixRQUNFO2NBQ0YsT0FBTztjQUNQLFFBQVE7Y0FDUixVQUFVO2NBQ1YsV0FBVztjQUNYLFlBQVk7WUFDZDtVQUNGO1VBQ0EsT0FBTztRQUNUO1FBQ0EsS0FBSztNQUNQO0lBQ0Y7RUFDRjtFQUVBO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLENBQUMsRUFBRSxJQUFJLE1BQU07QUFDckIsWUFBTSxLQUFLLElBQUksTUFBTSwrQkFBK0IsRUFBRSxDQUFDO0FBQ3ZELFVBQUksV0FBVztBQUNmLFVBQUksTUFBTSxHQUFHO0FBQ1gsbUJBQVc7VUFDVCxJQUFJO1VBQ0osVUFBVTtVQUNWLFVBQVU7VUFDVixRQUFRO1VBQ1IsUUFBUTtVQUNSLFFBQ0U7VUFDRixPQUFPO1VBQ1AsUUFBUTtVQUNSLFFBQVE7VUFDUixTQUFTLENBQUMsQ0FBQztRQUNiO01BQ0YsV0FBVyxNQUFNLEdBQUc7QUFDbEIsbUJBQVc7VUFDVCxJQUFJO1VBQ0osVUFBVTtVQUNWLFVBQVU7VUFDVixRQUFRO1VBQ1IsUUFBUTtVQUNSLFFBQ0U7VUFDRixPQUFPO1VBQ1AsUUFBUTtVQUNSLFFBQVE7VUFDUixTQUFTLENBQUMsQ0FBQztRQUNiO01BQ0Y7QUFFQSxhQUFPO1FBQ0wsTUFBTTtRQUNOLE1BQU07UUFDTixLQUFLO01BQ1A7SUFDRjtFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
