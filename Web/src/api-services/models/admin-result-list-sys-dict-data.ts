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

import { SysDictData } from './sys-dict-data';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultListSysDictData
 */
export interface AdminResultListSysDictData {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultListSysDictData
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultListSysDictData
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultListSysDictData
     */
    message?: string | null;

    /**
     * 数据
     *
     * @type {Array<SysDictData>}
     * @memberof AdminResultListSysDictData
     */
    result?: Array<SysDictData> | null;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultListSysDictData
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultListSysDictData
     */
    time?: Date;
}
