// mock/user.bundled_tggr12g9iw8.bundled_rvyradjzio.mjs
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
    response: ({ url }) => {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svdXNlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcd29ya3N0YXRpb24tdWlcXFxcbW9ja1xcXFx1c2VyLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFx3b3Jrc3RhdGlvbi11aVxcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi93b3Jrc3BhY2Uvd29ya3N0YXRpb24tdWkvbW9jay91c2VyLnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gXCJ2aXRlLXBsdWdpbi1tb2NrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHVybDogXCIvYXBpL2hlbGxvX3dvcmxkXCIsXG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHJlc3BvbnNlOiAocmVxdWVzdCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbXNnOiBcImhlbGxvIHdvcmxkXCIsXG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXBpL3YxL2F1dGgvY2FwdGNoYVwiLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2FwdGNoYUtleTogXCI1MzRiOGVmMmIwYTI0MTIxYmVjNzYzOTFkZGQxNTlmOVwiLFxuICAgICAgICAgIGNhcHRjaGFCYXNlNjQ6XG4gICAgICAgICAgICBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSGdBQUFBa0NBSUFBQUROU21rSkFBQUZLVWxFUVZSNFh1MlpYVXdjVlJpR1Y3MHdNV28wOFY1TnZQWENyRGJGYUdwTWFaVzJocVF4YW9pSlRSc2FNQkNOU1l0cGEySlRLaUZTZWxGYStRL1FaY01XcUVoQmxoK2h0YkVwWmhNckJRcmxKMGhCeXdMTHlySjBXWmJqZTNicU92UE5MSFBXckR2ZE9FOU9ObWZlNzh6a3pNczMzNXd6V0poSlFyQlF3ZVMvd1RRNlFXZ1lIZG9JT2NlY09lMDVPK3QyV2t1dE8rcDJaRjNLc2cvWVY5Wlc2RkFUWWFqUjNudmVnNjBIOTMyN3IzTzhjMzVsSGdwK3IwNWRQZEp6Qkw3M1RQU1E4U2FDS0l4R0xzUGxvcCtLMEpIckVrUHVvVDMxZTVxR21takFSQUNGMGFnWXlHVk5seVZtL3B6WlhyTjlmSEdjQmt6MFVCaWQrMzF1OTNpM1hGRlQ4MHZOOGN2SHFXcWloOExvMU5wVXFTNXZ3aDN2bmQyMjNWUTEwVU5oOU5ieXJjRlFVSzZvQ2F3SFVpcFNxR3FpQjgzb0JmK0NYRkdETXAxbVM2T3FpUjRLbzdGZXhrcE9ycWhwSEd3ODJuT1VxaVo2S0l6R3JrUnVvclcwZEpNbU95K2hPQ2ZZR3piMlJCRnY2SFJPMGdFSncvVTd5K3BnTDFid21UeGV4TjZzWjMxVGRFd0VoZEcrZ0ErN0VxeVhwVU8xdVpIMjBjV0w4aE1UUnQxTjl0Qlh6Q0pyT0lSb0NQSnBTTzJSQXA0SG10Q2RJZlorMkpXZ0VCTjlMYlIyOHNlVEdVMFp1ZTF0TUxwK1lJQU1TQUR6ZnZia0tYNC9lYjI4ajRZT0RpR2luM2hlcW1JbExqYTVoQVVDdStubUdZM0pXS3ZwTUFscU5HZ2Vic2F1Qk92bHFTWCtKRXg3cDdFYlRMZW41M1hsemZtV1Vpb3FYaWtyYzY4WThOMmp1Si9meVZzTkNoR0hFRS8vckJBTllXYVp6K1RSUXFwTGFCZ05zUGZEcmdTcGJTMjFZdFY4N0lkanJsa1g5SlpidDVET21hMnQ5SVRvNUYrNWdsTjIyV3dML24reUR2MDBtdzA2b3JLeE9xUTUrSjA0aGhWaXd6QVhFVEljSkRWbTh1eFpxa3RvR3gyTmo5dDQzV2dhdWwvRVJRaUdRdnRiV25EV2daWVc5Q1hsUUZqWi83Y2l5SE5uK1oyTWV4VGltSWVMejU5VGlJbG4wTTFlK0liUHBPQWFEVW5FWVBUaTZpcUt4cGJ5Y3MvcUtvMXRDc2xmS2NmZlBuOWVudU1pUFBZMXZ4Ty9ja2VGUTRoNDZjZEdxVVdvaWRFL3k1NHE1dFBZNVdEckd6UXFJWG90NEJnY2hFRTU3ZTAwSU1DdzIvMXFaU1ZPLzdTakE3OG85SU56Y3hzYnJMK2ZuVG5ERGg5bW1abjhGMzBvRzFIbStuQUJ2NW1RTW9wRFMvaDFIeHRxVHpXYkFCTWU5c3hwUG9lOXplemVPbzFHRUxxV2hQUzh0NDZNMElBWUhiZHZSMWFIYmFPamJqZkx6MmVGaGV6NmRiYTR5QWZnRjMwbzBCRlZFOCtNamgvd0Z4UEkrSTVtQUVIVTZMcyszOHZoVEZ3T0JHaE1ERjhna0ZwYkM1ZmZzZHYvdUJzNmRJajE5ZEV4RXRBUlZYdjlZTmJvcDhORlkzYVo2Z1JSbyt0dTNJQkhuem1kTkNCTVhsZFhKS1BmTDc0V3pXVUpSRStjb0RVa25xc09kWlhRYkFKWXdsdVZUYk9aSTNRdDhHRnpNd3h5am8zUmdCaU40ZnIrZWxYVnBaR1JMV1hsNlBkT1R0SkJTbEJEVUsvbG5JcmpPbHJ0cVdZVFFESmFGNkZyVFh1OXNPYTF5c3JWb001SFZFMUdGeFpRY3lKL3AreHp2NksvcmJyNk42K1hEcFVCbDB0S0ZJcmJ6NzhxV0I2WW5XRk1DQmxkNFhMQm1zKzdkZjc1b29rL0dOemIwR0NWN1UxUWZ6OXA2NFR5UVdOallEM3FlOXJqNFNNSnRRUDNNeWpTRFB6V0lSSFBqSDdYNFlBdmZYb1B1eVpmOVBiaTNQY3VYSWg0bXAzTmxsWUM2WFk3OUMramwybzhQQmlweGpuQnR0bjRNZ01ObldnZmNSSkdQSTJPTDhoVGozTGxvSWxtUmljdkJoaU55a3ZlY3Bxb2EzUlNZNERSY0xBd3lpY3VPZXBWUjFKamdORllIV09OSEwwNGN6VFgwVW1OQVVZRDdQcit4YzR3cVRIR2FCYjJPdFp2SFVtTllVYXpjQTJKNmV0ZFVtT2swZjhyVEtNVHhGOTFSRzBEMVN3WUd3QUFBQUJKUlU1RXJrSmdnZz09XCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hcGkvdjEvYXV0aC9sb2dpblwiLFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGFjY2Vzc1Rva2VuOlxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSmhaRzFwYmlJc0ltcDBhU0k2SWpFMllXSmtOVGxrT1RBeE56UXdaRGxpWW1JM1pqY3pPREJoWkRreU56TmhJaXdpZFhObGNrbGtJam95TENKMWMyVnlibUZ0WlNJNkltRmtiV2x1SWl3aVpHVndkRWxrSWpveExDSmtZWFJoVTJOdmNHVWlPakVzSW1GMWRHaHZjbWwwYVdWeklqcGJJbEpQVEVWZlFVUk5TVTRpWFN3aVpYaHdJam94TmpreE1UQXpNemd5ZlEuUDRjdUlmbVBlcGwzSHVndWhNUzdOWG41YTdJVVBwc0xibXRBX3JIT2hIa1wiLFxuICAgICAgICAgIHRva2VuVHlwZTogXCJCZWFyZXJcIixcbiAgICAgICAgICByZWZyZXNoVG9rZW46IG51bGwsXG4gICAgICAgICAgZXhwaXJlczogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiL2FwaS92MS91c2Vycy9tZVwiLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlcklkOiAyLFxuICAgICAgICAgIG5pY2tuYW1lOiBcIlx1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1OFwiLFxuICAgICAgICAgIGF2YXRhcjpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9vc3MueW91bGFpLnRlY2gveW91bGFpLWJvb3QvMjAyMy8wNS8xNi84MTEyNzBlZjMxZjU0OGFmOWNmZmMwMjZkZmMzNzc3Yi5naWZcIixcbiAgICAgICAgICByb2xlczogW1wiQURNSU5cIl0sXG4gICAgICAgICAgcGVybXM6IFtcbiAgICAgICAgICAgIFwic3lzOm1lbnU6ZGVsZXRlXCIsXG4gICAgICAgICAgICBcInN5czpkZXB0OmVkaXRcIixcbiAgICAgICAgICAgIFwic3lzOmRpY3RfdHlwZTphZGRcIixcbiAgICAgICAgICAgIFwic3lzOmRpY3Q6ZWRpdFwiLFxuICAgICAgICAgICAgXCJzeXM6ZGljdDpkZWxldGVcIixcbiAgICAgICAgICAgIFwic3lzOmRpY3RfdHlwZTplZGl0XCIsXG4gICAgICAgICAgICBcInN5czptZW51OmFkZFwiLFxuICAgICAgICAgICAgXCJzeXM6dXNlcjphZGRcIixcbiAgICAgICAgICAgIFwic3lzOnJvbGU6ZWRpdFwiLFxuICAgICAgICAgICAgXCJzeXM6ZGVwdDpkZWxldGVcIixcbiAgICAgICAgICAgIFwic3lzOnVzZXI6ZWRpdFwiLFxuICAgICAgICAgICAgXCJzeXM6dXNlcjpkZWxldGVcIixcbiAgICAgICAgICAgIFwic3lzOnVzZXI6cmVzZXRfcHdkXCIsXG4gICAgICAgICAgICBcInN5czpkZXB0OmFkZFwiLFxuICAgICAgICAgICAgXCJzeXM6cm9sZTpkZWxldGVcIixcbiAgICAgICAgICAgIFwic3lzOmRpY3RfdHlwZTpkZWxldGVcIixcbiAgICAgICAgICAgIFwic3lzOm1lbnU6ZWRpdFwiLFxuICAgICAgICAgICAgXCJzeXM6ZGljdDphZGRcIixcbiAgICAgICAgICAgIFwic3lzOnJvbGU6YWRkXCIsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiL2FwaS92MS9hdXRoL2xvZ291dFwiLFxuICAgIG1ldGhvZDogXCJkZWxldGVcIixcbiAgICByZXNwb25zZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgbXNnOiBcInN0cmluZ1wiLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hcGkvdjEvdXNlcnMvcGFnZVwiLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgICAgICAgbmlja25hbWU6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4XCIsXG4gICAgICAgICAgICAgIG1vYmlsZTogXCIxNzYyMTIxMDM2NlwiLFxuICAgICAgICAgICAgICBnZW5kZXJMYWJlbDogXCJcdTc1MzdcIixcbiAgICAgICAgICAgICAgYXZhdGFyOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9vc3MueW91bGFpLnRlY2gveW91bGFpLWJvb3QvMjAyMy8wNS8xNi84MTEyNzBlZjMxZjU0OGFmOWNmZmMwMjZkZmMzNzc3Yi5naWZcIixcbiAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgZGVwdE5hbWU6IFwiXHU2NzA5XHU2NzY1XHU2MjgwXHU2NzJGXCIsXG4gICAgICAgICAgICAgIHJvbGVOYW1lczogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NThcIixcbiAgICAgICAgICAgICAgY3JlYXRlVGltZTogXCIyMDE5LTEwLTEwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IFwidGVzdFwiLFxuICAgICAgICAgICAgICBuaWNrbmFtZTogXCJcdTZENEJcdThCRDVcdTVDMEZcdTc1MjhcdTYyMzdcIixcbiAgICAgICAgICAgICAgbW9iaWxlOiBcIjE3NjIxMjEwMzY2XCIsXG4gICAgICAgICAgICAgIGdlbmRlckxhYmVsOiBcIlx1NzUzN1wiLFxuICAgICAgICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL29zcy55b3VsYWkudGVjaC95b3VsYWktYm9vdC8yMDIzLzA1LzE2LzgxMTI3MGVmMzFmNTQ4YWY5Y2ZmYzAyNmRmYzM3NzdiLmdpZlwiLFxuICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICBkZXB0TmFtZTogXCJcdTZENEJcdThCRDVcdTkwRThcdTk1RThcIixcbiAgICAgICAgICAgICAgcm9sZU5hbWVzOiBcIlx1OEJCRlx1OTVFRVx1NkUzOFx1NUJBMlwiLFxuICAgICAgICAgICAgICBjcmVhdGVUaW1lOiBcIjIwMjEtMDYtMDRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0b3RhbDogMixcbiAgICAgICAgfSxcbiAgICAgICAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIHVybDogXCIvYXBpL3YxL3VzZXJzLzppZC9mb3JtXCIsXG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHJlc3BvbnNlOiAoeyB1cmwgfSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSB1cmwubWF0Y2goL1xcL2FwaVxcL3YxXFwvdXNlcnNcXC8oXFxkKylcXC9mb3JtLylbMV07XG4gICAgICBsZXQgZm9ybURhdGEgPSBudWxsO1xuICAgICAgaWYgKGlkID09IDIpIHtcbiAgICAgICAgZm9ybURhdGEgPSB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgICBuaWNrbmFtZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NThcIixcbiAgICAgICAgICBtb2JpbGU6IFwiMTc2MjEyMTAzNjZcIixcbiAgICAgICAgICBnZW5kZXI6IDEsXG4gICAgICAgICAgYXZhdGFyOlxuICAgICAgICAgICAgXCJodHRwczovL29zcy55b3VsYWkudGVjaC95b3VsYWktYm9vdC8yMDIzLzA1LzE2LzgxMTI3MGVmMzFmNTQ4YWY5Y2ZmYzAyNmRmYzM3NzdiLmdpZlwiLFxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICBkZXB0SWQ6IDEsXG4gICAgICAgICAgcm9sZUlkczogWzJdLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChpZCA9PSAzKSB7XG4gICAgICAgIGZvcm1EYXRhID0ge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIHVzZXJuYW1lOiBcInRlc3RcIixcbiAgICAgICAgICBuaWNrbmFtZTogXCJcdTZENEJcdThCRDVcdTVDMEZcdTc1MjhcdTYyMzdcIixcbiAgICAgICAgICBtb2JpbGU6IFwiMTc2MjEyMTAzNjZcIixcbiAgICAgICAgICBnZW5kZXI6IDEsXG4gICAgICAgICAgYXZhdGFyOlxuICAgICAgICAgICAgXCJodHRwczovL29zcy55b3VsYWkudGVjaC95b3VsYWktYm9vdC8yMDIzLzA1LzE2LzgxMTI3MGVmMzFmNTQ4YWY5Y2ZmYzAyNmRmYzM3NzdiLmdpZlwiLFxuICAgICAgICAgIGVtYWlsOiBcInlvdWxhaXRlY2hAMTYzLmNvbVwiLFxuICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICBkZXB0SWQ6IDMsXG4gICAgICAgICAgcm9sZUlkczogWzNdLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbl0gYXMgTW9ja01ldGhvZFtdO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLElBQU8sZUFBUTtFQUNiO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLENBQUMsWUFBWTtBQUNyQixhQUFPO1FBQ0wsS0FBSztRQUNMLFNBQVMsUUFBUTtNQUNuQjtJQUNGO0VBQ0Y7RUFDQTtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztRQUNMLE1BQU07UUFDTixNQUFNO1VBQ0osWUFBWTtVQUNaLGVBQ0U7UUFDSjtRQUNBLEtBQUs7TUFDUDtJQUNGO0VBQ0Y7RUFDQTtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztRQUNMLE1BQU07UUFDTixNQUFNO1VBQ0osYUFDRTtVQUNGLFdBQVc7VUFDWCxjQUFjO1VBQ2QsU0FBUztRQUNYO1FBQ0EsS0FBSztNQUNQO0lBQ0Y7RUFDRjtFQUNBO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLE1BQU07QUFDZCxhQUFPO1FBQ0wsTUFBTTtRQUNOLE1BQU07VUFDSixRQUFRO1VBQ1IsVUFBVTtVQUNWLFFBQ0U7VUFDRixPQUFPLENBQUMsT0FBTztVQUNmLE9BQU87WUFDTDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxLQUFLO01BQ1A7SUFDRjtFQUNGO0VBQ0E7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87UUFDTCxNQUFNO1FBQ04sTUFBTSxDQUFDO1FBQ1AsS0FBSztNQUNQO0lBQ0Y7RUFDRjtFQUNBO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLE1BQU07QUFDZCxhQUFPO1FBQ0wsTUFBTTtRQUNOLE1BQU07VUFDSixNQUFNO1lBQ0o7Y0FDRSxJQUFJO2NBQ0osVUFBVTtjQUNWLFVBQVU7Y0FDVixRQUFRO2NBQ1IsYUFBYTtjQUNiLFFBQ0U7Y0FDRixPQUFPO2NBQ1AsUUFBUTtjQUNSLFVBQVU7Y0FDVixXQUFXO2NBQ1gsWUFBWTtZQUNkO1lBQ0E7Y0FDRSxJQUFJO2NBQ0osVUFBVTtjQUNWLFVBQVU7Y0FDVixRQUFRO2NBQ1IsYUFBYTtjQUNiLFFBQ0U7Y0FDRixPQUFPO2NBQ1AsUUFBUTtjQUNSLFVBQVU7Y0FDVixXQUFXO2NBQ1gsWUFBWTtZQUNkO1VBQ0Y7VUFDQSxPQUFPO1FBQ1Q7UUFDQSxLQUFLO01BQ1A7SUFDRjtFQUNGO0VBRUE7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsQ0FBQyxFQUFBLElBQUUsTUFBSTtBQUNmLFlBQU0sS0FBSyxJQUFJLE1BQU0sK0JBQStCLEVBQUUsQ0FBQztBQUN2RCxVQUFJLFdBQVc7QUFDZixVQUFJLE1BQU0sR0FBRztBQUNYLG1CQUFXO1VBQ1QsSUFBSTtVQUNKLFVBQVU7VUFDVixVQUFVO1VBQ1YsUUFBUTtVQUNSLFFBQVE7VUFDUixRQUNFO1VBQ0YsT0FBTztVQUNQLFFBQVE7VUFDUixRQUFRO1VBQ1IsU0FBUyxDQUFDLENBQUM7UUFDYjtNQUNGLFdBQVcsTUFBTSxHQUFHO0FBQ2xCLG1CQUFXO1VBQ1QsSUFBSTtVQUNKLFVBQVU7VUFDVixVQUFVO1VBQ1YsUUFBUTtVQUNSLFFBQVE7VUFDUixRQUNFO1VBQ0YsT0FBTztVQUNQLFFBQVE7VUFDUixRQUFRO1VBQ1IsU0FBUyxDQUFDLENBQUM7UUFDYjtNQUNGO0FBRUEsYUFBTztRQUNMLE1BQU07UUFDTixNQUFNO1FBQ04sS0FBSztNQUNQO0lBQ0Y7RUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=