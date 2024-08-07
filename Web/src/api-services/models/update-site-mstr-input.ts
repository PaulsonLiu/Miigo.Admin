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

import { StatusEnum } from './status-enum';
 /**
 * SiteMstr更新输入参数
 *
 * @export
 * @interface UpdateSiteMstrInput
 */
export interface UpdateSiteMstrInput {

    /**
     * 名称
     *
     * @type {string}
     * @memberof UpdateSiteMstrInput
     */
    name?: string | null;

    /**
     * 图标
     *
     * @type {string}
     * @memberof UpdateSiteMstrInput
     */
    logo?: string | null;

    /**
     * 描述
     *
     * @type {string}
     * @memberof UpdateSiteMstrInput
     */
    desc?: string | null;

    /**
     * @type {StatusEnum}
     * @memberof UpdateSiteMstrInput
     */
    status?: StatusEnum;

    /**
     * 过期时间
     *
     * @type {Date}
     * @memberof UpdateSiteMstrInput
     */
    expiredTime?: Date | null;

    /**
     * Url地址
     *
     * @type {string}
     * @memberof UpdateSiteMstrInput
     */
    url?: string | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof UpdateSiteMstrInput
     */
    createUserName?: string | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof UpdateSiteMstrInput
     */
    updateUserName?: string | null;

    /**
     * Id
     *
     * @type {number}
     * @memberof UpdateSiteMstrInput
     */
    id: number;
}
