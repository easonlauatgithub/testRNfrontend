import * as Keychain from 'react-native-keychain';
import {IUserInfo,ILoginInfo} from './UserProvider'

export async function RemoveCredentialAsync(){
  var ret = await Keychain.resetGenericPassword();
  return ret;
}

async function SaveCredentialAsync(storageKey:string,payload:IUserInfo){
  // Store the credentials
  var payloadString = JSON.stringify(payload);
  await Keychain.setGenericPassword(storageKey, payloadString);
};

async function GetCredentialAsync():Promise<IUserInfo|null>{
  //let sampleFormat = {"password": "{\"loginInfo\":{\"userName\":\"Eseeget@gmail.com\",\"password\":\"angus@hkNhk\"},\"displayName\":\"esee get\",\"accessToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuY2Ffc2lkIjoiNzQyZGE1MDEtNDc1MC00ZDNiLTlhMjgtZTY5NDgwZGNiMjIwIiwibmNhX3NpZExlbmd0aCI6IjYwMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiI4Nzc1Y2I5Ni0zOTMyLTQ0MzktYmQzYS04ZWJhYTQ5Yzg2NjQiLCJFbWFpbFZlcmlmaWVkIjoiRmFsc2UiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDRU8iLCJleHAiOjE2NTc4MTU2MDUsImlzcyI6IlByb0luYyIsImF1ZCI6IkxvZ2luQXBpIn0.QeQFFHgfhb79Hxr2QJJ8caKTA6l8Tg92f8yLKxaXwLA\",\"webappUrl\":\"https://hknhk.com?t=login\"}", "service": "com.oknko.ios", "storage": "keychain", "username": "loginState"};  
  try {
    const credentials = await Keychain.getGenericPassword();
    if(credentials!==null && credentials!==false){
      var cre = credentials as Keychain.UserCredentials;
      if(cre.password!==null && cre.password!==''){
        return JSON.parse(cre.password) as IUserInfo;
      }
    }
    return null;
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
  }
  return null;
}

async function resetCredential() {
    await Keychain.resetGenericPassword();
}

export {SaveCredentialAsync,GetCredentialAsync,resetCredential}

