import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { hp, wp } from "../../assets/Data";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: '5%',
        paddingTop: '10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.blue,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '5%',
        color: colors.white,
    },
    numberContainer: {
        height: 12,
        width: 12,
        backgroundColor: colors.red,
        color: colors.white,
        borderRadius: 13,
        position: 'absolute',
        zIndex: 2,
        marginLeft: 15,
        alignItems: 'center'
    },
    number: {
        fontSize: 6,
        textAlign: 'center',
        fontFamily: 'Gilroy-Regular',
        color: colors.white,
        paddingTop: 2,
        paddingLeft: 2
    },
    headerText2: {
        fontSize: 20,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '2%',
        color: colors.white,
    },
    editor: {
        backgroundColor: '#f2f2f2',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    },
    rich: {
        fontSize: 18,
        color: '#333',
        marginBottom: 15,
    },
    editor: {
        backgroundColor: "white",
        // borderColor: "black",
        // borderWidth: 1,
        // width:wp(90), 
        // flex:1,
    },
    rich: {
        width:'95%',
        // flex: 1,
    },
    richBar: {
        height: 50,
        backgroundColor: "#F5FCFF",
        width:'100%',
        alignSelf:'center'
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        width:'100%',
        marginTop:'5%'
    },
    tib: {
        textAlign: "center",
        color: "#515156",
    },
    htmlView:{
        a: {
            fontWeight: "bold",
            color: "purple",
          },
          div: {
            fontFamily: "monospace",
          },
          p: {
            fontSize: 30,
          },
    }
})
export default styles;