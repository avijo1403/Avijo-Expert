import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
        flex:1,
        justifyContent:'center'
    },
    thankYou:{
        fontSize:20,
        fontFamily:'Gilroy-Bold',
        color:colors.black,
        marginTop:'5%'
    },
    text:{
        fontSize:12,
        fontFamily:'Gilroy-Medium',
        width:'90%',
        textAlign:'center',
        marginTop:'5%',
        color:colors.darkGrey,
    }
})

export default styles;