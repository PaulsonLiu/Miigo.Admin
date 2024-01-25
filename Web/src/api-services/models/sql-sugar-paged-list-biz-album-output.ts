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

import { BizAlbumOutput } from './biz-album-output';
import {
    BizAlbumOutput,
} from ".";

/**
 * 分页泛型集合
 *
 * @export
 * @interface SqlSugarPagedListBizAlbumOutput
 */
export interface SqlSugarPagedListBizAlbumOutput {

    /**
     * 页码
     *
     * @type {number}
     * @memberof SqlSugarPagedListBizAlbumOutput
     */
    page?: number;

    /**
     * 页容量
     *
     * @type {number}
     * @memberof SqlSugarPagedListBizAlbumOutput
     */
    pageSize?: number;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof SqlSugarPagedListBizAlbumOutput
     */
    total?: number;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof SqlSugarPagedListBizAlbumOutput
     */
    totalPages?: number;

    /**
     * 当前页集合
     *
     * @type {Array<BizAlbumOutput>}
     * @memberof SqlSugarPagedListBizAlbumOutput
     */
    items?: Array<BizAlbumOutput> | null;

    /**
     * 是否有上一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListBizAlbumOutput
     */
    hasPrevPage?: boolean;

    /**
     * 是否有下一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListBizAlbumOutput
     */
    hasNextPage?: boolean;
}
