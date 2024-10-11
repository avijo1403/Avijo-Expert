import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

const VitalInput = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={[styles.inputContainer, { borderColor: props.blue ? colors.blue : colors.grey }]}>
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.placeholder}
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    secureTextEntry={props.secureTextEntry}
                />
                <Text style={styles.rightText}>{props.rightText}</Text>
            </View>
        </View>
    );
};

export default VitalInput;

const styles = StyleSheet.create({
    container: {
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5%',
        alignSelf: 'flex-start',
        // marginLeft: '6%',
        marginTop: '2%',
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 36,
        borderRadius: 3,
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
    },
    input: {
        height: 47,
        color: colors.black,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        textAlignVertical: 'center',
        width: '70%',
        paddingLeft: 15,
    },
    text: {
        width: '100%',
        fontSize: 12,
        fontFamily: 'Gilroy-SemiBold',
        padding: '1%',
        paddingLeft: 0,
        color: colors.darkGrey,
        marginBottom: 5, // Adjusted to avoid overlap with the input container
    },
    rightText:{
        fontSize:12, 
        fontFamily:'Gilroy-Medium',
        color:colors.grey,
        textAlign:'center',
        width:'30%'
    }
});
