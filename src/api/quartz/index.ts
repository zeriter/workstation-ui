import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { QuartzQuery, QuartzPageResult, QuartzForm } from "./types";

/**
 * 获取角色分页数据
 *
 * @param queryParams
 */
export function getQuartzPage(
  queryParams?: QuartzQuery
): AxiosPromise<QuartzPageResult> {
  return request({
    url: "/system/quartz/page",
    method: "get",
    params: queryParams,
  });
}

/**
 * 获取角色详情
 *
 * @param id
 */
export function getQuartzForm(id: number): AxiosPromise<QuartzForm> {
  return request({
    url: "/system/quartz/" + id + "/form",
    method: "get",
  });
}

/**
 * 添加角色
 *
 * @param data
 */
export function addQuartz(data: QuartzForm) {
  return request({
    url: "/system/quartz",
    method: "post",
    data: data,
  });
}

/**
 * 更新角色
 *
 * @param id
 * @param data
 */
export function updateQuartz(id: number, data: QuartzForm) {
  return request({
    url: "/system/quartz/" + id,
    method: "put",
    data: data,
  });
}

/**
 * 批量删除角色，多个以英文逗号(,)分割
 *
 * @param ids
 */
export function deleteQuartzs(ids: string) {
  return request({
    url: "/system/quartz/" + ids,
    method: "delete",
  });
}
