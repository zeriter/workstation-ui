import {MockMethod} from "vite-plugin-mock";

export default [
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
            label: "男",
          },
          {
            value: "2",
            label: "女",
          },
          {
            value: "0",
            label: "未知",
          },
        ];
      }

      return {
        code: 200,
        data: list,
        msg: "一切ok",
      };
    },
  },
] as MockMethod[];
