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
 * @interface PostBase
 */
export interface PostBase {
    /**
     * 
     * @type {string}
     * @memberof PostBase
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof PostBase
     */
    postId?: string;
    /**
     * 
     * @type {string}
     * @memberof PostBase
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof PostBase
     */
    textMsg?: string;
    /**
     * 
     * @type {number}
     * @memberof PostBase
     */
    catId: number;
    /**
     * 
     * @type {number}
     * @memberof PostBase
     */
    stateCode: number;
    /**
     * 
     * @type {string}
     * @memberof PostBase
     */
    parentId?: string;
    /**
     * 
     * @type {number}
     * @memberof PostBase
     */
    seq: number;
    /**
     * 
     * @type {string}
     * @memberof PostBase
     */
    extRef?: string;
}

export function PostBaseFromJSON(json: any): PostBase {
    return PostBaseFromJSONTyped(json, false);
}

export function PostBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'postId': !exists(json, 'postId') ? undefined : json['postId'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'textMsg': !exists(json, 'textMsg') ? undefined : json['textMsg'],
        'catId': json['catId'],
        'stateCode': json['stateCode'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'seq': json['seq'],
        'extRef': !exists(json, 'extRef') ? undefined : json['extRef'],
    };
}

export function PostBaseToJSON(value?: PostBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'postId': value.postId,
        'title': value.title,
        'textMsg': value.textMsg,
        'catId': value.catId,
        'stateCode': value.stateCode,
        'parentId': value.parentId,
        'seq': value.seq,
        'extRef': value.extRef,
    };
}
