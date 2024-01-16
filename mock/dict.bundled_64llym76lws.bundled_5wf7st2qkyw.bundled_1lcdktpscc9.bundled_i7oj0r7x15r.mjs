// mock/dict.bundled_64llym76lws.bundled_5wf7st2qkyw.bundled_1lcdktpscc9.mjs
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svbW9jay9kaWN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFx3b3Jrc3RhdGlvbi11aVxcXFxtb2NrXFxcXGRpY3QudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcd29ya3NwYWNlXFxcXHdvcmtzdGF0aW9uLXVpXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L3dvcmtzcGFjZS93b3Jrc3RhdGlvbi11aS9tb2NrL2RpY3QudHNcIjtpbXBvcnQgeyBNb2NrTWV0aG9kIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdXJsOiBcIi9hcGkvdjEvZGljdC86Y29kZS9vcHRpb25zXCIsXG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHJlc3BvbnNlOiAoeyB1cmwgfSkgPT4ge1xuICAgICAgY29uc3QgdHlwZUNvZGUgPSB1cmwubWF0Y2goL1xcL2FwaVxcL3YxXFwvZGljdFxcLyhcXHcrKVxcL29wdGlvbnMvKVsxXTtcblxuICAgICAgbGV0IGxpc3QgPSBudWxsO1xuXG4gICAgICBpZiAodHlwZUNvZGUgPT0gXCJnZW5kZXJcIikge1xuICAgICAgICBsaXN0ID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcIjFcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlx1NzUzN1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwiMlwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiXHU1OTczXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCIwXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJcdTY3MkFcdTc3RTVcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IGxpc3QsXG4gICAgICAgIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuXSBhcyBNb2NrTWV0aG9kW107XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsSUFBTyxlQUFRO0VBQ2I7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsQ0FBQyxFQUFFLElBQUksTUFBTTtBQUNyQixZQUFNLFdBQVcsSUFBSSxNQUFNLGlDQUFpQyxFQUFFLENBQUM7QUFFL0QsVUFBSSxPQUFPO0FBRVgsVUFBSSxZQUFZLFVBQVU7QUFDeEIsZUFBTztVQUNMO1lBQ0UsT0FBTztZQUNQLE9BQU87VUFDVDtVQUNBO1lBQ0UsT0FBTztZQUNQLE9BQU87VUFDVDtVQUNBO1lBQ0UsT0FBTztZQUNQLE9BQU87VUFDVDtRQUNGO01BQ0Y7QUFFQSxhQUFPO1FBQ0wsTUFBTTtRQUNOLE1BQU07UUFDTixLQUFLO01BQ1A7SUFDRjtFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
