import request from "@/utils/request";

export interface ArticleQuery {
  page?: number;
  limit?: number;
  sort?: string;
  title?: string;
  type?: string;
  importance?: number;
}

export interface ArticleDetail {
  id: number;
  timestamp: number;
  title: string;
  type: string;
  status: string;
  importance: number;
  content?: string;
  remark?: string;
}

export interface ArticleCreate {
  type: string;
  timestamp: Date;
  title: string;
  status?: string;
  importance?: number;
  remark?: string;
}

export interface ArticleUpdate {
  id: number;
  type?: string;
  timestamp?: Date;
  title?: string;
  status?: string;
  importance?: number;
  remark?: string;
}

export function fetchList(query: ArticleQuery) {
  return request({
    url: "/article/list",
    method: "get",
    params: query,
  });
}

export function fetchArticle(id: number) {
  return request({
    url: "/article/detail",
    method: "get",
    params: {id},
  });
}

export function fetchPv(id: number) {
  return request({
    url: "/article/pv",
    method: "get",
    params: {id},
  });
}

export function createArticle(data: ArticleCreate) {
  return request({
    url: "/article/create",
    method: "post",
    data,
  });
}

export function updateArticle(data: ArticleUpdate) {
  return request({
    url: "/article/update",
    method: "post",
    data,
  });
}

export function deleteArticle(id: number) {
  return request({
    url: "/article/delete",
    method: "post",
    data: {id},
  });
}
