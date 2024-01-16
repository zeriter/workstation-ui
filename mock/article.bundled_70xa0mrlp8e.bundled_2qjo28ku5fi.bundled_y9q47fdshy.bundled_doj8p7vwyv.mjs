// mock/article.bundled_70xa0mrlp8e.bundled_2qjo28ku5fi.bundled_y9q47fdshy.mjs
var article_list = [];
var count = 100;
for (let i = 0; i < count; i++) {
  article_list.push({
    id: i,
    timestamp: (/* @__PURE__ */ new Date()).getTime(),
    author: `Author ${i}`,
    reviewer: `reviewer ${i}`,
    title: `Title ${i}`,
    importance: Math.floor(Math.random() * 3) + 1,
    type: ["CN", "US", "JP", "EU"][Math.floor(Math.random() * 4)],
    status: ["published", "draft"][Math.floor(Math.random() * 2)],
    display_time: (/* @__PURE__ */ new Date()).toISOString(),
    pageviews: Math.floor(Math.random() * (5e3 - 300)) + 300,
    remark: `remark ${i}`
  });
}
var article_default = [
  {
    url: "/article/list",
    timeout: 200,
    method: "get",
    response: ({ query }) => {
      const { importance, type, title, page = 1, limit = 10, sort } = query;
      let mock_list = article_list.filter((item) => {
        if (importance && item.importance !== +importance)
          return false;
        if (type && item.type !== type)
          return false;
        if (title && item.title.indexOf(title) < 0)
          return false;
        if (item.status === "deleted")
          return false;
        return true;
      });
      if (sort === "-id") {
        mock_list = mock_list.reverse();
      }
      const page_list = mock_list.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );
      return {
        code: 200,
        data: { total: mock_list.length, page, items: page_list },
        msg: "\u4E00\u5207ok"
      };
    }
  },
  {
    url: "/article/detail",
    timeout: 200,
    method: "get",
    response: ({ query }) => {
      const { id } = query;
      for (const article of article_list) {
        if (article.id === +id) {
          return {
            code: 200,
            data: article,
            msg: "\u4E00\u5207ok"
          };
        }
      }
    }
  },
  {
    url: "/article/pv",
    timeout: 200,
    method: "get",
    response: ({ query }) => {
      const { id } = query;
      for (const article of article_list) {
        if (article.id === +id) {
          return {
            code: 200,
            data: {
              pv: article.pageviews,
              pvData: [
                { key: "PC", pv: 1024 },
                { key: "mobile", pv: 1024 },
                { key: "ios", pv: 1024 },
                { key: "android", pv: 1024 }
              ]
            },
            msg: "\u4E00\u5207ok"
          };
        }
      }
    }
  },
  {
    url: "/article/update",
    timeout: 200,
    method: "post",
    response: ({ body }) => {
      const { id, ...updatedFields } = body;
      const articleToUpdate = article_list.find(
        (article) => article.id === id
      );
      if (articleToUpdate) {
        Object.assign(articleToUpdate, updatedFields);
        return {
          code: 200,
          data: {
            article: articleToUpdate
          },
          msg: "\u4E00\u5207ok"
        };
      } else {
        console.error(`Article with id ${id} not found.`);
      }
    }
  },
  {
    url: "/article/create",
    timeout: 200,
    method: "post",
    response: ({ body }) => {
      const { title, author, importance, type, status, remark, timestamp } = body;
      const maxId = article_list.reduce((maxId2, article2) => {
        return Math.max(maxId2, article2.id);
      }, -1);
      const article = {
        id: maxId + 1,
        timestamp,
        author,
        reviewer: `reviewer ${maxId + 1}`,
        title,
        importance,
        type,
        status,
        display_time: new Date(timestamp).toISOString(),
        pageviews: Math.floor(Math.random() * (5e3 - 300)) + 300,
        remark
      };
      article_list.push(article);
      return {
        code: 200,
        data: {
          article
        },
        msg: "\u4E00\u5207ok"
      };
    }
  },
  {
    url: "/article/delete",
    timeout: 200,
    method: "post",
    response: ({ body }) => {
      const { id } = body;
      const index = article_list.findIndex((article) => article.id === id);
      article_list.splice(index, 1);
      return {
        code: 200,
        msg: "\u4E00\u5207ok"
      };
    }
  }
];
export {
  article_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svbW9jay9hcnRpY2xlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFx3b3Jrc3RhdGlvbi11aVxcXFxtb2NrXFxcXGFydGljbGUudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcd29ya3NwYWNlXFxcXHdvcmtzdGF0aW9uLXVpXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L3dvcmtzcGFjZS93b3Jrc3RhdGlvbi11aS9tb2NrL2FydGljbGUudHNcIjtpbXBvcnQgeyBNb2NrTWV0aG9kIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcblxuY29uc3QgYXJ0aWNsZV9saXN0OiBhbnkgPSBbXTtcbmNvbnN0IGNvdW50ID0gMTAwO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgYXJ0aWNsZV9saXN0LnB1c2goe1xuICAgIGlkOiBpLFxuICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgYXV0aG9yOiBgQXV0aG9yICR7aX1gLFxuICAgIHJldmlld2VyOiBgcmV2aWV3ZXIgJHtpfWAsXG4gICAgdGl0bGU6IGBUaXRsZSAke2l9YCxcbiAgICBpbXBvcnRhbmNlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDEsXG4gICAgdHlwZTogW1wiQ05cIiwgXCJVU1wiLCBcIkpQXCIsIFwiRVVcIl1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldLFxuICAgIHN0YXR1czogW1wicHVibGlzaGVkXCIsIFwiZHJhZnRcIl1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildLFxuICAgIGRpc3BsYXlfdGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIHBhZ2V2aWV3czogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUwMDAgLSAzMDApKSArIDMwMCxcbiAgICByZW1hcms6IGByZW1hcmsgJHtpfWAsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB1cmw6IFwiL2FwaS92MS9hcnRpY2xlL2xpc3RcIixcbiAgICB0aW1lb3V0OiAyMDAsXG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHJlc3BvbnNlOiAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICBjb25zdCB7IGltcG9ydGFuY2UsIHR5cGUsIHRpdGxlLCBwYWdlID0gMSwgbGltaXQgPSAxMCwgc29ydCB9ID0gcXVlcnk7XG4gICAgICBsZXQgbW9ja19saXN0ID0gYXJ0aWNsZV9saXN0LmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGlmIChpbXBvcnRhbmNlICYmIGl0ZW0uaW1wb3J0YW5jZSAhPT0gK2ltcG9ydGFuY2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGUgJiYgaXRlbS50eXBlICE9PSB0eXBlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aXRsZSAmJiBpdGVtLnRpdGxlLmluZGV4T2YodGl0bGUpIDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoaXRlbS5zdGF0dXMgPT09IFwiZGVsZXRlZFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBpZiAoc29ydCA9PT0gXCItaWRcIikge1xuICAgICAgICBtb2NrX2xpc3QgPSBtb2NrX2xpc3QucmV2ZXJzZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFnZV9saXN0ID0gbW9ja19saXN0LmZpbHRlcihcbiAgICAgICAgKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgICBpbmRleCA8IGxpbWl0ICogcGFnZSAmJiBpbmRleCA+PSBsaW1pdCAqIChwYWdlIC0gMSlcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YTogeyB0b3RhbDogbW9ja19saXN0Lmxlbmd0aCwgcGFnZTogcGFnZSwgaXRlbXM6IHBhZ2VfbGlzdCB9LFxuICAgICAgICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXBpL3YxL2FydGljbGUvZGV0YWlsXCIsXG4gICAgdGltZW91dDogMjAwLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgY29uc3QgeyBpZCB9ID0gcXVlcnk7XG4gICAgICBmb3IgKGNvbnN0IGFydGljbGUgb2YgYXJ0aWNsZV9saXN0KSB7XG4gICAgICAgIGlmIChhcnRpY2xlLmlkID09PSAraWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgICAgZGF0YTogYXJ0aWNsZSxcbiAgICAgICAgICAgIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hcGkvdjEvYXJ0aWNsZS9wdlwiLFxuICAgIHRpbWVvdXQ6IDIwMCxcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcmVzcG9uc2U6ICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xuICAgICAgZm9yIChjb25zdCBhcnRpY2xlIG9mIGFydGljbGVfbGlzdCkge1xuICAgICAgICBpZiAoYXJ0aWNsZS5pZCA9PT0gK2lkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgcHY6IGFydGljbGUucGFnZXZpZXdzLFxuICAgICAgICAgICAgICBwdkRhdGE6IFtcbiAgICAgICAgICAgICAgICB7IGtleTogXCJQQ1wiLCBwdjogMTAyNCB9LFxuICAgICAgICAgICAgICAgIHsga2V5OiBcIm1vYmlsZVwiLCBwdjogMTAyNCB9LFxuICAgICAgICAgICAgICAgIHsga2V5OiBcImlvc1wiLCBwdjogMTAyNCB9LFxuICAgICAgICAgICAgICAgIHsga2V5OiBcImFuZHJvaWRcIiwgcHY6IDEwMjQgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXBpL3YxL2FydGljbGUvdXBkYXRlXCIsXG4gICAgdGltZW91dDogMjAwLFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgcmVzcG9uc2U6ICh7IGJvZHkgfSkgPT4ge1xuICAgICAgY29uc3QgeyBpZCwgLi4udXBkYXRlZEZpZWxkcyB9ID0gYm9keTtcbiAgICAgIC8vIFx1NjdFNVx1NjI3RVx1ODk4MVx1NjZGNFx1NjVCMFx1NzY4NFx1NjU4N1x1N0FFMFxuICAgICAgY29uc3QgYXJ0aWNsZVRvVXBkYXRlID0gYXJ0aWNsZV9saXN0LmZpbmQoXG4gICAgICAgIChhcnRpY2xlOiBhbnkpID0+IGFydGljbGUuaWQgPT09IGlkXG4gICAgICApO1xuXG4gICAgICAvLyBcdTU5ODJcdTY3OUNcdTYyN0VcdTUyMzBcdTRFODZcdTg5ODFcdTY2RjRcdTY1QjBcdTc2ODRcdTY1ODdcdTdBRTBcbiAgICAgIGlmIChhcnRpY2xlVG9VcGRhdGUpIHtcbiAgICAgICAgLy8gXHU0RjdGXHU3NTI4IE9iamVjdC5hc3NpZ24gXHU2NUI5XHU2Q0Q1XHU2NkY0XHU2NUIwXHU2NTg3XHU3QUUwXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXJ0aWNsZVRvVXBkYXRlLCB1cGRhdGVkRmllbGRzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYXJ0aWNsZTogYXJ0aWNsZVRvVXBkYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBBcnRpY2xlIHdpdGggaWQgJHtpZH0gbm90IGZvdW5kLmApO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiL2FwaS92MS9hcnRpY2xlL2NyZWF0ZVwiLFxuICAgIHRpbWVvdXQ6IDIwMCxcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIHJlc3BvbnNlOiAoeyBib2R5IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgdGl0bGUsIGF1dGhvciwgaW1wb3J0YW5jZSwgdHlwZSwgc3RhdHVzLCByZW1hcmssIHRpbWVzdGFtcCB9ID1cbiAgICAgICAgYm9keTtcbiAgICAgIC8vIGFydGljbGVfbGlzdFx1NjcwMFx1NTkyN1x1NzY4NGlkXHU1MDNDO1xuICAgICAgY29uc3QgbWF4SWQgPSBhcnRpY2xlX2xpc3QucmVkdWNlKChtYXhJZDogbnVtYmVyLCBhcnRpY2xlOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG1heElkLCBhcnRpY2xlLmlkKTtcbiAgICAgIH0sIC0xKTtcbiAgICAgIGNvbnN0IGFydGljbGUgPSB7XG4gICAgICAgIGlkOiBtYXhJZCArIDEsXG4gICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgYXV0aG9yLFxuICAgICAgICByZXZpZXdlcjogYHJldmlld2VyICR7bWF4SWQgKyAxfWAsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBpbXBvcnRhbmNlLFxuICAgICAgICB0eXBlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRpc3BsYXlfdGltZTogbmV3IERhdGUodGltZXN0YW1wKS50b0lTT1N0cmluZygpLFxuICAgICAgICBwYWdldmlld3M6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MDAwIC0gMzAwKSkgKyAzMDAsXG4gICAgICAgIHJlbWFyayxcbiAgICAgIH07XG4gICAgICBhcnRpY2xlX2xpc3QucHVzaChhcnRpY2xlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGFydGljbGUsXG4gICAgICAgIH0sXG4gICAgICAgIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hcGkvdjEvYXJ0aWNsZS9kZWxldGVcIixcbiAgICB0aW1lb3V0OiAyMDAsXG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSBib2R5O1xuICAgICAgY29uc3QgaW5kZXggPSBhcnRpY2xlX2xpc3QuZmluZEluZGV4KChhcnRpY2xlOiBhbnkpID0+IGFydGljbGUuaWQgPT09IGlkKTtcbiAgICAgIGFydGljbGVfbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbl0gYXMgTW9ja01ldGhvZFtdO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLElBQU0sZUFBb0IsQ0FBQztBQUMzQixJQUFNLFFBQVE7QUFFZCxTQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSztBQUM5QixlQUFhLEtBQUs7SUFDaEIsSUFBSTtJQUNKLFlBQVcsb0JBQUksS0FBSyxHQUFFLFFBQVE7SUFDOUIsUUFBUSxVQUFVLENBQUM7SUFDbkIsVUFBVSxZQUFZLENBQUM7SUFDdkIsT0FBTyxTQUFTLENBQUM7SUFDakIsWUFBWSxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJO0lBQzVDLE1BQU0sQ0FBQyxN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
