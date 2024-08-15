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
        fontSize:28,
        fontFamily:'Gilroy-Bold',
        alignSelf:'flex-start',
        marginLeft:'5%',
        marginTop:'5%'
    },
    text:{
        color:colors.grey,
        width:'90%',
        marginTop:'5%',
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        },
    subHeading:{
        fontSize:20,
        fontFamily:'Gilroy-SemiBold',
        width:'90%',
        color:colors.blue,
        marginTop:'10%'
    }
})

export default styles;