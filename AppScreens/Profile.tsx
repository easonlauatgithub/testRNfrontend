import React, { useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, TextInput, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { AppApiClient } from "../apis/netcoreApiClient";
import appconfigs from "../appconfigs";
import { ILoginInfo, UserContext } from "./UserProvider";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Indicator } from './Indicator';
import { SaveCredentialAsync, GetCredentialAsync, RemoveCredentialAsync } from "./Keychain";
import { ThemeStyles } from "./Css/ThemeStyles";

let _inputs: ILoginInfo = {
    userName: "localtest@anginx.com",
    password: "123123"
};

function userNameChanged(userName: string) {
    _inputs.userName = userName;
}

function passwordChanged(password: string) {
    _inputs.password = password;
}

function Profile({ route, navigation }) {
    console.log('profile entered');
    useFocusEffect(
        React.useCallback(() => {
            console.log('useEffect in WebviewApp!');
            let newReq = route.params?.req;
            console.log('newReq', newReq);
            if (newReq === 'login') {
                console.log('processing newReq=login');
                //check if there is credential, auto login if there is
                var userInfoState = GetCredentialAsync().then((info) => {
                    console.log('profile autologin info retrieved', info);
                    if (info !== null && info.loginInfo !== null) {
                        _inputs.password = info.loginInfo.password;
                        _inputs.userName = info.loginInfo.userName;
                        (async () => {
                            console.log('go doLogin');
                            var success = await doLogin();
                            if (success) {
                                console.log('auto login success, navigating to url');
                                navigation.navigate('WebviewApp', { url: appconfigs.getWebappUrl('login') });
                            } else {
                                console.log('login failed');
                            }
                        })();
                    }
                });
            } else {
                console.log('profile focused, fromScreen not WebviewApp')
            }
        }, [route])
    );

    const userInfo = useContext(UserContext);
    let apiClient = AppApiClient.getInstance();
    const [loading, setLoading] = useState(false);

    let hasLogin = (userInfo.accessToken !== null && userInfo.accessToken !== '');
    async function btnClick() {
        await doLogin();
    }

    async function doLogin() {
        console.log("inputs", _inputs);

        setLoading(true);
        var ret = await apiClient.loginAsync({
            domainRootId: 0,
            id: _inputs.userName,
            password: _inputs.password,
            deviceReg: {
                platform: Platform.OS,
                deviceID: "testing-id",
                pushToken: "testing-token"
            }
        });
        setLoading(false);
        console.log("ret login:", ret);
        if (ret.ok !== true) return false;
        console.log('login ret.ok === true');
        var userInfoState = {
            loginInfo: _inputs,
            displayName: ret.value?.displayName,
            accessToken: ret.value?.accessToken,
            webappUrl: appconfigs.getWebappUrl('login')
        };
        await SaveCredentialAsync('loginState', userInfoState);
        userInfo.setUserInfo(userInfoState);
        return true;
    }

    let loadingContent = null;

    if (loading) {
        loadingContent = <Indicator>
        </Indicator>;
    } else {
        loadingContent = null;
    }


    function LogoutButton() {
        if (!hasLogin) return null;
        return <View style={{ display: 'flex', alignItems: 'flex-end', height: 40 }}>
            <TouchableOpacity style={{ flex: 1 }} onPress={async () => {
                setLoading(true);
                let ret = await apiClient.logoutAsync(userInfo.accessToken);
                console.log('logout', ret);
                setLoading(false);
                userInfo.setUserInfo({ loginInfo: null, displayName: '', accessToken: '', webappUrl: appconfigs.getWebappUrl('nologin') });
                var removeSuccess = await RemoveCredentialAsync();
                console.log("Remove Credential", removeSuccess);
            }}>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ height: 30 }}><Text style={{ height: 30, lineHeight: 30 }}>Logout</Text></View>
                    <View style={{ height: 30 }}><Ionicons size={30} name='log-out-outline' /></View>
                </View>

            </TouchableOpacity>
        </View>
    }

    function LoginSection() {
        if (hasLogin) return null;
        return <View>
            <Text style={[styles.label]}>Login Name</Text>
            <TextInput placeholder="User Name" style={[{ borderColor: "white" }, styles.input]} onChangeText={userNameChanged} ></TextInput>
            <Text style={[styles.label]}>Password</Text>
            <TextInput secureTextEntry={true} placeholder="Password" style={[{ borderColor: "white" }, styles.input]} onChangeText={passwordChanged}></TextInput>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', width: '100%' }}>
                <TouchableOpacity onPress={btnClick} style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={[styles.btn]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => {
                    navigation.navigate("WebviewApp", { url: appconfigs.registerUrl });
                }}>
                    <Text style={[styles.btn]}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    function UserSection() {
        if (hasLogin) {
            return <View>
                <Text>Account:{userInfo.displayName}</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("WebviewApp", { url: appconfigs.webRootUrl + "/account" });
                }}>
                    <Text style={[ThemeStyles.heavyBackgroundColor, ThemeStyles.heavyBackgroundTextColor, { width: '100%', textAlign: 'center', padding: 10 }]}>My Account!</Text>
                </TouchableOpacity>
            </View>
        } else {
            return null;
        }
    }

    return <View style={[ThemeStyles.themeBackground, { flex: 1 }]}>
        {loadingContent}
        <LogoutButton></LogoutButton>
        <UserSection></UserSection>
        <LoginSection></LoginSection>
    </View>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    label: {
        textAlign: 'center',
        height: 30,
        lineHeight: 30,
        width: 100,
        color: ThemeStyles.labelBackground.color,
        backgroundColor: ThemeStyles.labelBackground.backgroundColor
    },
    btn: {
        margin: 10,
        width: 100,
        height: 30,
        lineHeight: 30,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: ThemeStyles.heavyBackgroundColor.backgroundColor,
        color: ThemeStyles.heavyBackgroundTextColor.color
    }
});

export default Profile;
