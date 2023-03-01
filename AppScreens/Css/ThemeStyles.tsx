import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

// const backgroundColor = "#c0eb34";
const backgroundColor = "#dce8e7";

export const ThemeStyles = StyleSheet.create({
    
    heavyBackgroundColor:{
        backgroundColor:"#5c8a12"
    },
    heavyBackgroundTextColor:{
        color:"white"
    },
    safeArea: {
        flex: 1,
        backgroundColor: backgroundColor
    },
    themeBackground: {
        backgroundColor: backgroundColor
    },
    themeBackgroundTextColor:{
        color:"black"
    },
    headerTitleStyle: {
        backgroundColor: backgroundColor
    },
    headerStyle: {
        backgroundColor: backgroundColor
    },
    tabarItemStyle: {
        backgroundColor: backgroundColor
    },
    tabIconColor: { color: "white" },
    container: {
        flex: 1,
        padding: 2,
        backgroundColor: backgroundColor
    },
    labelBackground:{backgroundColor:backgroundColor,color:"black"}
})
