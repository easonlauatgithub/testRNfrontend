import React, { useContext, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { UserContext } from "./UserProvider";
import { AppApiClient } from '../apis/netcoreApiClient';
import { IndexViewModel, PostItem } from "../models/PostItem";
import { ScrollView } from "react-native-gesture-handler";
import { ThemeStyles } from "./Css/ThemeStyles";
import appconfigs from "../appconfigs";

function Promos({ item, clickListener, style }) {
  return <View style={[style]} >
    <TouchableOpacity onPress={() => clickListener(item)}>
      <ImageBackground
        resizeMode="cover"
        style={{ height: "100%", justifyContent: "flex-end" }}
        source={{ uri: `https:${item.thumbPath}` }}
      >
        <Text style={{ fontWeight: "bold", backgroundColor: 'rgba(52, 52, 52, 0.8)', color: "white", textAlign: "center", height: 30, lineHeight: 30 }}>
          {item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  </View>
}

function Home({ navigation }) {
  var initPostItems = new IndexViewModel();
  const [indexModel, setIndexModel] = useState(initPostItems);
  useFocusEffect(
    React.useCallback(() => {
      //const unsubscribe = API.subscribe(userId, user => setUser(user));
      //return () => unsubscribe();
      var restApi = AppApiClient.getInstance();
      restApi.getIndex().then((md) => {
        console.log('pagedInfo', md);
        if (md) {
          setIndexModel(md);
        }
      });
    }, [])
  );

  const userInfo = useContext(UserContext);

  let firstLayer = new Array<PostItem>();
  let secondLayer = new Array<PostItem>();
  let thirdLayer = new Array<PostItem>();

  let title = indexModel.title;
  let msg = indexModel.msg;
  let postItems = indexModel.items;
  postItems.forEach((item, index) => {
    if (index < 1) {
      firstLayer.push(item);
    }
    if (index >= 1 && index <= 2) {
      secondLayer.push(item);
    }
    if (index > 2) {
      thirdLayer.push(item);
    }
  });

  function onItemClicked(item: PostItem) {
    console.log('onItemClick', item);
    navigation.navigate("WebviewApp", { url: item.itemPath });
  }

  return <View style={[ThemeStyles.themeBackground, { flex: 1 }]}>
    <ScrollView>
      <View style={[ThemeStyles.container, {
        flexDirection: "row",
        justifyContent: "space-between", //"space-around",
        flexWrap: "wrap"
      }]}>
        <View style={{ flexDirection: "row", flexWrap: "wrap",backgroundColor:'white', borderWidth:4,borderColor:"white" }}>
          <View style={[styles.flexItem1third, { justifyContent: "center", alignContent: "center" }]} >
            <TouchableOpacity onPress={() => {
              navigation.navigate("WebviewApp", { url: userInfo.webappUrl });
            }}>
              <ImageBackground
                resizeMode="cover"
                style={{ height: "100%", justifyContent: 'flex-end' }}
                source={require("../images/icon180.png")}
              >
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={[styles.flexItem2third, { backgroundColor: '#c0eb34' }]}>
            <Text style={{ fontWeight: "bold", backgroundColor: 'rgba(52, 52, 52, 0.8)', color: "white", textAlign: "center", textAlignVertical: "center", height: 30, lineHeight: 30 }}>
              {title}
            </Text>
            <Text style={{ flex: 1, padding: "1%", fontWeight: "bold", color: "black", textAlign: "center", textAlignVertical: "center" }}>
              {msg}
            </Text>
          </View>
        </View>

        {firstLayer.map(item => {
          return <Promos key={item.id} item={item} style={styles.flexLayer1} clickListener={onItemClicked}></Promos>
        })}

        {secondLayer.map(item => {
          return <Promos key={item.id} item={item} style={styles.flexLayer2} clickListener={onItemClicked}></Promos>
        })}

        {thirdLayer.map(item => {
          return <Promos key={item.id} item={item} style={styles.flexLayer3} clickListener={onItemClicked}></Promos>
        })}
      </View>
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  flexItem1third: { height: 100, flexBasis:"25%" },
  flexItem2third: { height: 100, flexBasis:"75%"},
  flexLayer3: { height: 100, flexBasis: "33.3%" },
  flexLayer1: { height: 200, flexBasis: "100%" },
  flexLayer2: { height: 160, flexBasis: "50%" }
});

export default Home;
