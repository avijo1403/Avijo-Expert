import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import {useNavigation } from "@react-navigation/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { colors } from "../Theme/GlobalTheme";

const CELL_COUNT = 6;
const EnterOTP = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  return (
    <View style={styles.MainCOntainer}>
      <View style={styles.BoxContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={(text) => {
            setValue(text);
            if (text.length === CELL_COUNT) {
              Keyboard.dismiss();
            }
          }}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

      {/* <TouchableOpacity>
        <Text style={styles.ResendText}>Resend</Text>
      </TouchableOpacity> */}
      {/* <View  style={styles.ButtonContainer} >
      </View> */}
    </View>
  );
};
export default EnterOTP;

const styles = StyleSheet.create({
  MainCOntainer: {
    backgroundColor: colors.white,
    height:47,
    // borderWidth:1
  },
  codeFieldRoot: {
    // marginTop: "5%",
  },
  cell: {
    width: 48,
    height: 40,
    fontSize: 24,
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor:colors.white,
    borderRadius: 0,
    textAlignVertical: "center",
    textAlign: "center",
    color: colors.black,
    marginHorizontal: "4%",
  },
  focusCell: {
    borderColor: colors.white,
  },
  BoxContainer: {
    width: "30%",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  ResendText: {
    fontSize: 14,
    color: colors.white,
    alignSelf: "flex-end",
    marginRight: "5%",
    marginTop: "4%",
  },
  ButtonContainer:{
    marginTop:"14%",
}
});