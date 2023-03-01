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
 * @interface Qa
 */
export interface Qa {
    /**
     * 
     * @type {number}
     * @memberof Qa
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Qa
     */
    toId?: number;
    /**
     * 
     * @type {string}
     * @memberof Qa
     */
    domainName?: string;
    /**
     * 
     * @type {number}
     * @memberof Qa
     */
    domainId: number;
    /**
     * 
     * @type {string}
     * @memberof Qa
     */
    toUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof Qa
     */
    byUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof Qa
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof Qa
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof Qa
     */
    msg?: string;
    /**
     * 
     * @type {number}
     * @memberof Qa
     */
    stateCode: number;
    /**
     * 
     * @type {Date}
     * @memberof Qa
     */
    createDateUtc: Date;
    /**
     * 
     * @type {Array<Qa>}
     * @memberof Qa
     */
    replies?: Array<Qa>;
    /**
     * 
     * @type {UserInfo}
     * @memberof Qa
     */
    asker?: UserInfo;
}

export function QaFromJSON(json: any): Qa {
    return QaFromJSONTyped(json, false);
}

export function QaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Qa {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'toId': !exists(json, 'toId') ? undefined : json['toId'],
        'domainName': !exists(json, 'domainName') ? undefined : json['domainName'],
        'domainId': json['domainId'],
        'toUserId': !exists(json, 'toUserId') ? undefined : json['toUserId'],
        'byUserId': !exists(json, 'byUserId') ? undefined : json['byUserId'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'query': !exists(json, 'query') ? undefined : json['query'],
        'msg': !exists(json, 'msg') ? undefined : json['msg'],
        'stateCode': json['stateCode'],
        'createDateUtc': (new Date(json['createDateUtc'])),
        'replies': !exists(json, 'replies') ? undefined : ((json['replies'] as Array<any>).map(QaFromJSON)),
        'asker': !exists(json, 'asker') ? undefined : UserInfoFromJSON(json['asker']),
    };
}

export function QaToJSON(value?: Qa | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'toId': value.toId,
        'domainName': value.domainName,
        'domainId': value.domainId,
        'toUserId': value.toUserId,
        'byUserId': value.byUserId,
        'path': value.path,
        'query': value.query,
        'msg': value.msg,
        'stateCode': value.stateCode,
        'createDateUtc': (value.createDateUtc.toISOString()),
        'replies': value.replies === undefined ? undefined : ((value.replies as Array<any>).map(QaToJSON)),
        'asker': UserInfoToJSON(value.asker),
    };
}
