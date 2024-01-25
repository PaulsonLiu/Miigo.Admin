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
 * 媒体
 *
 * @export
 * @interface BizMedia
 */
export interface BizMedia {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof BizMedia
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof BizMedia
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof BizMedia
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof BizMedia
     */
    createUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof BizMedia
     */
    createUser?: SysUser;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof BizMedia
     */
    updateUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof BizMedia
     */
    updateUser?: SysUser;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof BizMedia
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof BizMedia
     */
    tenantId?: number | null;

    /**
     * 文件id
     *
     * @type {number}
     * @memberof BizMedia
     */
    fileId?: number | null;

    /**
     * 文件
     *
     * @type {string}
     * @memberof BizMedia
     */
    url?: string | null;

    /**
     * 封面
     *
     * @type {string}
     * @memberof BizMedia
     */
    cover?: string | null;

    /**
     * 分类
     *
     * @type {number}
     * @memberof BizMedia
     */
    catalog?: number | null;

    /**
     * 专辑
     *
     * @type {number}
     * @memberof BizMedia
     */
    album?: number | null;

    /**
     * 文件名
     *
     * @type {string}
     * @memberof BizMedia
     */
    name?: string | null;

    /**
     * 描述
     *
     * @type {string}
     * @memberof BizMedia
     */
    desc?: string | null;

    /**
     * 大小KB
     *
     * @type {string}
     * @memberof BizMedia
     */
    size?: string | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof BizMedia
     */
    createUserName?: string | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof BizMedia
     */
    updateUserName?: string | null;
}
