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
    FileRecord,
    FileRecordFromJSON,
    FileRecordFromJSONTyped,
    FileRecordToJSON,
} from './FileRecord';
import {
    Msg,
    MsgFromJSON,
    MsgFromJSONTyped,
    MsgToJSON,
} from './Msg';

/**
 * 
 * @export
 * @interface RetOfFileRecord
 */
export interface RetOfFileRecord {
    /**
     * 
     * @type {boolean}
     * @memberof RetOfFileRecord
     */
    ok: boolean;
    /**
     * 
     * @type {FileRecord}
     * @memberof RetOfFileRecord
     */
    value?: FileRecord;
    /**
     * 
     * @type {Array<Msg>}
     * @memberof RetOfFileRecord
     */
    msgs?: Array<Msg>;
}

export function RetOfFileRecordFromJSON(json: any): RetOfFileRecord {
    return RetOfFileRecordFromJSONTyped(json, false);
}

export function RetOfFileRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetOfFileRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
        'value': !exists(json, 'value') ? undefined : FileRecordFromJSON(json['value']),
        'msgs': !exists(json, 'msgs') ? undefined : ((json['msgs'] as Array<any>).map(MsgFromJSON)),
    };
}

export function RetOfFileRecordToJSON(value?: RetOfFileRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
        'value': FileRecordToJSON(value.value),
        'msgs': value.msgs === undefined ? undefined : ((value.msgs as Array<any>).map(MsgToJSON)),
    };
}
