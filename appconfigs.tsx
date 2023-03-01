// const baseUrl = 'https://hknhk.com'; 
// const baseUrl = 'http://localhost:8080'; 
//android
const baseUrl = 'http://192.168.42.62:8080'; 

//iphone
// const baseUrl = 'http://169.254.223.135:8080'; 
// const baseUrl = 'http://172.20.10.3:8080'; 
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