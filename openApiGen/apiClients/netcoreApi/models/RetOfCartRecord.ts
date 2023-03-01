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
    CartRecord,
    CartRecordFromJSON,
    CartRecordFromJSONTyped,
    CartRecordToJSON,
} from './CartRecord';
import {
    Msg,
    MsgFromJSON,
    MsgFromJSONTyped,
    MsgToJSON,
} from './Msg';

/**
 * 
 * @export
 * @interface RetOfCartRecord
 */
export interface RetOfCartRecord {
    /**
     * 
     * @type {boolean}
     * @memberof RetOfCartRecord
     */
    ok: boolean;
    /**
     * 
     * @type {CartRecord}
     * @memberof RetOfCartRecord
     */
    value?: CartRecord;
    /**
     * 
     * @type {Array<Msg>}
     * @memberof RetOfCartRecord
     */
    msgs?: Array<Msg>;
}

export function RetOfCartRecordFromJSON(json: any): RetOfCartRecord {
    return RetOfCartRecordFromJSONTyped(json, false);
}

export function RetOfCartRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetOfCartRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
        'value': !exists(json, 'value') ? undefined : CartRecordFromJSON(json['value']),
        'msgs': !exists(json, 'msgs') ? undefined : ((json['msgs'] as Array<any>).map(MsgFromJSON)),
    };
}

export function RetOfCartRecordToJSON(value?: RetOfCartRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
        'value': CartRecordToJSON(value.value),
        'msgs': value.msgs === undefined ? undefined : ((value.msgs as Array<any>).map(MsgToJSON)),
    };
}

