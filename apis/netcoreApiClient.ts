import { Configuration, SpaApi, AppServerApi, LoginInfo, DeviceReg, Platform, PostRecordFromJSON } from "../openApiGen/apiClients/netcoreApi/index";
import appconfigs from "../appconfigs";
import { IndexViewModel, PostItem } from "../models/PostItem";
import { PostRecord } from "../openApiGen/apiClients/netcoreApi/index";

export class RestApiClient {
    private client: SpaApi;
    constructor(private baseUrl: string) {
        let config = new Configuration({ basePath: this.baseUrl });
        this.client = new SpaApi(config);
    }

    async getShopItemsAsync(filter: any) {
        return this.client.spaGetShopItems(filter);
        //return dt.data;
    }
    async getPagedInfosAsync(): Promise<PostItem[] | null> {
        var ret = await this.client.spaGetPagedInfos({
            srcShopCode: '',
            scode: '',
            keyword: '',
            catSubType: 0,
            page: 1,
            pageSize: 10,
            getLinks: true
        });

        if (ret !== null && ret.posts && ret.posts !== null && ret.posts.length > 0) {
            var posts = ret.posts.map(post => {
                var item = new PostItem();
                item.id = post.postId;
                item.title = post.title;
                item.thumbPath = post.thumbPath;
                item.itemPath = post.itemPath;
                return item;
            });
            return posts;
        }
        return [];
    }

    static getInstance(): RestApiClient {
        return new RestApiClient(appconfigs.webApiUrl);
    }

}

class DeviceInfoDto {
    platform?: string;
    deviceID?: string | undefined;
    pushToken?: string | undefined;
}

class LoginInfoDto {
    domainRootId: number = 0;
    id?: string | undefined;
    password?: string | undefined;
    deviceReg?: DeviceInfoDto | undefined;
}

export class AppApiClient {
    private client: AppServerApi;
    constructor(private baseUrl: string) {
        let config = new Configuration({ basePath: this.baseUrl });
        this.client = new AppServerApi(config);
    }

    async loginAsync(info: LoginInfoDto) {
        return this.client.appServerLogin({
            info: {
                domainRootId: 0,
                id: info.id,
                password: info.password,
                deviceReg: {
                    platform: info.deviceReg?.platform === "android" ? Platform.A : Platform.I,
                    deviceID: info.deviceReg?.deviceID,
                    pushToken: info.deviceReg?.pushToken
                }
            }
        })
    }

    async logoutAsync(accessToken: string) {
        return this.client.appServerLogout({
            headers: { "Agx-CJAuth": accessToken }
        });
    }

    async getIndex(): Promise<IndexViewModel | null> {
        var ret = await this.client.appServerIndex();
        console.log('ret of index',ret);
        if (ret) {
            let md = new IndexViewModel();
            md.title = ret.title;
            md.msg = ret.msg;
            if (ret.items) {
                md.items = ret.items?.map(it => {
                    let item = new PostItem();
                    item.id = it.postId;
                    item.thumbPath = it.thumbPath;
                    item.title = it.title;
                    item.itemPath= it.itemPath;
                    return item;
                });
            }
            return md;
        }
        return null;
    }

    static getInstance(): AppApiClient {
        return new AppApiClient(appconfigs.webApiUrl);
    }
}