import React, { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import HeaderItem3 from "../../components/HeaderItem3";
import { colors } from "../../Theme/GlobalTheme";
import { chatData, notiData, wp } from "../../assets/Data";
import { TouchableOpacity } from "react-native";
import SearchItem from "../../components/SearchItem";

export default function Notification({ navigation }) {

  const [select, setSelect] = useState(1);


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

  const Chats = () => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Chat', { name: 'Dr. Jii (Ai health assistance)' })} style={{ width: '100%', alignItems: 'center', flexDirection: 'row', padding: '5%', backgroundColor: '#FBFBFB', borderBottomWidth: 1, borderColor: colors.lightgrey }}>
          <Image source={require('../../assets/images/dr-ji.png')} style={{ height: 46, width: 46, borderRadius: 100 }} />
          <View style={{ width: '85%', paddingLeft: '3%', flexDirection: 'column' }}>
            <View style={{ width: '100%', paddingLeft: '3%', flexDirection: 'column' }}>
              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "70%" }}>Dr. Jii (Ai health assistance)</Text>
                <Image source={require('../../assets/images/blackPin.png')} style={{ height: 20, width: 20 }} />
                {/* <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingRight: '2%' }}>Sat</Text> */}
                {/* <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 16, width: 16 }} /> */}
              </View>
            </View>
            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, paddingRight: '2%', marginTop: '2%' }}>Emilli, Congratulations on creating your new Space! Your Space is the place for you to share answers,...</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          style={{ width: '100%' }}
          contentContainerStyle={{ alignItems: 'center', marginTop: '5%' }}
          data={chatData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Chat', { name: item.name, userId: item.id })} style={{ width: '100%', alignItems: 'center', flexDirection: 'row', padding: '5%', backgroundColor: colors.background, borderBottomWidth: 1, borderColor: colors.lightgrey }}>
              <Image source={item.image} style={{ height: 46, width: 46, borderRadius: 100 }} />
              <View style={{ width: '85%', paddingLeft: '3%' }}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                  {item?.pin ? <Image source={require('../../assets/images/blackPin.png')} style={{ height: 20, width: 20 }} />
                    : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingRight: '2%' }}>Sat</Text>
                      <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 16, width: 16 }} />
                    </View>}
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, paddingRight: '2%', marginTop: '2%' }} numberOfLines={2} ellipsizeMode="tail">Emilli, Congratulations on creating your new Space! Your Space is the place for you to share answers,...</Text>
              </View>
            </TouchableOpacity>
          )} />
      </>
    )
  }

  const NotiView = () => {
    return (
      <View style={{ width: '100%' }}>
        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.blue, width: '90%', textAlign: 'right', marginTop: '5%' }}>Mark all read</Text>
        <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={{ alignItems: 'center' }}
          data={notiData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('PrescriptionForm')} style={{ width: '90%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, backgroundColor: colors.white, elevation: 5, padding: "5%", borderRadius: 8, marginTop: '5%' }}>
              <Image source={item.image} style={{ height: 48, width: 48, borderRadius: 80 }} />
              <View style={{ marginLeft: '5%', width: "80%" }}>
                <HighlightedText text={item.text} highlight={item.name} itemName={item.name} />
                <View style={{ marginLeft: '0%', width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                  <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, padding: '2%', paddingLeft: '5%', paddingRight: '5%', borderRadius: 50, backgroundColor: colors.lightgrey }}>{item.duration}</Text>
                  <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )} />
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <HeaderItem3 onPress={() => navigation.goBack()} text="Messages" right={<Text style={{ color: colors.white, fontSize: 14, fontFamily: 'Gilroy-SemiBold', width: '100%' }}>New Chat</Text>} />
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
        {/* {select === 1 && <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
          <SearchItem />
        </View>} */}
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%' }}>
          <TouchableOpacity onPress={() => setSelect(1)} style={{ borderBottomWidth: select === 1 ? 3 : 0, borderColor: colors.black, width: '49%', alignItems: 'center' }}>
            <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', padding: 5, paddingTop: 0, }}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect(2)} style={{ borderBottomWidth: select === 2 ? 3 : 0, borderColor: colors.black, width: '49%', alignItems: 'center' }}>
            <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', padding: 5, paddingTop: 0 }}>Notifications</Text>
          </TouchableOpacity>
        </View>
        {<View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
          <SearchItem />
        </View>}
        {select === 1 && <Chats />}
        {select === 2 && <NotiView />}
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  highlight: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
  },
  itemName: {
    color: 'black',
    fontWeight: 'bold',
  },
  normal: {
    color: colors.grey,
  },
})