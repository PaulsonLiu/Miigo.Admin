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
import { SysUser } from './sys-user';
 /**
 * 
 *
 * @export
 * @interface UpdatePrintInput
 */
export interface UpdatePrintInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdatePrintInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof UpdatePrintInput
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof UpdatePrintInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof UpdatePrintInput
     */
    createUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof UpdatePrintInput
     */
    createUser?: SysUser;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof UpdatePrintInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof UpdatePrintInput
     */
    updateUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof UpdatePrintInput
     */
    updateUser?: SysUser;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof UpdatePrintInput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof UpdatePrintInput
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof UpdatePrintInput
     */
    tenantId?: number | null;

    /**
     * 打印模板
     *
     * @type {string}
     * @memberof UpdatePrintInput
     */
    template: string;

    /**
     * 排序
     *
     * @type {number}
     * @memberof UpdatePrintInput
     */
    orderNo?: number;

    /**
     * @type {StatusEnum}
     * @memberof UpdatePrintInput
     */
    status?: StatusEnum;

    /**
     * 备注
     *
     * @type {string}
     * @memberof UpdatePrintInput
     */
    remark?: string | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof UpdatePrintInput
     */
    name: string;
}
