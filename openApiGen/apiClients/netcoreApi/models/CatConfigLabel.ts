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
 * @interface CatConfigLabel
 */
export interface CatConfigLabel {
    /**
     * 
     * @type {number}
     * @memberof CatConfigLabel
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof CatConfigLabel
     */
    catId: number;
    /**
     * 
     * @type {string}
     * @memberof CatConfigLabel
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof CatConfigLabel
     */
    text0?: string;
    /**
     * 
     * @type {string}
     * @memberof CatConfigLabel
     */
    text1?: string;
    /**
     * 
     * @type {string}
     * @memberof CatConfigLabel
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof CatConfigLabel
     */
    code?: string;
    /**
     * 
     * @type {number}
     * @memberof CatConfigLabel
     */
    seq: number;
    /**
     * 
     * @type {number}
     * @memberof CatConfigLabel
     */
    stateCode: number;
}

export function CatConfigLabelFromJSON(json: any): CatConfigLabel {
    return CatConfigLabelFromJSONTyped(json, false);
}

export function CatConfigLabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatConfigLabel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'catId': json['catId'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'text0': !exists(json, 'text0') ? undefined : json['text0'],
        'text1': !exists(json, 'text1') ? undefined : json['text1'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'seq': json['seq'],
        'stateCode': json['stateCode'],
    };
}

export function CatConfigLabelToJSON(value?: CatConfigLabel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'catId': value.catId,
        'label': value.label,
        'text0': value.text0,
        'text1': value.text1,
        'userId': value.userId,
        'code': value.code,
        'seq': value.seq,
        'stateCode': value.stateCode,
    };
}
