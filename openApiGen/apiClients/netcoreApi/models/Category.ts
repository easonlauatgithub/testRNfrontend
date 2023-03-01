/* tslint:disable */
/* eslint-disable */
/**
 * My Title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Category
 */
export interface Category {
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    userId?: string;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    parentId: number;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    catId: number;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    typeCode: number;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    stateCode: number;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    subTypeCode: number;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    seq: number;
}

export function CategoryFromJSON(json: any): Category {
    return CategoryFromJSONTyped(json, false);
}

export function CategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Category {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'parentId': json['parentId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'catId': json['catId'],
        'typeCode': json['typeCode'],
        'stateCode': json['stateCode'],
        'subTypeCode': json['subTypeCode'],
        'seq': json['seq'],
    };
}

export function CategoryToJSON(value?: Category | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'parentId': value.parentId,
        'name': value.name,
        'catId': value.catId,
        'typeCode': value.typeCode,
        'stateCode': value.stateCode,
        'subTypeCode': value.subTypeCode,
        'seq': value.seq,
    };
}
