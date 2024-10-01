import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import ToggleSwitch from "toggle-switch-react-native";

export default function SettingToggle(props) {

    const [active, setActive] = useState(false);

    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
            <View style={{ width: '85%' }}>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>{props.text}</Text>
                {props.subText && <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: props.subColor, }}>{props.subText}</Text>}
            </View>
            <ToggleSwitch
                isOn={active}
                onColor={colors.blue}
                offColor={colors.grey}
                thumbOnStyle={{ backgroundColor: colors.white }}
                thumbOffStyle={{ backgroundColor: colors.white }}
                size="small"
                style={{ marginLeft: 10 }}
                onToggle={() => setActive(!active)}
            />
        </TouchableOpacity>
    )
}