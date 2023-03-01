import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Dimensions,
  SafeAreaView
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';


const BydirectWebview = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const INJECTED_JAVASCRIPT = `(function() {
    //(function(){{ apiClient.netClient.setBeforeRequest(function(arg){{arg.headers['{AppBaseLib.Member.AccountManager.AuthHeaderName}'] = '{AccessToken}';}}); }})();
    (function(){ vueInst.setPromptLogin(function(){  window.ReactNativeWebView.postMessage('login');  });})();
    (function(){ vueInst.setPromptLogout(function(){  window.ReactNativeWebView.postMessage('logout');  });})();
    //(function(){ vueInst.setForApp(true); })();
    (function(){ vueInst.onSpaPageChange((urlData)=>{ window.ReactNativeWebView.postMessage(urlData.currentUrl); }); })();
  })();`;

  function callMeBack(postMessage:any){
      //throw postMessage;
      //navigation.navigate('Home', { name: postMessage })
  }

  return (
      <WebView injectedJavaScript={INJECTED_JAVASCRIPT} onMessage={callMeBack} startInLoadingState={true} style = {{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}  source={{ uri: 'https://app.anginx.com/' }} /> 
  )}

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

export default BydirectWebview;
