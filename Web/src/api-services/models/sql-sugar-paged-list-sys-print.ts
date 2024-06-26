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

import { SysPrint } from './sys-print';
 /**
 * 分页泛型集合
 *
 * @export
 * @interface SqlSugarPagedListSysPrint
 */
export interface SqlSugarPagedListSysPrint {

    /**
     * 页码
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysPrint
     */
    page?: number;

    /**
     * 页容量
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysPrint
     */
    pageSize?: number;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysPrint
     */
    total?: number;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysPrint
     */
    totalPages?: number;

    /**
     * 当前页集合
     *
     * @type {Array<SysPrint>}
     * @memberof SqlSugarPagedListSysPrint
     */
    items?: Array<SysPrint> | null;

    /**
     * 是否有上一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysPrint
     */
    hasPrevPage?: boolean;

    /**
     * 是否有下一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysPrint
     */
    hasNextPage?: boolean;
}
