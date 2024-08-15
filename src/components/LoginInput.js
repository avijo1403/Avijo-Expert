import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

const LoginInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={[styles.inputContainer, { borderColor: props.blue? colors.blue : colors.grey }]}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={colors.placeholder}
          style={styles.input}
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
    alignSelf: 'flex-start',
    marginLeft: '6%',
    marginTop: '2%',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 47,
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
    width: '100%',
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
});
