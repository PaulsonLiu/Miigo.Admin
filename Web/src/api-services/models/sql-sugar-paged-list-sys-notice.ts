/* tslint:disable */
/* eslint-disable */
/**
 * Miigo.Admin
 * 前后端分离架构(.NET8/Vue3)<br/>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { SysNotice } from './sys-notice';
 /**
 * 分页泛型集合
 *
 * @export
 * @interface SqlSugarPagedListSysNotice
 */
export interface SqlSugarPagedListSysNotice {

    /**
     * 页码
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysNotice
     */
    page?: number;

    /**
     * 页容量
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysNotice
     */
    pageSize?: number;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysNotice
     */
    total?: number;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysNotice
     */
    totalPages?: number;

    /**
     * 当前页集合
     *
     * @type {Array<SysNotice>}
     * @memberof SqlSugarPagedListSysNotice
     */
    items?: Array<SysNotice> | null;

    /**
     * 是否有上一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysNotice
     */
    hasPrevPage?: boolean;

    /**
     * 是否有下一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysNotice
     */
    hasNextPage?: boolean;
}
