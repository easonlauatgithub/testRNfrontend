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
import {
    RoleInfo,
    RoleInfoFromJSON,
    RoleInfoFromJSONTyped,
    RoleInfoToJSON,
} from './RoleInfo';

/**
 * 
 * @export
 * @interface RetOfRoleInfo
 */
export interface RetOfRoleInfo {
    /**
     * 
     * @type {boolean}
     * @memberof RetOfRoleInfo
     */
    ok: boolean;
    /**
     * 
     * @type {RoleInfo}
     * @memberof RetOfRoleInfo
     */
    value?: RoleInfo;
    /**
     * 
     * @type {Array<Msg>}
     * @memberof RetOfRoleInfo
     */
    msgs?: Array<Msg>;
}

export function RetOfRoleInfoFromJSON(json: any): RetOfRoleInfo {
    return RetOfRoleInfoFromJSONTyped(json, false);
}

export function RetOfRoleInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetOfRoleInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
        'value': !exists(json, 'value') ? undefined : RoleInfoFromJSON(json['value']),
        'msgs': !exists(json, 'msgs') ? undefined : ((json['msgs'] as Array<any>).map(MsgFromJSON)),
    };
}

export function RetOfRoleInfoToJSON(value?: RetOfRoleInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
        'value': RoleInfoToJSON(value.value),
        'msgs': value.msgs === undefined ? undefined : ((value.msgs as Array<any>).map(MsgToJSON)),
    };
}

