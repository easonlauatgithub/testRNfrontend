import React from "react";
import { View, StyleSheet, Text } from "react-native";


export function ModalView({ children }) {

  return <View>
    <View style={{ display: 'flex', height: '100%',width:'100%',backgroundColor:'yellow' }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {children}
        </View>
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(1,2,3,0.5)'
  },
  modalView: {
    width: '90%',
    height: '80%',
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center",
    color: 'red'
  }
})