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
    CatLabelBase,
    CatLabelBaseFromJSON,
    CatLabelBaseFromJSONTyped,
    CatLabelBaseToJSON,
} from './CatLabelBase';
import {
    Category,
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';

/**
 * 
 * @export
 * @interface GroupedLabels
 */
export interface GroupedLabels {
    /**
     * 
     * @type {Category}
     * @memberof GroupedLabels
     */
    category?: Category;
    /**
     * 
     * @type {Array<CatLabelBase>}
     * @memberof GroupedLabels
     */
    items?: Array<CatLabelBase>;
}

export function GroupedLabelsFromJSON(json: any): GroupedLabels {
    return GroupedLabelsFromJSONTyped(json, false);
}

export function GroupedLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupedLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : CategoryFromJSON(json['category']),
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(CatLabelBaseFromJSON)),
    };
}

export function GroupedLabelsToJSON(value?: GroupedLabels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': CategoryToJSON(value.category),
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(CatLabelBaseToJSON)),
    };
}

