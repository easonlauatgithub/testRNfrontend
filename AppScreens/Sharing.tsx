import React, { useState } from "react";
import { View, Share, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { ThemeStyles } from "./Css/ThemeStyles";
import { useFocusEffect } from "@react-navigation/native";

let _shareContent = { msg: "", url: "" };

function onMsgChange(msg: string) {
  _shareContent.msg = msg;
}
function onUrlChange(url: string) {
  _shareContent.url = url;
}

function Sharing({ route, navigation }) {
  const [url, setUrl] = useState('');
  useFocusEffect(React.useCallback(() => {
    console.log('useEffect in Sharing!');
    let url = route.params?.url;
    _shareContent.url = url;
    setUrl(url);
  }, [route]));

  async function onShare() {
    console.log('sharing', _shareContent);
    try {
      if (_shareContent.msg === '' && _shareContent.url === '') {
        Alert.alert('No Message to share');
        return;
      }
      let shareMsg = `${_shareContent.msg} ${_shareContent.url}`;
      const result = await Share.share({
        message: shareMsg
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('share activityType');
        } else {
          // shared
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('dismissed');
      }
    } catch (error) {
      console.log('error sharing', error);
    }
  };

  return <View style={[ThemeStyles.themeBackground, { display: "flex", flex: 1, flexDirection: "column" }]}>
    <View style={[styles.centerContent, { flex: 1}]}>
      <View style={{ width: "100%" }}>
        <Text>Url</Text>
      </View>
      <TextInput style={{ borderWidth: 2, borderColor: 'white', color: ThemeStyles.themeBackgroundTextColor.color }} value={url} multiline={true} returnKeyType="done" blurOnSubmit={true} placeholder="No url to share" placeholderTextColor="red" onChangeText={onUrlChange} editable={false}></TextInput>
    </View>
    <View style={[styles.centerContent, ThemeStyles.heavyBackgroundColor, { flex: 2, borderBottomWidth: 2, borderColor: 'white' }]}>
      <View style={{width:"100%"}}>
        <Text style={ThemeStyles.heavyBackgroundTextColor}>Message</Text>
      </View>
      <TextInput style={{ color: ThemeStyles.heavyBackgroundTextColor.color,borderWidth:1,borderColor:'white',minHeight:100,width:"100%"}} multiline={true} returnKeyType="done" blurOnSubmit={true} placeholder="Tap to add message here" placeholderTextColor={ThemeStyles.heavyBackgroundTextColor.color} onChangeText={onMsgChange}></TextInput>
    </View>
    <View style={[styles.centerContent, { flex: 2 }]}>
      <TouchableOpacity onPress={onShare} style={[styles.centerContent, { flex: 1, alignItems: 'center' }]}>
        <Text style={[ThemeStyles.heavyBackgroundColor, styles.btn]}>Share</Text>
      </TouchableOpacity>
    </View>
  </View>
}

const styles = StyleSheet.create({
  centerContent: {
    display: 'flex', justifyContent: 'center', alignItems: "center"
  },
  btn: {
    margin: 10,
    width: 100,
    height: 30,
    lineHeight: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center"
  }
});

export default Sharing;
