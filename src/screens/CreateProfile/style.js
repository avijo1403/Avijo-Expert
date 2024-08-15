import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
        flex:1,
    },
    profile:{
        height:105,
        width:103,
        marginTop:'10%',
    },
    edit:{
        height:31,
        width:33,
        marginLeft:'72%',
        marginTop:'65%'
    },
    heading:{
        marginTop:'15%',
        fontSize:22,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
    },
    subHeading:{
        fontSize:18,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        width:'90%',
        paddingTop:'10%'
    },
    button:{
        width:'90%',
        marginTop:'5%',
        borderRadius:12,
        backgroundColor:colors.blue,
        height:47,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'10%'
    },
    inputContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      height: 47,
      borderRadius: 3,
      width: '90%',
      alignItems: 'center',
      borderWidth: 1,
      borderColor:colors.grey,
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
      paddingLeft: '5%',
      color: colors.darkGrey,
      marginBottom: 5, // Adjusted to avoid overlap with the input container
      marginTop:'5%'
    }
})

export default styles;