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
 * 增加订阅消息模板
 *
 * @export
 * @interface AddSubscribeMessageTemplateInput
 */
export interface AddSubscribeMessageTemplateInput {

    /**
     * 模板标题Id
     *
     * @type {string}
     * @memberof AddSubscribeMessageTemplateInput
     */
    templateTitleId: string;

    /**
     * 模板关键词列表,例如 [3,5,4]
     *
     * @type {Array<number>}
     * @memberof AddSubscribeMessageTemplateInput
     */
    keyworkIdList: Array<number>;

    /**
     * 服务场景描述，15个字以内
     *
     * @type {string}
     * @memberof AddSubscribeMessageTemplateInput
     */
    sceneDescription: string;
}
