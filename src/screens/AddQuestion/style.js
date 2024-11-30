import { StyleSheet } from "react-native";
import { hp, wp } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
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
    tabContainer: {
        // borderWidth: 1,
        borderColor: colors.white,
        padding: hp(1.8),
        marginRight: wp(3),
        width:'45%'
    }
})
export default styles;