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
 * @interface PsCatId
 */
export interface PsCatId {
    /**
     * 
     * @type {number}
     * @memberof PsCatId
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof PsCatId
     */
    postId?: string;
    /**
     * 
     * @type {number}
     * @memberof PsCatId
     */
    catId: number;
    /**
     * 
     * @type {number}
     * @memberof PsCatId
     */
    stateCode: number;
}

export function PsCatIdFromJSON(json: any): PsCatId {
    return PsCatIdFromJSONTyped(json, false);
}

export function PsCatIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): PsCatId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'postId': !exists(json, 'postId') ? undefined : json['postId'],
        'catId': json['catId'],
        'stateCode': json['stateCode'],
    };
}

export function PsCatIdToJSON(value?: PsCatId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'postId': value.postId,
        'catId': value.catId,
        'stateCode': value.stateCode,
    };
}

