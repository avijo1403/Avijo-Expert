import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    subHeading:{
        fontSize:20,
        fontFamily:'Gilroy-SemiBold',
        width:'90%',
        color:colors.blue,
        marginTop:'10%'
    },
    text:{
        color:colors.darkGrey,
        width:'90%',
        marginTop:'5%',
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        marginBottom:'5%'
        },
        nameContainer:{
            borderWidth:1,
            borderRadius:3,
            width:'90%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            borderColor:colors.grey,
            height:48
        },
        gender:{
            borderRightWidth:1, 
            borderColor:colors.grey,
            width:'30%',
            height:40,
            fontSize:12,
            fontFamily:'Gilroy-Medium',
            textAlign:'center',
            color:colors.grey,
        },
        name:{
            width:'70%',
            height:40,
            fontSize:12,
            fontFamily:'Gilroy-Medium',
            color:colors.grey,
            paddingLeft:15,
            color:colors.black
        },
        textHeading:{
            width:'90%',
            marginTop:'5%',
            marginBottom:'2%',
            color:colors.darkGrey,
            fontSize:14,
            fontFamily:'Gilroy-SemiBold',
        },
        arrow:{
            height:20,
            width:20
        },
        ButtonContainer:{
            flexDirection:'row',
            width:'90%',
            justifyContent:'space-between',
            alignItems:'center',
            borderWidth:1,
            borderRadius:3,
            height:48,
            padding:10,
            backgroundColor:colors.white,
            borderColor:colors.grey,

        },
        content: {
          padding: 10,
          borderRadius: 5,
          margin:10,
          width:350,
          backgroundColor:colors.white,
        },
        dropDownText:{
            fontSize:12,
            fontFamily:'Gilroy-Medium',
            width:200,
        },
        bottomContainer:{
            flexDirection:'row',
            width:'90%',
            alignItems:'center',
            justifyContent:'space-between'
        }
})

export default styles;