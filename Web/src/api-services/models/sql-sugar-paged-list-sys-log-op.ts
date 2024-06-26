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

import { SysLogOp } from './sys-log-op';
 /**
 * 分页泛型集合
 *
 * @export
 * @interface SqlSugarPagedListSysLogOp
 */
export interface SqlSugarPagedListSysLogOp {

    /**
     * 页码
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysLogOp
     */
    page?: number;

    /**
     * 页容量
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysLogOp
     */
    pageSize?: number;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysLogOp
     */
    total?: number;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysLogOp
     */
    totalPages?: number;

    /**
     * 当前页集合
     *
     * @type {Array<SysLogOp>}
     * @memberof SqlSugarPagedListSysLogOp
     */
    items?: Array<SysLogOp> | null;

    /**
     * 是否有上一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogOp
     */
    hasPrevPage?: boolean;

    /**
     * 是否有下一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogOp
     */
    hasNextPage?: boolean;
}
