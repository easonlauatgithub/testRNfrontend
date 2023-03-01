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
 * @interface RoleInfo
 */
export interface RoleInfo {
    /**
     * 
     * @type {number}
     * @memberof RoleInfo
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof RoleInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleInfo
     */
    code?: string;
}

export function RoleInfoFromJSON(json: any): RoleInfo {
    return RoleInfoFromJSONTyped(json, false);
}

export function RoleInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function RoleInfoToJSON(value?: RoleInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'code': value.code,
    };
}

