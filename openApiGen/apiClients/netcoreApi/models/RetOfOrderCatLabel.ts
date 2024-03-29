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
    OrderCatLabel,
    OrderCatLabelFromJSON,
    OrderCatLabelFromJSONTyped,
    OrderCatLabelToJSON,
} from './OrderCatLabel';

/**
 * 
 * @export
 * @interface RetOfOrderCatLabel
 */
export interface RetOfOrderCatLabel {
    /**
     * 
     * @type {boolean}
     * @memberof RetOfOrderCatLabel
     */
    ok: boolean;
    /**
     * 
     * @type {OrderCatLabel}
     * @memberof RetOfOrderCatLabel
     */
    value?: OrderCatLabel;
    /**
     * 
     * @type {Array<Msg>}
     * @memberof RetOfOrderCatLabel
     */
    msgs?: Array<Msg>;
}

export function RetOfOrderCatLabelFromJSON(json: any): RetOfOrderCatLabel {
    return RetOfOrderCatLabelFromJSONTyped(json, false);
}

export function RetOfOrderCatLabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetOfOrderCatLabel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
        'value': !exists(json, 'value') ? undefined : OrderCatLabelFromJSON(json['value']),
        'msgs': !exists(json, 'msgs') ? undefined : ((json['msgs'] as Array<any>).map(MsgFromJSON)),
    };
}

export function RetOfOrderCatLabelToJSON(value?: RetOfOrderCatLabel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
        'value': OrderCatLabelToJSON(value.value),
        'msgs': value.msgs === undefined ? undefined : ((value.msgs as Array<any>).map(MsgToJSON)),
    };
}

