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

import { DbType } from './db-type';
 /**
 * 数据库
 *
 * @export
 * @interface DatabaseOutput
 */
export interface DatabaseOutput {

    /**
     * 库定位器名
     *
     * @type {string}
     * @memberof DatabaseOutput
     */
    configId?: string | null;

    /**
     * @type {DbType}
     * @memberof DatabaseOutput
     */
    dbType?: DbType;

    /**
     * 数据库连接字符串
     *
     * @type {string}
     * @memberof DatabaseOutput
     */
    connectionString?: string | null;
}
