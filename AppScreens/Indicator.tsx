import React from "react";
import { ActivityIndicator } from "react-native";
import { ModalView } from "./ModalView";

export function Indicator({children}){
    return <ModalView>
        <ActivityIndicator size="large" color="#00ff00" />
    </ModalView>
}