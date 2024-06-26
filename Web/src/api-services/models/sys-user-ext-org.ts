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

import { SysOrg } from './sys-org';
import { SysPos } from './sys-pos';
import { SysUser } from './sys-user';
 /**
 * 系统用户扩展机构表
 *
 * @export
 * @interface SysUserExtOrg
 */
export interface SysUserExtOrg {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysUserExtOrg
     */
    id?: number;

    /**
     * 用户Id
     *
     * @type {number}
     * @memberof SysUserExtOrg
     */
    userId?: number;

    /**
     * @type {SysUser}
     * @memberof SysUserExtOrg
     */
    sysUser?: SysUser;

    /**
     * 机构Id
     *
     * @type {number}
     * @memberof SysUserExtOrg
     */
    orgId?: number;

    /**
     * @type {SysOrg}
     * @memberof SysUserExtOrg
     */
    sysOrg?: SysOrg;

    /**
     * 职位Id
     *
     * @type {number}
     * @memberof SysUserExtOrg
     */
    posId?: number;

    /**
     * @type {SysPos}
     * @memberof SysUserExtOrg
     */
    sysPos?: SysPos;

    /**
     * 工号
     *
     * @type {string}
     * @memberof SysUserExtOrg
     */
    jobNum?: string | null;

    /**
     * 职级
     *
     * @type {string}
     * @memberof SysUserExtOrg
     */
    posLevel?: string | null;

    /**
     * 入职日期
     *
     * @type {Date}
     * @memberof SysUserExtOrg
     */
    joinDate?: Date | null;
}
