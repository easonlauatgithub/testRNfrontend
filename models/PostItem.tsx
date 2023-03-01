import { PostRecord } from "../openApiGen/apiClients/netcoreApi/index";

export class PostItem{
    constructor(){}
    id:string|undefined;
    title:string|undefined;
    thumbPath:string|undefined;
    itemPath:string|undefined;
}

export class IndexViewModel{
    constructor(){}
    title:String | undefined;
    msg:string|undefined;
    items:PostItem[] = new Array<PostItem>();
}
