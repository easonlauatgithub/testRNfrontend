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
    FileRecord,
    FileRecordFromJSON,
    FileRecordFromJSONTyped,
    FileRecordToJSON,
} from './FileRecord';

/**
 * 
 * @export
 * @interface FilterResultOfFileRecord
 */
export interface FilterResultOfFileRecord {
    /**
     * 
     * @type {Array<FileRecord>}
     * @memberof FilterResultOfFileRecord
     */
    items?: Array<FileRecord>;
    /**
     * 
     * @type {BaseFilter}
     * @memberof FilterResultOfFileRecord
     */
    filter?: BaseFilter;
}

export function FilterResultOfFileRecordFromJSON(json: any): FilterResultOfFileRecord {
    return FilterResultOfFileRecordFromJSONTyped(json, false);
}

export function FilterResultOfFileRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterResultOfFileRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(FileRecordFromJSON)),
        'filter': !exists(json, 'filter') ? undefined : BaseFilterFromJSON(json['filter']),
    };
}

export function FilterResultOfFileRecordToJSON(value?: FilterResultOfFileRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(FileRecordToJSON)),
        'filter': BaseFilterToJSON(value.filter),
    };
}
