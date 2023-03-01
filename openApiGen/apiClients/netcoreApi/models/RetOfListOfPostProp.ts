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
    PostProp,
    PostPropFromJSON,
    PostPropFromJSONTyped,
    PostPropToJSON,
} from './PostProp';

/**
 * 
 * @export
 * @interface RetOfListOfPostProp
 */
export interface RetOfListOfPostProp {
    /**
     * 
     * @type {boolean}
     * @memberof RetOfListOfPostProp
     */
    ok: boolean;
    /**
     * 
     * @type {Array<PostProp>}
     * @memberof RetOfListOfPostProp
     */
    value?: Array<PostProp>;
    /**
     * 
     * @type {Array<Msg>}
     * @memberof RetOfListOfPostProp
     */
    msgs?: Array<Msg>;
}

export function RetOfListOfPostPropFromJSON(json: any): RetOfListOfPostProp {
    return RetOfListOfPostPropFromJSONTyped(json, false);
}

export function RetOfListOfPostPropFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetOfListOfPostProp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(PostPropFromJSON)),
        'msgs': !exists(json, 'msgs') ? undefined : ((json['msgs'] as Array<any>).map(MsgFromJSON)),
    };
}

export function RetOfListOfPostPropToJSON(value?: RetOfListOfPostProp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(PostPropToJSON)),
        'msgs': value.msgs === undefined ? undefined : ((value.msgs as Array<any>).map(MsgToJSON)),
    };
}

