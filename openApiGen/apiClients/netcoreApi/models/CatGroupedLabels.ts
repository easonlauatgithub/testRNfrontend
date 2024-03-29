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
    Category,
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';
import {
    GroupedLabels,
    GroupedLabelsFromJSON,
    GroupedLabelsFromJSONTyped,
    GroupedLabelsToJSON,
} from './GroupedLabels';

/**
 * 
 * @export
 * @interface CatGroupedLabels
 */
export interface CatGroupedLabels {
    /**
     * 
     * @type {Category}
     * @memberof CatGroupedLabels
     */
    category?: Category;
    /**
     * 
     * @type {Array<GroupedLabels>}
     * @memberof CatGroupedLabels
     */
    items?: Array<GroupedLabels>;
}

export function CatGroupedLabelsFromJSON(json: any): CatGroupedLabels {
    return CatGroupedLabelsFromJSONTyped(json, false);
}

export function CatGroupedLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatGroupedLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : CategoryFromJSON(json['category']),
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(GroupedLabelsFromJSON)),
    };
}

export function CatGroupedLabelsToJSON(value?: CatGroupedLabels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': CategoryToJSON(value.category),
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(GroupedLabelsToJSON)),
    };
}

