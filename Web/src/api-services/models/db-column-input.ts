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
 * @interface DbColumnInput
 */
export interface DbColumnInput {

    /**
     * @type {string}
     * @memberof DbColumnInput
     */
    configId?: string | null;

    /**
     * @type {string}
     * @memberof DbColumnInput
     */
    tableName?: string | null;

    /**
     * @type {string}
     * @memberof DbColumnInput
     */
    dbColumnName?: string | null;

    /**
     * @type {string}
     * @memberof DbColumnInput
     */
    dataType?: string | null;

    /**
     * @type {number}
     * @memberof DbColumnInput
     */
    length?: number;

    /**
     * @type {string}
     * @memberof DbColumnInput
     */
    columnDescription?: string | null;

    /**
     * @type {number}
     * @memberof DbColumnInput
     */
    isNullable?: number;

    /**
     * @type {number}
     * @memberof DbColumnInput
     */
    isIdentity?: number;

    /**
     * @type {number}
     * @memberof DbColumnInput
     */
    isPrimarykey?: number;

    /**
     * @type {number}
     * @memberof DbColumnInput
     */
    decimalDigits?: number;
}
