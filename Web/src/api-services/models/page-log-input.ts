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

 /**
 * 
 *
 * @export
 * @interface PageLogInput
 */
export interface PageLogInput {

    /**
     * 当前页码
     *
     * @type {number}
     * @memberof PageLogInput
     */
    page?: number;

    /**
     * 页码容量
     *
     * @type {number}
     * @memberof PageLogInput
     */
    pageSize?: number;

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof PageLogInput
     */
    field?: string | null;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PageLogInput
     */
    order?: string | null;

    /**
     * 降序排序
     *
     * @type {string}
     * @memberof PageLogInput
     */
    descStr?: string | null;

    /**
     * 开始时间
     *
     * @type {Date}
     * @memberof PageLogInput
     */
    startTime?: Date | null;

    /**
     * 结束时间
     *
     * @type {Date}
     * @memberof PageLogInput
     */
    endTime?: Date | null;
}
