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
    CatConfigLabel,
    CatConfigLabelFromJSON,
    CatConfigLabelFromJSONTyped,
    CatConfigLabelToJSON,
} from './CatConfigLabel';
import {
    Msg,
    MsgFromJSON,
    MsgFromJSONTyped,
    MsgToJSON,
} from './Msg';

/**
 * 
 * @export
 * @interface RetOfCatConfigLabel
 */
export interface RetOfCatConfigLabel {
    /**
     * 
     * @type {boolean}
     * @memberof RetOfCatConfigLabel
     */
    ok: boolean;
    /**
     * 
     * @type {CatConfigLabel}
     * @memberof RetOfCatConfigLabel
     */
    value?: CatConfigLabel;
    /**
     * 
     * @type {Array<Msg>}
     * @memberof RetOfCatConfigLabel
     */
    msgs?: Array<Msg>;
}

export function RetOfCatConfigLabelFromJSON(json: any): RetOfCatConfigLabel {
    return RetOfCatConfigLabelFromJSONTyped(json, false);
}

export function RetOfCatConfigLabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetOfCatConfigLabel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
        'value': !exists(json, 'value') ? undefined : CatConfigLabelFromJSON(json['value']),
        'msgs': !exists(json, 'msgs') ? undefined : ((json['msgs'] as Array<any>).map(MsgFromJSON)),
    };
}

export function RetOfCatConfigLabelToJSON(value?: RetOfCatConfigLabel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
        'value': CatConfigLabelToJSON(value.value),
        'msgs': value.msgs === undefined ? undefined : ((value.msgs as Array<any>).map(MsgToJSON)),
    };
}
