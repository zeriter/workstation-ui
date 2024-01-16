// mock/dict.bundled_042qh2cc2234.bundled_37mgk6keffb.mjs
var dict_default = [
  {
    url: "/dict/:code/options",
    method: "get",
    response: ({ url }) => {
      const typeCode = url.match(/\/api\/v1\/dict\/(\w+)\/options/)[1];
      let list = null;
      if (typeCode == "gender") {
        list = [
          {
            value: "1",
            label: "\u7537"
          },
          {
            value: "2",
            label: "\u5973"
          },
          {
            value: "0",
            label: "\u672A\u77E5"
          }
        ];
      }
      return {
        code: 200,
        data: list,
        msg: "\u4E00\u5207ok"
      };
    }
  }
];
export {
  dict_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svZGljdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcd29ya3N0YXRpb24tdWlcXFxcbW9ja1xcXFxkaWN0LnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFx3b3Jrc3RhdGlvbi11aVxcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi93b3Jrc3BhY2Uvd29ya3N0YXRpb24tdWkvbW9jay9kaWN0LnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gXCJ2aXRlLXBsdWdpbi1tb2NrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHVybDogXCIvYXBpL3YxL2RpY3QvOmNvZGUvb3B0aW9uc1wiLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKHsgdXJsIH0pID0+IHtcbiAgICAgIGNvbnN0IHR5cGVDb2RlID0gdXJsLm1hdGNoKC9cXC9hcGlcXC92MVxcL2RpY3RcXC8oXFx3KylcXC9vcHRpb25zLylbMV07XG5cbiAgICAgIGxldCBsaXN0ID0gbnVsbDtcblxuICAgICAgaWYgKHR5cGVDb2RlID09IFwiZ2VuZGVyXCIpIHtcbiAgICAgICAgbGlzdCA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCIxXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJcdTc1MzdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcIjJcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlx1NTk3M1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwiMFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiXHU2NzJBXHU3N0U1XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiBsaXN0LFxuICAgICAgICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbl0gYXMgTW9ja01ldGhvZFtdO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLElBQU8sZUFBUTtFQUNiO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLENBQUMsRUFBRSxJQUFJLE1BQU07QUFDckIsWUFBTSxXQUFXLElBQUksTUFBTSxpQ0FBaUMsRUFBRSxDQUFDO0FBRS9ELFVBQUksT0FBTztBQUVYLFVBQUksWUFBWSxVQUFVO0FBQ3hCLGVBQU87VUFDTDtZQUNFLE9BQU87WUFDUCxPQUFPO1VBQ1Q7VUFDQTtZQUNFLE9BQU87WUFDUCxPQUFPO1VBQ1Q7VUFDQTtZQUNFLE9BQU87WUFDUCxPQUFPO1VBQ1Q7UUFDRjtNQUNGO0FBRUEsYUFBTztRQUNMLE1BQU07UUFDTixNQUFNO1FBQ04sS0FBSztNQUNQO0lBQ0Y7RUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
