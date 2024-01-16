// mock/dict.bundled_64llym76lws.mjs
var dict_default = [
  {
    url: "/dict/:code/options",
    method: "get",
    response: ({url}) => {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL2RpY3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcd29ya3NwYWNlXFxcXHdvcmtzdGF0aW9uLXVpXFxcXG1vY2tcXFxcZGljdC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcd29ya3N0YXRpb24tdWlcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRDovd29ya3NwYWNlL3dvcmtzdGF0aW9uLXVpL21vY2svZGljdC50c1wiO2ltcG9ydCB7IE1vY2tNZXRob2QgfSBmcm9tIFwidml0ZS1wbHVnaW4tbW9ja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB1cmw6IFwiL2FwaS92MS9kaWN0Lzpjb2RlL29wdGlvbnNcIixcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcmVzcG9uc2U6ICh7IHVybCB9KSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29kZSA9IHVybC5tYXRjaCgvXFwvYXBpXFwvdjFcXC9kaWN0XFwvKFxcdyspXFwvb3B0aW9ucy8pWzFdO1xuXG4gICAgICBsZXQgbGlzdCA9IG51bGw7XG5cbiAgICAgIGlmICh0eXBlQ29kZSA9PSBcImdlbmRlclwiKSB7XG4gICAgICAgIGxpc3QgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwiMVwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiXHU3NTM3XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCIyXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJcdTU5NzNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcIjBcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlx1NjcyQVx1NzdFNVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YTogbGlzdCxcbiAgICAgICAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG5dIGFzIE1vY2tNZXRob2RbXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxJQUFPLGVBQVE7RUFDYjtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxDQUFDLEVBQUUsSUFBSSxNQUFNO0FBQ3JCLFlBQU0sV0FBVyxJQUFJLE1BQU0saUNBQWlDLEVBQUUsQ0FBQztBQUUvRCxVQUFJLE9BQU87QUFFWCxVQUFJLFlBQVksVUFBVTtBQUN4QixlQUFPO1VBQ0w7WUFDRSxPQUFPO1lBQ1AsT0FBTztVQUNUO1VBQ0E7WUFDRSxPQUFPO1lBQ1AsT0FBTztVQUNUO1VBQ0E7WUFDRSxPQUFPO1lBQ1AsT0FBTztVQUNUO1FBQ0Y7TUFDRjtBQUVBLGFBQU87UUFDTCxNQUFNO1FBQ04sTUFBTTtRQUNOLEtBQUs7TUFDUDtJQUNGO0VBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
