const baseUrl = 'https://hknhk.com'; 
export default {
    appDownloadUrl:baseUrl+'/appdownload',
    webRootUrl:baseUrl,
    webApiUrl:baseUrl,
    getWebappUrl(version:string){
        if(version){
            return `${baseUrl}?t=${version}`
        }
        return baseUrl;
    },
    registerUrl:`${baseUrl}/register`
}