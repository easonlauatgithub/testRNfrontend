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
    Platform,
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
} from './Platform';

/**
 * 
 * @export
 * @interface DeviceReg
 */
export interface DeviceReg {
    /**
     * 
     * @type {Platform}
     * @memberof DeviceReg
     */
    platform: Platform;
    /**
     * 
     * @type {string}
     * @memberof DeviceReg
     */
    deviceID?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceReg
     */
    pushToken?: string;
}

export function DeviceRegFromJSON(json: any): DeviceReg {
    return DeviceRegFromJSONTyped(json, false);
}

export function DeviceRegFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceReg {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'platform': PlatformFromJSON(json['platform']),
        'deviceID': !exists(json, 'deviceID') ? undefined : json['deviceID'],
        'pushToken': !exists(json, 'pushToken') ? undefined : json['pushToken'],
    };
}

export function DeviceRegToJSON(value?: DeviceReg | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'platform': PlatformToJSON(value.platform),
        'deviceID': value.deviceID,
        'pushToken': value.pushToken,
    };
}
