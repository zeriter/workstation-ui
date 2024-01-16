// mock/role.ts
var role_default = [
  {
    url: "/roles/options",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: [
          {
            value: 2,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u5458"
          },
          {
            value: 4,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u54581"
          },
          {
            value: 5,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u54582"
          },
          {
            value: 6,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u54583"
          },
          {
            value: 7,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u54584"
          },
          {
            value: 8,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u54585"
          },
          {
            value: 9,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u54586"
          },
          {
            value: 10,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u54587"
          },
          {
            value: 11,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u54588"
          },
          {
            value: 12,
            label: "\u7CFB\u7EDF\u7BA1\u7406\u54589"
          },
          {
            value: 3,
            label: "\u8BBF\u95EE\u6E38\u5BA2"
          }
        ],
        msg: "\u4E00\u5207ok"
      };
    }
  },
  {
    url: "/roles/page",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          list: [
            {
              id: 2,
              name: "\u7CFB\u7EDF\u7BA1\u7406\u5458",
              code: "ADMIN",
              status: 1,
              sort: 2,
              createTime: "2021-03-25 12:39:54",
              updateTime: null
            },
            {
              id: 3,
              name: "\u8BBF\u95EE\u6E38\u5BA2",
              code: "GUEST",
              status: 1,
              sort: 3,
              createTime: "2021-05-26 15:49:05",
              updateTime: "2019-05-05 16:00:00"
            },
            {
              id: 4,
              name: "\u7CFB\u7EDF\u7BA1\u7406\u54581",
              code: "ADMIN1",
              status: 1,
              sort: 2,
              createTime: "2021-03-25 12:39:54",
              updateTime: null
            },
            {
              id: 5,
              name: "\u7CFB\u7EDF\u7BA1\u7406\u54582",
              code: "ADMIN1",
              status: 1,
              sort: 2,
              createTime: "2021-03-25 12:39:54",
              updateTime: null
            },
            {
              id: 6,
              name: "\u7CFB\u7EDF\u7BA1\u7406\u54583",
              code: "ADMIN1",
              status: 1,
              sort: 2,
              createTime: "2021-03-25 12:39:54",
              updateTime: null
            },
            {
              id: 7,
              name: "\u7CFB\u7EDF\u7BA1\u7406\u54584",
              code: "ADMIN1",
              status: 1,
              sort: 2,
              createTime: "2021-03-25 12:39:54",
              updateTime: null
            },
            {
              id: 8,
              name: "\u7CFB\u7EDF\u7BA1\u7406\u54585",
              code: "ADMIN1",
              status: 1,
              sort: 2,
              createTime: "2021-03-25 12:39:54",
              updateTime: null
            },
            {
              id: 9,
              name: "\u7CFB\u7EDF\u7BA1\u7406\u54586",
              code: "ADMIN1",
              status: 1,
              sort: 2,
              createTime: "2021-03-25 12:39:54",
              updateTime: null
            },
            {
              id: 10,
              name: "\u7CFB\u7EDF\u7BA1\u7406\u54587",
              code: "ADMIN1",
              status: 1,
              sort: 2,
              createTime: "2021-03-25 12:39:54",
              updateTime: null
            },
            {
              id: 11,
              name: "\u7CFB\u7EDF\u7BA1\u7406\u54588",
              code: "ADMIN1",
              status: 1,
              sort: 2,
              createTime: "2021-03-25 12:39:54",
              updateTime: null
            }
          ],
          total: 11
        },
        msg: "\u4E00\u5207ok"
      };
    }
  }
];
export {
  role_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9yb2xlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFx3b3Jrc3RhdGlvbi11aVxcXFxtb2NrXFxcXHJvbGUudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcd29ya3NwYWNlXFxcXHdvcmtzdGF0aW9uLXVpXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L3dvcmtzcGFjZS93b3Jrc3RhdGlvbi11aS9tb2NrL3JvbGUudHNcIjtpbXBvcnQgeyBNb2NrTWV0aG9kIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdXJsOiBcIi9yb2xlcy9vcHRpb25zXCIsXG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgICAgICAgIGxhYmVsOiBcIlx1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1OFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IDQsXG4gICAgICAgICAgICBsYWJlbDogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NTgxXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogNSxcbiAgICAgICAgICAgIGxhYmVsOiBcIlx1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1ODJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiA2LFxuICAgICAgICAgICAgbGFiZWw6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4M1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IDcsXG4gICAgICAgICAgICBsYWJlbDogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NTg0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogOCxcbiAgICAgICAgICAgIGxhYmVsOiBcIlx1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1ODVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiA5LFxuICAgICAgICAgICAgbGFiZWw6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4NlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgbGFiZWw6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4N1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IDExLFxuICAgICAgICAgICAgbGFiZWw6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4OFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IDEyLFxuICAgICAgICAgICAgbGFiZWw6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4OVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgICAgICBsYWJlbDogXCJcdThCQkZcdTk1RUVcdTZFMzhcdTVCQTJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvcm9sZXMvcGFnZVwiLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NThcIixcbiAgICAgICAgICAgICAgY29kZTogXCJBRE1JTlwiLFxuICAgICAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgICAgIHNvcnQ6IDIsXG4gICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IFwiMjAyMS0wMy0yNSAxMjozOTo1NFwiLFxuICAgICAgICAgICAgICB1cGRhdGVUaW1lOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgIG5hbWU6IFwiXHU4QkJGXHU5NUVFXHU2RTM4XHU1QkEyXCIsXG4gICAgICAgICAgICAgIGNvZGU6IFwiR1VFU1RcIixcbiAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICBzb3J0OiAzLFxuICAgICAgICAgICAgICBjcmVhdGVUaW1lOiBcIjIwMjEtMDUtMjYgMTU6NDk6MDVcIixcbiAgICAgICAgICAgICAgdXBkYXRlVGltZTogXCIyMDE5LTA1LTA1IDE2OjAwOjAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NTgxXCIsXG4gICAgICAgICAgICAgIGNvZGU6IFwiQURNSU4xXCIsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgc29ydDogMixcbiAgICAgICAgICAgICAgY3JlYXRlVGltZTogXCIyMDIxLTAzLTI1IDEyOjM5OjU0XCIsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NTgyXCIsXG4gICAgICAgICAgICAgIGNvZGU6IFwiQURNSU4xXCIsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgc29ydDogMixcbiAgICAgICAgICAgICAgY3JlYXRlVGltZTogXCIyMDIxLTAzLTI1IDEyOjM5OjU0XCIsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NTgzXCIsXG4gICAgICAgICAgICAgIGNvZGU6IFwiQURNSU4xXCIsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgc29ydDogMixcbiAgICAgICAgICAgICAgY3JlYXRlVGltZTogXCIyMDIxLTAzLTI1IDEyOjM5OjU0XCIsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NTg0XCIsXG4gICAgICAgICAgICAgIGNvZGU6IFwiQURNSU4xXCIsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgc29ydDogMixcbiAgICAgICAgICAgICAgY3JlYXRlVGltZTogXCIyMDIxLTAzLTI1IDEyOjM5OjU0XCIsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NTg1XCIsXG4gICAgICAgICAgICAgIGNvZGU6IFwiQURNSU4xXCIsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgc29ydDogMixcbiAgICAgICAgICAgICAgY3JlYXRlVGltZTogXCIyMDIxLTAzLTI1IDEyOjM5OjU0XCIsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogOSxcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NTg2XCIsXG4gICAgICAgICAgICAgIGNvZGU6IFwiQURNSU4xXCIsXG4gICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgc29ydDogMixcbiAgICAgICAgICAgICAgY3JlYXRlVGltZTogXCIyMDIxLTAzLTI1IDEyOjM5OjU0XCIsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogMTAsXG4gICAgICAgICAgICAgIG5hbWU6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4N1wiLFxuICAgICAgICAgICAgICBjb2RlOiBcIkFETUlOMVwiLFxuICAgICAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgICAgIHNvcnQ6IDIsXG4gICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IFwiMjAyMS0wMy0yNSAxMjozOTo1NFwiLFxuICAgICAgICAgICAgICB1cGRhdGVUaW1lOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDExLFxuICAgICAgICAgICAgICBuYW1lOiBcIlx1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1ODhcIixcbiAgICAgICAgICAgICAgY29kZTogXCJBRE1JTjFcIixcbiAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICBzb3J0OiAyLFxuICAgICAgICAgICAgICBjcmVhdGVUaW1lOiBcIjIwMjEtMDMtMjUgMTI6Mzk6NTRcIixcbiAgICAgICAgICAgICAgdXBkYXRlVGltZTogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0b3RhbDogMTEsXG4gICAgICAgIH0sXG4gICAgICAgIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuXSBhcyBNb2NrTWV0aG9kW107XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsSUFBTyxlQUFRO0FBQUEsRUFDYjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0o7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsUUFDQSxLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osTUFBTTtBQUFBLFlBQ0o7QUFBQSxjQUNFLElBQUk7QUFBQSxjQUNKLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLFFBQVE7QUFBQSxjQUNSLE1BQU07QUFBQSxjQUNOLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxZQUNkO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBSTtBQUFBLGNBQ0osTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGNBQ04sUUFBUTtBQUFBLGNBQ1IsTUFBTTtBQUFBLGNBQ04sWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLFlBQ2Q7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFJO0FBQUEsY0FDSixNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsY0FDUixNQUFNO0FBQUEsY0FDTixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsWUFDZDtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQUk7QUFBQSxjQUNKLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLFFBQVE7QUFBQSxjQUNSLE1BQU07QUFBQSxjQUNOLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxZQUNkO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBSTtBQUFBLGNBQ0osTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGNBQ04sUUFBUTtBQUFBLGNBQ1IsTUFBTTtBQUFBLGNBQ04sWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLFlBQ2Q7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFJO0FBQUEsY0FDSixNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsY0FDUixNQUFNO0FBQUEsY0FDTixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsWUFDZDtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQUk7QUFBQSxjQUNKLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLFFBQVE7QUFBQSxjQUNSLE1BQU07QUFBQSxjQUNOLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxZQUNkO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBSTtBQUFBLGNBQ0osTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGNBQ04sUUFBUTtBQUFBLGNBQ1IsTUFBTTtBQUFBLGNBQ04sWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLFlBQ2Q7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFJO0FBQUEsY0FDSixNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsY0FDUixNQUFNO0FBQUEsY0FDTixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsWUFDZDtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQUk7QUFBQSxjQUNKLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLFFBQVE7QUFBQSxjQUNSLE1BQU07QUFBQSxjQUNOLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxZQUNkO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K