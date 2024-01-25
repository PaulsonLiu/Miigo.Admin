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

import {
    
} from ".";

/**
 * 媒体增加输入参数
 *
 * @export
 * @interface AddBizMediaInput
 */
export interface AddBizMediaInput {

    /**
     * 文件名
     *
     * @type {string}
     * @memberof AddBizMediaInput
     */
    name?: string | null;

    /**
     * 文件id
     *
     * @type {number}
     * @memberof AddBizMediaInput
     */
    fileId?: number | null;

    /**
     * 大小KB
     *
     * @type {string}
     * @memberof AddBizMediaInput
     */
    size?: string | null;

    /**
     * 文件
     *
     * @type {string}
     * @memberof AddBizMediaInput
     */
    url?: string | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof AddBizMediaInput
     */
    createUserName?: string | null;

    /**
     * 封面
     *
     * @type {string}
     * @memberof AddBizMediaInput
     */
    cover?: string | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof AddBizMediaInput
     */
    updateUserName?: string | null;

    /**
     * 分类
     *
     * @type {number}
     * @memberof AddBizMediaInput
     */
    catalog?: number | null;

    /**
     * 专辑
     *
     * @type {number}
     * @memberof AddBizMediaInput
     */
    album?: number | null;

    /**
     * 描述
     *
     * @type {string}
     * @memberof AddBizMediaInput
     */
    desc?: string | null;
}
