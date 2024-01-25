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

import { SysUser } from './sys-user';
import {
    SysUser,
} from ".";

/**
 * 媒体分类
 *
 * @export
 * @interface BizCatalog
 */
export interface BizCatalog {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof BizCatalog
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof BizCatalog
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof BizCatalog
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof BizCatalog
     */
    createUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof BizCatalog
     */
    createUser?: SysUser;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof BizCatalog
     */
    updateUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof BizCatalog
     */
    updateUser?: SysUser;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof BizCatalog
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof BizCatalog
     */
    tenantId?: number | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof BizCatalog
     */
    name?: string | null;

    /**
     * 描述
     *
     * @type {string}
     * @memberof BizCatalog
     */
    desc?: string | null;

    /**
     * 图标
     *
     * @type {string}
     * @memberof BizCatalog
     */
    logo?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof BizCatalog
     */
    sort?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof BizCatalog
     */
    createUserName?: string | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof BizCatalog
     */
    updateUserName?: string | null;
}
