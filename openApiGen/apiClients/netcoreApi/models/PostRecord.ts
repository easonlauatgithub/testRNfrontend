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
    CatLabelGroup,
    CatLabelGroupFromJSON,
    CatLabelGroupFromJSONTyped,
    CatLabelGroupToJSON,
} from './CatLabelGroup';
import {
    Category,
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';
import {
    CategoryPair,
    CategoryPairFromJSON,
    CategoryPairFromJSONTyped,
    CategoryPairToJSON,
} from './CategoryPair';
import {
    FileRecord,
    FileRecordFromJSON,
    FileRecordFromJSONTyped,
    FileRecordToJSON,
} from './FileRecord';
import {
    PostLink,
    PostLinkFromJSON,
    PostLinkFromJSONTyped,
    PostLinkToJSON,
} from './PostLink';
import {
    PriceInfo,
    PriceInfoFromJSON,
    PriceInfoFromJSONTyped,
    PriceInfoToJSON,
} from './PriceInfo';

/**
 * 
 * @export
 * @interface PostRecord
 */
export interface PostRecord {
    /**
     * 
     * @type {Category}
     * @memberof PostRecord
     */
    parentCategory?: Category;
    /**
     * 
     * @type {Category}
     * @memberof PostRecord
     */
    category?: Category;
    /**
     * 
     * @type {Array<PriceInfo>}
     * @memberof PostRecord
     */
    prices?: Array<PriceInfo>;
    /**
     * 
     * @type {Array<FileRecord>}
     * @memberof PostRecord
     */
    images?: Array<FileRecord>;
    /**
     * 
     * @type {Array<FileRecord>}
     * @memberof PostRecord
     */
    videos?: Array<FileRecord>;
    /**
     * 
     * @type {string}
     * @memberof PostRecord
     */
    thumbPath?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRecord
     */
    itemPath?: string;
    /**
     * 
     * @type {Array<CategoryPair>}
     * @memberof PostRecord
     */
    tags?: Array<CategoryPair>;
    /**
     * 
     * @type {Array<CatLabelGroup>}
     * @memberof PostRecord
     */
    labels?: Array<CatLabelGroup>;
    /**
     * 
     * @type {Array<PostLink>}
     * @memberof PostRecord
     */
    links?: Array<PostLink>;
    /**
     * 
     * @type {Array<PostRecord>}
     * @memberof PostRecord
     */
    childs?: Array<PostRecord>;
    /**
     * 
     * @type {Date}
     * @memberof PostRecord
     */
    zoneEditDatetime: Date;
    /**
     * 
     * @type {string}
     * @memberof PostRecord
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRecord
     */
    postId?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRecord
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRecord
     */
    textMsg?: string;
    /**
     * 
     * @type {number}
     * @memberof PostRecord
     */
    catId: number;
    /**
     * 
     * @type {number}
     * @memberof PostRecord
     */
    stateCode: number;
    /**
     * 
     * @type {string}
     * @memberof PostRecord
     */
    parentId?: string;
    /**
     * 
     * @type {number}
     * @memberof PostRecord
     */
    seq: number;
    /**
     * 
     * @type {string}
     * @memberof PostRecord
     */
    extRef?: string;
}

export function PostRecordFromJSON(json: any): PostRecord {
    return PostRecordFromJSONTyped(json, false);
}

export function PostRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parentCategory': !exists(json, 'parentCategory') ? undefined : CategoryFromJSON(json['parentCategory']),
        'category': !exists(json, 'category') ? undefined : CategoryFromJSON(json['category']),
        'prices': !exists(json, 'prices') ? undefined : ((json['prices'] as Array<any>).map(PriceInfoFromJSON)),
        'images': !exists(json, 'images') ? undefined : ((json['images'] as Array<any>).map(FileRecordFromJSON)),
        'videos': !exists(json, 'videos') ? undefined : ((json['videos'] as Array<any>).map(FileRecordFromJSON)),
        'thumbPath': !exists(json, 'thumbPath') ? undefined : json['thumbPath'],
        'itemPath': !exists(json, 'itemPath') ? undefined : json['itemPath'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(CategoryPairFromJSON)),
        'labels': !exists(json, 'labels') ? undefined : ((json['labels'] as Array<any>).map(CatLabelGroupFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(PostLinkFromJSON)),
        'childs': !exists(json, 'childs') ? undefined : ((json['childs'] as Array<any>).map(PostRecordFromJSON)),
        'zoneEditDatetime': (new Date(json['zoneEditDatetime'])),
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

export function PostRecordToJSON(value?: PostRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parentCategory': CategoryToJSON(value.parentCategory),
        'category': CategoryToJSON(value.category),
        'prices': value.prices === undefined ? undefined : ((value.prices as Array<any>).map(PriceInfoToJSON)),
        'images': value.images === undefined ? undefined : ((value.images as Array<any>).map(FileRecordToJSON)),
        'videos': value.videos === undefined ? undefined : ((value.videos as Array<any>).map(FileRecordToJSON)),
        'thumbPath': value.thumbPath,
        'itemPath': value.itemPath,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(CategoryPairToJSON)),
        'labels': value.labels === undefined ? undefined : ((value.labels as Array<any>).map(CatLabelGroupToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(PostLinkToJSON)),
        'childs': value.childs === undefined ? undefined : ((value.childs as Array<any>).map(PostRecordToJSON)),
        'zoneEditDatetime': (value.zoneEditDatetime.toISOString()),
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

