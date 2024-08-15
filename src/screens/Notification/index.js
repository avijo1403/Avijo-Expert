import React from "react";
import { FlatList, Image, ScrollView, Text } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { notiData } from "../../assets/Data";

export default function Notification({ navigation }) {


    const HighlightedText = ({ text, highlight, itemName }) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
      
        return (
          <Text>
            {parts.map((part, index) => (
              <Text
                key={index}
                style={part.toLowerCase() === highlight.toLowerCase() ? 
                  (part.toLowerCase() === itemName.toLowerCase() ? styles.itemName : styles.highlight) : 
                  styles.normal}
              >
                {part}
              </Text>
            ))}
          </Text>
        );
      };

    return (
        <View style={styles.container}>
            <HeaderItem3 onPress={() => navigation.goBack()} text="Notifications" right={<Image source={require('../../assets/images/whiteDot.png')} style={{ height: 23, width: 12, marginLeft: "80%" }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.blue, width: '90%', textAlign: 'right', marginTop: '5%' }}>Mark all read</Text>
                <FlatList
                style={{width:"100%"}}
                contentContainerStyle={{alignItems:'center'}}
                data={notiData}
                renderItem={({item})=>(
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', borderWidth:1, borderColor:colors.lightgrey, backgroundColor:colors.white, elevation:5, padding:"5%", borderRadius:8, marginTop:'5%' }}>
                    <Image source={item.image} style={{ height: 48, width: 48, borderRadius: 80 }} />
                    <View style={{ marginLeft: '5%', width: "80%" }}>
                        <HighlightedText text={item.text} highlight={item.name} itemName={item.name} />
                        <View style={{ marginLeft: '0%', width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, padding: '2%', paddingLeft: '5%', paddingRight: '5%', borderRadius: 50, backgroundColor: colors.lightgrey }}>{item.duration}</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>{item.time}</Text>
                        </View>
                    </View>
                </View>
                )}/>
            </ScrollView>
        </View>
    )
}