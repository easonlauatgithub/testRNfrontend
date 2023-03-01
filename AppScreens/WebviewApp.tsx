import React, { useContext } from 'react';
import { StyleSheet, Dimensions, Alert } from 'react-native';

import { WebView } from 'react-native-webview';
import { UserContext } from './UserProvider';
import appconfigs from "../appconfigs";

const WebviewApp = ({ route, navigation }) => {

  React.useEffect(() => {
    console.log('useEffect in WebviewApp!');
    const unsubFocus = navigation.addListener('focus', () => {
      //screen focused again
      console.log('screen focused', route.params?.url);

    });
    const unsubBlur = navigation.addListener('blur', () => {
      //screen focused again
      console.log('screen blur');

    });
    //return unsub;
  }, [navigation]);

  console.log('WebviewApp body', route.params?.url);
  let url = route.params?.url;
  url = "https://yahoo.com.hk";
  url = url || "http://192.168.112.6";

  let INJECTED_JAVASCRIPT = "";
  let urlString = url as string
  let isDependentSite = urlString.startsWith(appconfigs.webRootUrl);
  if (isDependentSite) {
    let userInfo = useContext(UserContext);
    let accessToken = userInfo.accessToken;
    //console.log('accessToken in webview',accessToken);
    INJECTED_JAVASCRIPT = `
    (function(){{ apiClient.netClient.setBeforeRequest(function(arg){{arg.headers['Agx-CJAuth'] = '${accessToken}';}}); }})();
    (function(){
      window.anginx={
        postMessage(key,value){
          var p = {key:key,value:value};
          p = JSON.stringify(p);
          window.ReactNativeWebView.postMessage(p);
        }
      }
    })();
    (function(){ vueInst.setPromptLogin(function(){  window.anginx.postMessage('login','login');  });})();
    (function(){ vueInst.setPromptLogout(function(){  window.anginx.postMessage('logout','logout');  });})();
    (function(){ vueInst.setForApp(true); })();
    (function(){ vueInst.setPromptShare(()=>{ window.anginx.postMessage('share',window.location.href); }); })();
    (function(){ vueInst.onSpaPageChange((urlData)=>{ window.anginx.postMessage('pageChange',urlData.currentUrl); }); })();
  `;

    if (accessToken != null && accessToken != '') {
      INJECTED_JAVASCRIPT += "(function(){ vueInst.loadProfile();})();";
    } else {
      INJECTED_JAVASCRIPT += "(function(){ vueInst.clearProfile();})();";
    }
    INJECTED_JAVASCRIPT = "$(function(){" + INJECTED_JAVASCRIPT + "})";
  }

  function callMeBack(postMessage: any) {
    //throw postMessage;
    //navigation.navigate('Home', { name: postMessage })
    console.log('postMessage is', postMessage.nativeEvent.data);
    let msg = postMessage.nativeEvent?.data
    let kv = JSON.parse(msg);
    switch (kv.key) {
      case "login":
        navigation.navigate("Profile", { req: 'login' });
        break;
      case "logout":
        navigation.navigate("Profile", { req: 'logout' });
        break;
      case "share":
        navigation.navigate("Sharing", { url: kv.value });
        break;
      default:
        //capture the postMessage and alert what is wrong
        //Alert.alert(msg);
        break;
    }
  }

  return (
    <WebView injectedJavaScript={INJECTED_JAVASCRIPT} onMessage={callMeBack} startInLoadingState={true} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      source={{ uri: url }} />
  )

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default WebviewApp;
