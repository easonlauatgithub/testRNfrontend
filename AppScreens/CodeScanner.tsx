import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert, Modal, Pressable, Image } from "react-native";
import { CameraScreen } from 'react-native-camera-kit';
import { ThemeStyles } from "./Css/ThemeStyles";
import {useFocusEffect, useIsFocused} from "@react-navigation/native";

function CodeScanner({ navigation }) {
  // useFocusEffect(React.useCallback(()=>{

  // },[navigation])
  // );

  const isFocused = useIsFocused();

  const [msg, setMsg] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const [viewer, setViewer] = useState('result')

  if (viewer === 'result' || !isFocused) {
    return <View style={[ThemeStyles.themeBackground, { flex: 1 }]}>
      <View style={{ display: 'flex', height: '100%' }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2, borderColor: 'red' }}>
              <Text style={{ color: 'white' }}>Scanned Vaue</Text>
                <Text style={{ borderBottomWidth: 2, borderBottomColor: 'green',color:ThemeStyles.heavyBackgroundTextColor.color }}>{msg}</Text>
              </View>
              <View style={{ flex: 1,display:'flex',flexDirection:'row',alignItems:'center',justifyContent: 'center' }}>

                <Pressable
                  style={[styles.button, styles.buttonClose,{flex:1}]}
                  onPress={() => {
                    if(!msg.startsWith('http')){
                      Alert.alert('No url found!');
                      return;
                    }
                    navigation.navigate("WebviewApp", { url: msg });
                  }}
                >
                  <Text style={styles.textStyle}>Visit</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose,{flex:1}]}
                  onPress={() => {
                    setViewer('camera');
                    setMsg('');
                  }}
                >
                  <Text style={styles.textStyle}>Scan</Text>
                </Pressable>
              </View>

            </View>
          </View>
        </View>
      </View>
    </View>
  }

  let cameraInst;

  return <View style={[ThemeStyles.themeBackground, { flex: 1 }]}>
    <CameraScreen
      //ref={(ref) => (cameraInst = ref)}
      scanBarcode={true}
      onReadCode={(event) => {
        setMsg(event.nativeEvent.codeStringValue);
        setViewer('result');
      }}
      showFrame={true}
      laserColor='red'
      frameColor='white'
    />
    <Button title="Stop" onPress={() => {
      setViewer('result');
    }}></Button>
  </View>
}

const styles = StyleSheet.create(
  {
    centeredView: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: ThemeStyles.themeBackground.backgroundColor
    },
    modalView: {
      width: '90%',
      height: '50%',
      backgroundColor: ThemeStyles.heavyBackgroundColor.backgroundColor,
      borderRadius: 20,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: ThemeStyles.themeBackground.backgroundColor
    },
    textStyle: {
      color: ThemeStyles.themeBackgroundTextColor.color,
      fontWeight: "bold",
      textAlign: "center"
    }
  }
);



export default CodeScanner;
