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
    heading:{
        color:colors.blue,
        fontSize:32,
        fontFamily:'Gilroy-Bold',
        alignSelf:'flex-start',
        marginLeft:'5%',
        bottom:'2%'
    },
    otpTextContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'98%',
        paddingRight:'2%',
        top:'1%',
    },
    change:{
        fontSize:12,
        fontFamily:'Gilroy-SemiBold',
        color:colors.blue,
    }
})

export default styles;