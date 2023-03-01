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
 * @interface UserService
 */
export interface UserService {
    /**
     * 
     * @type {string}
     * @memberof UserService
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof UserService
     */
    icon?: string;
}

export function UserServiceFromJSON(json: any): UserService {
    return UserServiceFromJSONTyped(json, false);
}

export function UserServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
    };
}

export function UserServiceToJSON(value?: UserService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'icon': value.icon,
    };
}

