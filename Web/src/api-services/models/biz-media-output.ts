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

import { SysFile } from './sys-file';
import {
    SysFile,
} from ".";

/**
 * 媒体输出参数
 *
 * @export
 * @interface BizMediaOutput
 */
export interface BizMediaOutput {

    /**
     * 主键Id
     *
     * @type {number}
     * @memberof BizMediaOutput
     */
    id?: number;

    /**
     * 文件名
     *
     * @type {string}
     * @memberof BizMediaOutput
     */
    name?: string | null;

    /**
     * 文件id
     *
     * @type {number}
     * @memberof BizMediaOutput
     */
    fileId?: number | null;

    /**
     * 大小KB
     *
     * @type {string}
     * @memberof BizMediaOutput
     */
    size?: string | null;

    /**
     * 文件
     *
     * @type {string}
     * @memberof BizMediaOutput
     */
    url?: string | null;

    /**
     * @type {SysFile}
     * @memberof BizMediaOutput
     */
    urlAttachment?: SysFile;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof BizMediaOutput
     */
    createUserName?: string | null;

    /**
     * 封面
     *
     * @type {string}
     * @memberof BizMediaOutput
     */
    cover?: string | null;

    /**
     * @type {SysFile}
     * @memberof BizMediaOutput
     */
    coverAttachment?: SysFile;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof BizMediaOutput
     */
    updateUserName?: string | null;

    /**
     * 分类
     *
     * @type {number}
     * @memberof BizMediaOutput
     */
    catalog?: number | null;

    /**
     * 分类 描述
     *
     * @type {string}
     * @memberof BizMediaOutput
     */
    catalogName?: string | null;

    /**
     * 专辑
     *
     * @type {number}
     * @memberof BizMediaOutput
     */
    album?: number | null;

    /**
     * 专辑 描述
     *
     * @type {string}
     * @memberof BizMediaOutput
     */
    albumName?: string | null;

    /**
     * 描述
     *
     * @type {string}
     * @memberof BizMediaOutput
     */
    desc?: string | null;

    /**
     * @type {Date}
     * @memberof BizMediaOutput
     */
    createTime?: Date | null;
}
