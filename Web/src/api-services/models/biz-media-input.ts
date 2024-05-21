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
 * 媒体分页查询输入参数
 *
 * @export
 * @interface BizMediaInput
 */
export interface BizMediaInput {

    /**
     * 当前页码
     *
     * @type {number}
     * @memberof BizMediaInput
     */
    page?: number;

    /**
     * 页码容量
     *
     * @type {number}
     * @memberof BizMediaInput
     */
    pageSize?: number;

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    field?: string | null;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    order?: string | null;

    /**
     * 降序排序
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    descStr?: string | null;

    /**
     * 关键字查询
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    searchKey?: string | null;

    /**
     * 文件名
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    name?: string | null;

    /**
     * 文件id
     *
     * @type {number}
     * @memberof BizMediaInput
     */
    fileId?: number | null;

    /**
     * 文件
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    url?: string | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    createUserName?: string | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    updateUserName?: string | null;

    /**
     * 分类
     *
     * @type {number}
     * @memberof BizMediaInput
     */
    catalog?: number | null;

    /**
     * 专辑
     *
     * @type {number}
     * @memberof BizMediaInput
     */
    album?: number | null;

    /**
     * 描述
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    desc?: string | null;

    /**
     * @type {number}
     * @memberof BizMediaInput
     */
    tenantId?: number | null;

    /**
     * 文件后缀
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    suffix?: string | null;

    /**
     * 观看数
     *
     * @type {number}
     * @memberof BizMediaInput
     */
    viewNum?: number;

    /**
     * 状态
     *
     * @type {string}
     * @memberof BizMediaInput
     */
    status?: string | null;

    /**
     * 是否发布
     *
     * @type {boolean}
     * @memberof BizMediaInput
     */
    isPublish?: boolean;

    /**
     * 热门?
     *
     * @type {boolean}
     * @memberof BizMediaInput
     */
    isHot?: boolean;
}
