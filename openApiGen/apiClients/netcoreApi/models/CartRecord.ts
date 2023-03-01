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
 * @interface CartRecord
 */
export interface CartRecord {
    /**
     * 
     * @type {number}
     * @memberof CartRecord
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof CartRecord
     */
    priceId: number;
    /**
     * 
     * @type {number}
     * @memberof CartRecord
     */
    quant: number;
}

export function CartRecordFromJSON(json: any): CartRecord {
    return CartRecordFromJSONTyped(json, false);
}

export function CartRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'priceId': json['priceId'],
        'quant': json['quant'],
    };
}

export function CartRecordToJSON(value?: CartRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'priceId': value.priceId,
        'quant': value.quant,
    };
}
