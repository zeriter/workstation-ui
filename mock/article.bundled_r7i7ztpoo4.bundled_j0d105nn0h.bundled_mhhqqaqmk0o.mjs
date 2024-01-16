// mock/article.bundled_r7i7ztpoo4.bundled_j0d105nn0h.mjs
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svYXJ0aWNsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcd29ya3N0YXRpb24tdWlcXFxcbW9ja1xcXFxhcnRpY2xlLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFx3b3Jrc3RhdGlvbi11aVxcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi93b3Jrc3BhY2Uvd29ya3N0YXRpb24tdWkvbW9jay9hcnRpY2xlLnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gXCJ2aXRlLXBsdWdpbi1tb2NrXCI7XG5cbmNvbnN0IGFydGljbGVfbGlzdDogYW55ID0gW107XG5jb25zdCBjb3VudCA9IDEwMDtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gIGFydGljbGVfbGlzdC5wdXNoKHtcbiAgICBpZDogaSxcbiAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgIGF1dGhvcjogYEF1dGhvciAke2l9YCxcbiAgICByZXZpZXdlcjogYHJldmlld2VyICR7aX1gLFxuICAgIHRpdGxlOiBgVGl0bGUgJHtpfWAsXG4gICAgaW1wb3J0YW5jZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAxLFxuICAgIHR5cGU6IFtcIkNOXCIsIFwiVVNcIiwgXCJKUFwiLCBcIkVVXCJdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXSxcbiAgICBzdGF0dXM6IFtcInB1Ymxpc2hlZFwiLCBcImRyYWZ0XCJdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSxcbiAgICBkaXNwbGF5X3RpbWU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICBwYWdldmlld3M6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MDAwIC0gMzAwKSkgKyAzMDAsXG4gICAgcmVtYXJrOiBgcmVtYXJrICR7aX1gLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdXJsOiBcIi9hcGkvdjEvYXJ0aWNsZS9saXN0XCIsXG4gICAgdGltZW91dDogMjAwLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgY29uc3QgeyBpbXBvcnRhbmNlLCB0eXBlLCB0aXRsZSwgcGFnZSA9IDEsIGxpbWl0ID0gMTAsIHNvcnQgfSA9IHF1ZXJ5O1xuICAgICAgbGV0IG1vY2tfbGlzdCA9IGFydGljbGVfbGlzdC5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBpZiAoaW1wb3J0YW5jZSAmJiBpdGVtLmltcG9ydGFuY2UgIT09ICtpbXBvcnRhbmNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlICYmIGl0ZW0udHlwZSAhPT0gdHlwZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGl0bGUgJiYgaXRlbS50aXRsZS5pbmRleE9mKHRpdGxlKSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSBcImRlbGV0ZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNvcnQgPT09IFwiLWlkXCIpIHtcbiAgICAgICAgbW9ja19saXN0ID0gbW9ja19saXN0LnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhZ2VfbGlzdCA9IG1vY2tfbGlzdC5maWx0ZXIoXG4gICAgICAgIChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICAgaW5kZXggPCBsaW1pdCAqIHBhZ2UgJiYgaW5kZXggPj0gbGltaXQgKiAocGFnZSAtIDEpXG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IHsgdG90YWw6IG1vY2tfbGlzdC5sZW5ndGgsIHBhZ2U6IHBhZ2UsIGl0ZW1zOiBwYWdlX2xpc3QgfSxcbiAgICAgICAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiL2FwaS92MS9hcnRpY2xlL2RldGFpbFwiLFxuICAgIHRpbWVvdXQ6IDIwMCxcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcmVzcG9uc2U6ICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xuICAgICAgZm9yIChjb25zdCBhcnRpY2xlIG9mIGFydGljbGVfbGlzdCkge1xuICAgICAgICBpZiAoYXJ0aWNsZS5pZCA9PT0gK2lkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIGRhdGE6IGFydGljbGUsXG4gICAgICAgICAgICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXBpL3YxL2FydGljbGUvcHZcIixcbiAgICB0aW1lb3V0OiAyMDAsXG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHJlc3BvbnNlOiAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSBxdWVyeTtcbiAgICAgIGZvciAoY29uc3QgYXJ0aWNsZSBvZiBhcnRpY2xlX2xpc3QpIHtcbiAgICAgICAgaWYgKGFydGljbGUuaWQgPT09ICtpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHB2OiBhcnRpY2xlLnBhZ2V2aWV3cyxcbiAgICAgICAgICAgICAgcHZEYXRhOiBbXG4gICAgICAgICAgICAgICAgeyBrZXk6IFwiUENcIiwgcHY6IDEwMjQgfSxcbiAgICAgICAgICAgICAgICB7IGtleTogXCJtb2JpbGVcIiwgcHY6IDEwMjQgfSxcbiAgICAgICAgICAgICAgICB7IGtleTogXCJpb3NcIiwgcHY6IDEwMjQgfSxcbiAgICAgICAgICAgICAgICB7IGtleTogXCJhbmRyb2lkXCIsIHB2OiAxMDI0IH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiL2FwaS92MS9hcnRpY2xlL3VwZGF0ZVwiLFxuICAgIHRpbWVvdXQ6IDIwMCxcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIHJlc3BvbnNlOiAoeyBib2R5IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaWQsIC4uLnVwZGF0ZWRGaWVsZHMgfSA9IGJvZHk7XG4gICAgICAvLyBcdTY3RTVcdTYyN0VcdTg5ODFcdTY2RjRcdTY1QjBcdTc2ODRcdTY1ODdcdTdBRTBcbiAgICAgIGNvbnN0IGFydGljbGVUb1VwZGF0ZSA9IGFydGljbGVfbGlzdC5maW5kKFxuICAgICAgICAoYXJ0aWNsZTogYW55KSA9PiBhcnRpY2xlLmlkID09PSBpZFxuICAgICAgKTtcblxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU2MjdFXHU1MjMwXHU0RTg2XHU4OTgxXHU2NkY0XHU2NUIwXHU3Njg0XHU2NTg3XHU3QUUwXG4gICAgICBpZiAoYXJ0aWNsZVRvVXBkYXRlKSB7XG4gICAgICAgIC8vIFx1NEY3Rlx1NzUyOCBPYmplY3QuYXNzaWduIFx1NjVCOVx1NkNENVx1NjZGNFx1NjVCMFx1NjU4N1x1N0FFMFxuICAgICAgICBPYmplY3QuYXNzaWduKGFydGljbGVUb1VwZGF0ZSwgdXBkYXRlZEZpZWxkcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFydGljbGU6IGFydGljbGVUb1VwZGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1zZzogXCJcdTRFMDBcdTUyMDdva1wiLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgQXJ0aWNsZSB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZC5gKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hcGkvdjEvYXJ0aWNsZS9jcmVhdGVcIixcbiAgICB0aW1lb3V0OiAyMDAsXG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XG4gICAgICBjb25zdCB7IHRpdGxlLCBhdXRob3IsIGltcG9ydGFuY2UsIHR5cGUsIHN0YXR1cywgcmVtYXJrLCB0aW1lc3RhbXAgfSA9XG4gICAgICAgIGJvZHk7XG4gICAgICAvLyBhcnRpY2xlX2xpc3RcdTY3MDBcdTU5MjdcdTc2ODRpZFx1NTAzQztcbiAgICAgIGNvbnN0IG1heElkID0gYXJ0aWNsZV9saXN0LnJlZHVjZSgobWF4SWQ6IG51bWJlciwgYXJ0aWNsZTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChtYXhJZCwgYXJ0aWNsZS5pZCk7XG4gICAgICB9LCAtMSk7XG4gICAgICBjb25zdCBhcnRpY2xlID0ge1xuICAgICAgICBpZDogbWF4SWQgKyAxLFxuICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgIGF1dGhvcixcbiAgICAgICAgcmV2aWV3ZXI6IGByZXZpZXdlciAke21heElkICsgMX1gLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgaW1wb3J0YW5jZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkaXNwbGF5X3RpbWU6IG5ldyBEYXRlKHRpbWVzdGFtcCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgcGFnZXZpZXdzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTAwMCAtIDMwMCkpICsgMzAwLFxuICAgICAgICByZW1hcmssXG4gICAgICB9O1xuICAgICAgYXJ0aWNsZV9saXN0LnB1c2goYXJ0aWNsZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBhcnRpY2xlLFxuICAgICAgICB9LFxuICAgICAgICBtc2c6IFwiXHU0RTAwXHU1MjA3b2tcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXBpL3YxL2FydGljbGUvZGVsZXRlXCIsXG4gICAgdGltZW91dDogMjAwLFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgcmVzcG9uc2U6ICh7IGJvZHkgfSkgPT4ge1xuICAgICAgY29uc3QgeyBpZCB9ID0gYm9keTtcbiAgICAgIGNvbnN0IGluZGV4ID0gYXJ0aWNsZV9saXN0LmZpbmRJbmRleCgoYXJ0aWNsZTogYW55KSA9PiBhcnRpY2xlLmlkID09PSBpZCk7XG4gICAgICBhcnRpY2xlX2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgbXNnOiBcIlx1NEUwMFx1NTIwN29rXCIsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG5dIGFzIE1vY2tNZXRob2RbXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxJQUFNLGVBQW9CLENBQUM7QUFDM0IsSUFBTSxRQUFRO0FBRWQsU0FBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUs7QUFDOUIsZUFBYSxLQUFLO0lBQ2hCLElBQUk7SUFDSixZQUFXLG9CQUFJLEtBQUssR0FBRSxRQUFRO0lBQzlCLFFBQVEsVUFBVSxDQUFDO0lBQ25CLFVBQVUsWUFBWSxDQUFDO0lBQ3ZCLE9BQU8sU0FBUyxDQUFDO0lBQ2pCLFlBQVksS0FBSyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSTtJQUM1QyxNQUFNLENBQUMsTUFBTSxN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
