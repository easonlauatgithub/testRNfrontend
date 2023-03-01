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
    BaseFilter,
    BaseFilterFromJSON,
    BaseFilterFromJSONTyped,
    BaseFilterToJSON,
} from './BaseFilter';
import {
    OrderDetail,
    OrderDetailFromJSON,
    OrderDetailFromJSONTyped,
    OrderDetailToJSON,
} from './OrderDetail';

/**
 * 
 * @export
 * @interface FilterResultOfOrderDetail
 */
export interface FilterResultOfOrderDetail {
    /**
     * 
     * @type {Array<OrderDetail>}
     * @memberof FilterResultOfOrderDetail
     */
    items?: Array<OrderDetail>;
    /**
     * 
     * @type {BaseFilter}
     * @memberof FilterResultOfOrderDetail
     */
    filter?: BaseFilter;
}

export function FilterResultOfOrderDetailFromJSON(json: any): FilterResultOfOrderDetail {
    return FilterResultOfOrderDetailFromJSONTyped(json, false);
}

export function FilterResultOfOrderDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterResultOfOrderDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(OrderDetailFromJSON)),
        'filter': !exists(json, 'filter') ? undefined : BaseFilterFromJSON(json['filter']),
    };
}

export function FilterResultOfOrderDetailToJSON(value?: FilterResultOfOrderDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(OrderDetailToJSON)),
        'filter': BaseFilterToJSON(value.filter),
    };
}
