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
    SortOrder,
    SortOrderFromJSON,
    SortOrderFromJSONTyped,
    SortOrderToJSON,
} from './SortOrder';

/**
 * 
 * @export
 * @interface Filterer
 */
export interface Filterer {
    /**
     * 
     * @type {string}
     * @memberof Filterer
     */
    shopCode?: string;
    /**
     * 
     * @type {number}
     * @memberof Filterer
     */
    shopId: number;
    /**
     * 
     * @type {string}
     * @memberof Filterer
     */
    shopUserId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Filterer
     */
    parentIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Filterer
     */
    postIds?: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Filterer
     */
    cats?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Filterer
     */
    catSubTypes?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Filterer
     */
    tags?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Filterer
     */
    states?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Filterer
     */
    catStates?: Array<number>;
    /**
     * 
     * @type {Array<SortOrder>}
     * @memberof Filterer
     */
    sorts?: Array<SortOrder>;
    /**
     * 
     * @type {string}
     * @memberof Filterer
     */
    keyword?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Filterer
     */
    hasCatStates: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Filterer
     */
    hasStates: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Filterer
     */
    hasCats: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Filterer
     */
    hasTags: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Filterer
     */
    hasPostIds: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Filterer
     */
    hasParentIds: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Filterer
     */
    hasCatSubTypes: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Filterer
     */
    hasSorts: boolean;
    /**
     * 
     * @type {number}
     * @memberof Filterer
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof Filterer
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof Filterer
     */
    pageSize: number;
    /**
     * 
     * @type {number}
     * @memberof Filterer
     */
    skip: number;
}

export function FiltererFromJSON(json: any): Filterer {
    return FiltererFromJSONTyped(json, false);
}

export function FiltererFromJSONTyped(json: any, ignoreDiscriminator: boolean): Filterer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shopCode': !exists(json, 'shopCode') ? undefined : json['shopCode'],
        'shopId': json['shopId'],
        'shopUserId': !exists(json, 'shopUserId') ? undefined : json['shopUserId'],
        'parentIds': !exists(json, 'parentIds') ? undefined : json['parentIds'],
        'postIds': !exists(json, 'postIds') ? undefined : json['postIds'],
        'cats': !exists(json, 'cats') ? undefined : json['cats'],
        'catSubTypes': !exists(json, 'catSubTypes') ? undefined : json['catSubTypes'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'states': !exists(json, 'states') ? undefined : json['states'],
        'catStates': !exists(json, 'catStates') ? undefined : json['catStates'],
        'sorts': !exists(json, 'sorts') ? undefined : ((json['sorts'] as Array<any>).map(SortOrderFromJSON)),
        'keyword': !exists(json, 'keyword') ? undefined : json['keyword'],
        'hasCatStates': json['hasCatStates'],
        'hasStates': json['hasStates'],
        'hasCats': json['hasCats'],
        'hasTags': json['hasTags'],
        'hasPostIds': json['hasPostIds'],
        'hasParentIds': json['hasParentIds'],
        'hasCatSubTypes': json['hasCatSubTypes'],
        'hasSorts': json['hasSorts'],
        'count': json['count'],
        'page': json['page'],
        'pageSize': json['pageSize'],
        'skip': json['skip'],
    };
}

export function FiltererToJSON(value?: Filterer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shopCode': value.shopCode,
        'shopId': value.shopId,
        'shopUserId': value.shopUserId,
        'parentIds': value.parentIds,
        'postIds': value.postIds,
        'cats': value.cats,
        'catSubTypes': value.catSubTypes,
        'tags': value.tags,
        'states': value.states,
        'catStates': value.catStates,
        'sorts': value.sorts === undefined ? undefined : ((value.sorts as Array<any>).map(SortOrderToJSON)),
        'keyword': value.keyword,
        'hasCatStates': value.hasCatStates,
        'hasStates': value.hasStates,
        'hasCats': value.hasCats,
        'hasTags': value.hasTags,
        'hasPostIds': value.hasPostIds,
        'hasParentIds': value.hasParentIds,
        'hasCatSubTypes': value.hasCatSubTypes,
        'hasSorts': value.hasSorts,
        'count': value.count,
        'page': value.page,
        'pageSize': value.pageSize,
        'skip': value.skip,
    };
}

