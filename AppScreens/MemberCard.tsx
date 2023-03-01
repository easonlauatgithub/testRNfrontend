import SvgQRCode from '../components/SvgQRCode';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function MemberCard({ navigation }) {
    return <View
        style={[
            StyleSheet.absoluteFill,
            { alignItems: "flex-start", justifyContent: "flex-start"},
        ]}
    >
    <SvgQRCode content='helloworld!'></SvgQRCode>
    </View>
}