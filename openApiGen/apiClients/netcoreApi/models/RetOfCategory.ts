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
    Category,
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';
import {
    Msg,
    MsgFromJSON,
    MsgFromJSONTyped,
    MsgToJSON,
} from './Msg';

/**
 * 
 * @export
 * @interface RetOfCategory
 */
export interface RetOfCategory {
    /**
     * 
     * @type {boolean}
     * @memberof RetOfCategory
     */
    ok: boolean;
    /**
     * 
     * @type {Category}
     * @memberof RetOfCategory
     */
    value?: Category;
    /**
     * 
     * @type {Array<Msg>}
     * @memberof RetOfCategory
     */
    msgs?: Array<Msg>;
}

export function RetOfCategoryFromJSON(json: any): RetOfCategory {
    return RetOfCategoryFromJSONTyped(json, false);
}

export function RetOfCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetOfCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
        'value': !exists(json, 'value') ? undefined : CategoryFromJSON(json['value']),
        'msgs': !exists(json, 'msgs') ? undefined : ((json['msgs'] as Array<any>).map(MsgFromJSON)),
    };
}

export function RetOfCategoryToJSON(value?: RetOfCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
        'value': CategoryToJSON(value.value),
        'msgs': value.msgs === undefined ? undefined : ((value.msgs as Array<any>).map(MsgToJSON)),
    };
}

