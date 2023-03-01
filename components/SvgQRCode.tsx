import QRCode from 'qrcode';
import Svg, {SvgXml} from 'react-native-svg';
import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';

interface IQRCode{
    content:string;
}

export default function SvgQRCode({ content }:IQRCode) {
    const [qrContent,setQrContent] = useState<string|null>(null);
    // With promises
    QRCode.toString(content,{type:'svg'})
    .then(ret => {
        console.log('ret of QRCode.toString:',ret);
        setQrContent(ret);
    })
    .catch(err => {
        console.error(err);
    });

    return <View
        style={[
            StyleSheet.absoluteFill,
            { alignItems: "flex-start", justifyContent: "flex-start" },
        ]}
    >
        <SvgXml xml={qrContent} width="100%" height="100%" />
    </View>
}