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

import { BizMedia } from './biz-media';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultBizMedia
 */
export interface AdminResultBizMedia {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultBizMedia
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultBizMedia
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultBizMedia
     */
    message?: string | null;

    /**
     * @type {BizMedia}
     * @memberof AdminResultBizMedia
     */
    result?: BizMedia;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultBizMedia
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultBizMedia
     */
    time?: Date;
}
