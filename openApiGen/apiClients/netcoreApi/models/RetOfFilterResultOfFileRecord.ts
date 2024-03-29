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
    FilterResultOfFileRecord,
    FilterResultOfFileRecordFromJSON,
    FilterResultOfFileRecordFromJSONTyped,
    FilterResultOfFileRecordToJSON,
} from './FilterResultOfFileRecord';
import {
    Msg,
    MsgFromJSON,
    MsgFromJSONTyped,
    MsgToJSON,
} from './Msg';

/**
 * 
 * @export
 * @interface RetOfFilterResultOfFileRecord
 */
export interface RetOfFilterResultOfFileRecord {
    /**
     * 
     * @type {boolean}
     * @memberof RetOfFilterResultOfFileRecord
     */
    ok: boolean;
    /**
     * 
     * @type {FilterResultOfFileRecord}
     * @memberof RetOfFilterResultOfFileRecord
     */
    value?: FilterResultOfFileRecord;
    /**
     * 
     * @type {Array<Msg>}
     * @memberof RetOfFilterResultOfFileRecord
     */
    msgs?: Array<Msg>;
}

export function RetOfFilterResultOfFileRecordFromJSON(json: any): RetOfFilterResultOfFileRecord {
    return RetOfFilterResultOfFileRecordFromJSONTyped(json, false);
}

export function RetOfFilterResultOfFileRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetOfFilterResultOfFileRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
        'value': !exists(json, 'value') ? undefined : FilterResultOfFileRecordFromJSON(json['value']),
        'msgs': !exists(json, 'msgs') ? undefined : ((json['msgs'] as Array<any>).map(MsgFromJSON)),
    };
}

export function RetOfFilterResultOfFileRecordToJSON(value?: RetOfFilterResultOfFileRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
        'value': FilterResultOfFileRecordToJSON(value.value),
        'msgs': value.msgs === undefined ? undefined : ((value.msgs as Array<any>).map(MsgToJSON)),
    };
}

