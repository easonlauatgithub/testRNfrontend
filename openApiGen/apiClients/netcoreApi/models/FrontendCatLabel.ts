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
 * @interface FrontendCatLabel
 */
export interface FrontendCatLabel {
    /**
     * 
     * @type {string}
     * @memberof FrontendCatLabel
     */
    frnImgPath?: string;
    /**
     * 
     * @type {number}
     * @memberof FrontendCatLabel
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof FrontendCatLabel
     */
    catId: number;
    /**
     * 
     * @type {string}
     * @memberof FrontendCatLabel
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof FrontendCatLabel
     */
    text0?: string;
    /**
     * 
     * @type {string}
     * @memberof FrontendCatLabel
     */
    text1?: string;
    /**
     * 
     * @type {string}
     * @memberof FrontendCatLabel
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof FrontendCatLabel
     */
    code?: string;
    /**
     * 
     * @type {number}
     * @memberof FrontendCatLabel
     */
    seq: number;
    /**
     * 
     * @type {number}
     * @memberof FrontendCatLabel
     */
    stateCode: number;
}

export function FrontendCatLabelFromJSON(json: any): FrontendCatLabel {
    return FrontendCatLabelFromJSONTyped(json, false);
}

export function FrontendCatLabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrontendCatLabel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'frnImgPath': !exists(json, 'frnImgPath') ? undefined : json['frnImgPath'],
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

export function FrontendCatLabelToJSON(value?: FrontendCatLabel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'frnImgPath': value.frnImgPath,
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
