import appconfigs from "../appconfigs";
import React, { createContext, useState } from "react";
import {GetCredentialAsync} from "./Keychain";

export interface IUserInfo {
    displayName:string | undefined;
    accessToken:string | undefined;
    webappUrl:string | undefined;
    loginInfo:ILoginInfo| null;
    setUserInfo?(info:IUserInfo):void;
}

export interface ILoginInfo{
    userName:string | undefined;
    password:string | undefined;
}

const userState = { 
    displayName: '', 
    accessToken: '',
    loginInfo:null,
    webappUrl:appconfigs.getWebappUrl('nologin'),
    setUserInfo:(info:IUserInfo)=>{} 
};
export const UserContext = createContext(userState);

export default function UserContextProvider({children}) {
    const [userInfo, setUserInfo] = useState(userState);
    const setters = {
        setUserInfo
    };
    
    GetCredentialAsync().then((ret)=>{
        console.log('credential loginInfo retrieved:',ret?.loginInfo);
      });
    return (<UserContext.Provider value={{...userInfo, ...setters}}>
        {children}
    </UserContext.Provider>)
}