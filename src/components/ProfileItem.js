import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { colors } from "../Theme/GlobalTheme";
import { hp, wp } from "../assets/Data";



const ProfileItem = (props) => {

    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.icon} source={props.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            {props.showToggle !== true && <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={styles.arrowContainer}>
                    {/* <Image style={styles.arrow} source={require('../assets/images/right-grey.png')}/> */}
                </View>
            </View>}
            {props.showToggle &&
                <ToggleSwitch
                    isOn={active}
                    onColor={colors.blue}
                    offColor={colors.grey}
                    thumbOnStyle={{ backgroundColor: colors.white }}
                    thumbOffStyle={{ backgroundColor: colors.white }}
                    size="medium"
                    onToggle={() => setActive(!active)}
                />
            }
        </TouchableOpacity>
    )
}
export default ProfileItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        height: hp(10),
        marginTop: '5%',
        borderWidth: 1,
        padding: '5%',
        borderRadius: 12,
        borderColor: colors.grey,
    },
    icon: {
        height: 44,
        width: 48
    },
    name: {
        fontSize: 14,
        fontFamily: 'Raleway-SemiBold',
        color: colors.black,
    },
    text: {
        fontSize: 10,
        fontFamily: 'Raleway-Medium',
        color: colors.grey,
        // borderWidth:1,
        paddingTop: '2%',
        width: wp(50)
    },
    warning: {
        height: 15,
        width: 15
    },
    arrow: {
        height: 12,
        width: 7
    },
    textContainer: {
        // borderWidth:1,
        width: '72%',
        paddingLeft: '3%'
    },
    arrowContainer: {
        // borderWidth:1,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toggle: {
        height: 22,
        width: 38
    }
})