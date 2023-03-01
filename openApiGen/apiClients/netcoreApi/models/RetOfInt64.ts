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
import {
    Msg,
    MsgFromJSON,
    MsgFromJSONTyped,
    MsgToJSON,
} from './Msg';

/**
 * 
 * @export
 * @interface RetOfInt64
 */
export interface RetOfInt64 {
    /**
     * 
     * @type {boolean}
     * @memberof RetOfInt64
     */
    ok: boolean;
    /**
     * 
     * @type {number}
     * @memberof RetOfInt64
     */
    value: number;
    /**
     * 
     * @type {Array<Msg>}
     * @memberof RetOfInt64
     */
    msgs?: Array<Msg>;
}

export function RetOfInt64FromJSON(json: any): RetOfInt64 {
    return RetOfInt64FromJSONTyped(json, false);
}

export function RetOfInt64FromJSONTyped(json: any, ignoreDiscriminator: boolean): RetOfInt64 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
        'value': json['value'],
        'msgs': !exists(json, 'msgs') ? undefined : ((json['msgs'] as Array<any>).map(MsgFromJSON)),
    };
}

export function RetOfInt64ToJSON(value?: RetOfInt64 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
        'value': value.value,
        'msgs': value.msgs === undefined ? undefined : ((value.msgs as Array<any>).map(MsgToJSON)),
    };
}
