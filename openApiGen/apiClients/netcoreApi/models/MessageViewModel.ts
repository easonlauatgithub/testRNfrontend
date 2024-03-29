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
 * @interface MessageViewModel
 */
export interface MessageViewModel {
    /**
     * 
     * @type {string}
     * @memberof MessageViewModel
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageViewModel
     */
    message?: string;
}

export function MessageViewModelFromJSON(json: any): MessageViewModel {
    return MessageViewModelFromJSONTyped(json, false);
}

export function MessageViewModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageViewModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function MessageViewModelToJSON(value?: MessageViewModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'message': value.message,
    };
}

