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

import { SqlSugarPagedListSysPlugin } from './sql-sugar-paged-list-sys-plugin';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultSqlSugarPagedListSysPlugin
 */
export interface AdminResultSqlSugarPagedListSysPlugin {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysPlugin
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysPlugin
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysPlugin
     */
    message?: string | null;

    /**
     * @type {SqlSugarPagedListSysPlugin}
     * @memberof AdminResultSqlSugarPagedListSysPlugin
     */
    result?: SqlSugarPagedListSysPlugin;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysPlugin
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysPlugin
     */
    time?: Date;
}
