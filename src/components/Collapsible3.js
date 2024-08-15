import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { colors } from "../Theme/GlobalTheme";
import { wp } from "../assets/Data";

export default function Collapsible3(props) {
    const { heading, text, content, onSelect } = props;
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState('');

    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleSelect = (item) => {
        setSelected(item);
        setIsCollapsed(true);
        if (onSelect) {
          onSelect(item);
        }
      };

    return (
        <View style={{ width: '100%', alignItems:'flex-start' }}>
            <Text style={styles.textHeading}>{heading}</Text>
            <TouchableOpacity onPress={toggleCollapsed} style={styles.ButtonContainer}>
                <Text style={styles.dropDownText}>{selected !== ''? selected : text}</Text>
                {isCollapsed ? <Image style={styles.arrow} source={require('../assets/images/down-arrow.png')} /> :
                    <Image style={styles.arrow} source={require('../assets/images/top-arrow.png')} />}
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <View style={styles.content}>
                    {content?.map((item, index) => (
                        <TouchableOpacity onPress={()=>{setIsCollapsed(true); handleSelect(item);}}>
                        <Text key={index} style={styles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Collapsible>
        </View>
    );
}

const styles = StyleSheet.create({
    textHeading:{
        width:71,
        fontSize: 12,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.darkGrey,
    },
    arrow:{
        height:10,
        width:10
    },
    ButtonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderRadius:30,
        backgroundColor:colors.white,
        borderColor:colors.lightgrey,
        height:20
    },
    content: {
        padding: 10,
        borderRadius: 5,
        margin:10,
        backgroundColor:colors.white,
        elevation:5,
        width:70
    },
    dropDownText:{
        fontSize:10,
        fontFamily:'Gilroy-Medium',
        color:colors.grey,
        height:15, 
        marginRight:"5%",
        marginTop:'2%',
        paddingLeft:'2%',
        paddingRight:"1%"
    },
    itemText: {
        fontSize: 10,
        fontFamily: 'Gilroy-Regular',
        color: colors.darkGrey,
        marginBottom: 5,
        padding:5,
    }
});
