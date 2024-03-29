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
    UserInfo,
    UserInfoFromJSON,
    UserInfoFromJSONTyped,
    UserInfoToJSON,
} from './UserInfo';

/**
 * 
 * @export
 * @interface DashProfile
 */
export interface DashProfile {
    /**
     * 
     * @type {UserInfo}
     * @memberof DashProfile
     */
    accountUser?: UserInfo;
    /**
     * 
     * @type {boolean}
     * @memberof DashProfile
     */
    isShopKeeper: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashProfile
     */
    isAgent: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashProfile
     */
    isManager: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashProfile
     */
    isAdmin: boolean;
}

export function DashProfileFromJSON(json: any): DashProfile {
    return DashProfileFromJSONTyped(json, false);
}

export function DashProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountUser': !exists(json, 'accountUser') ? undefined : UserInfoFromJSON(json['accountUser']),
        'isShopKeeper': json['isShopKeeper'],
        'isAgent': json['isAgent'],
        'isManager': json['isManager'],
        'isAdmin': json['isAdmin'],
    };
}

export function DashProfileToJSON(value?: DashProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountUser': UserInfoToJSON(value.accountUser),
        'isShopKeeper': value.isShopKeeper,
        'isAgent': value.isAgent,
        'isManager': value.isManager,
        'isAdmin': value.isAdmin,
    };
}

