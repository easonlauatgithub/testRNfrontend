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
    DeviceReg,
    DeviceRegFromJSON,
    DeviceRegFromJSONTyped,
    DeviceRegToJSON,
} from './DeviceReg';

/**
 * 
 * @export
 * @interface LoginInfo
 */
export interface LoginInfo {
    /**
     * 
     * @type {number}
     * @memberof LoginInfo
     */
    domainRootId: number;
    /**
     * 
     * @type {string}
     * @memberof LoginInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginInfo
     */
    password?: string;
    /**
     * 
     * @type {DeviceReg}
     * @memberof LoginInfo
     */
    deviceReg?: DeviceReg;
}

export function LoginInfoFromJSON(json: any): LoginInfo {
    return LoginInfoFromJSONTyped(json, false);
}

export function LoginInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domainRootId': json['domainRootId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'deviceReg': !exists(json, 'deviceReg') ? undefined : DeviceRegFromJSON(json['deviceReg']),
    };
}

export function LoginInfoToJSON(value?: LoginInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domainRootId': value.domainRootId,
        'id': value.id,
        'password': value.password,
        'deviceReg': DeviceRegToJSON(value.deviceReg),
    };
}

