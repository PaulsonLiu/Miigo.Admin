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

import { TableOutput } from './table-output';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultListTableOutput
 */
export interface AdminResultListTableOutput {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultListTableOutput
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultListTableOutput
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultListTableOutput
     */
    message?: string | null;

    /**
     * 数据
     *
     * @type {Array<TableOutput>}
     * @memberof AdminResultListTableOutput
     */
    result?: Array<TableOutput> | null;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultListTableOutput
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultListTableOutput
     */
    time?: Date;
}
