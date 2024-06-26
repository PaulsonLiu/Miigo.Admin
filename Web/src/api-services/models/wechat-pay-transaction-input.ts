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
 * 
 *
 * @export
 * @interface WechatPayTransactionInput
 */
export interface WechatPayTransactionInput {

    /**
     * OpenId
     *
     * @type {string}
     * @memberof WechatPayTransactionInput
     */
    openId?: string | null;

    /**
     * 订单金额
     *
     * @type {number}
     * @memberof WechatPayTransactionInput
     */
    total?: number;

    /**
     * 商品描述
     *
     * @type {string}
     * @memberof WechatPayTransactionInput
     */
    description?: string | null;

    /**
     * 附加数据
     *
     * @type {string}
     * @memberof WechatPayTransactionInput
     */
    attachment?: string | null;

    /**
     * 优惠标记
     *
     * @type {string}
     * @memberof WechatPayTransactionInput
     */
    goodsTag?: string | null;
}
