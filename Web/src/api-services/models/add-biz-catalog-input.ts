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

 /**
 * 分类增加输入参数
 *
 * @export
 * @interface AddBizCatalogInput
 */
export interface AddBizCatalogInput {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AddBizCatalogInput
     */
    name?: string | null;

    /**
     * 描述
     *
     * @type {string}
     * @memberof AddBizCatalogInput
     */
    desc?: string | null;

    /**
     * 图标
     *
     * @type {string}
     * @memberof AddBizCatalogInput
     */
    logo?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof AddBizCatalogInput
     */
    sort?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof AddBizCatalogInput
     */
    createUserName?: string | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof AddBizCatalogInput
     */
    updateUserName?: string | null;
}
