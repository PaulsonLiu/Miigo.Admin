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

import { BizCatalogOutput } from './biz-catalog-output';
import {
    BizCatalogOutput,
} from ".";

/**
 * 分页泛型集合
 *
 * @export
 * @interface SqlSugarPagedListBizCatalogOutput
 */
export interface SqlSugarPagedListBizCatalogOutput {

    /**
     * 页码
     *
     * @type {number}
     * @memberof SqlSugarPagedListBizCatalogOutput
     */
    page?: number;

    /**
     * 页容量
     *
     * @type {number}
     * @memberof SqlSugarPagedListBizCatalogOutput
     */
    pageSize?: number;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof SqlSugarPagedListBizCatalogOutput
     */
    total?: number;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof SqlSugarPagedListBizCatalogOutput
     */
    totalPages?: number;

    /**
     * 当前页集合
     *
     * @type {Array<BizCatalogOutput>}
     * @memberof SqlSugarPagedListBizCatalogOutput
     */
    items?: Array<BizCatalogOutput> | null;

    /**
     * 是否有上一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListBizCatalogOutput
     */
    hasPrevPage?: boolean;

    /**
     * 是否有下一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListBizCatalogOutput
     */
    hasNextPage?: boolean;
}
