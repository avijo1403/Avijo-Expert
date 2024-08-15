import { StyleSheet } from "react-native"
import { colors } from "../../Theme/GlobalTheme"

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
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
        paddingLeft: '10%',
        color: colors.white,
    },
    numberContainer: {
        height: 14,
        width: 14,
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
    }
})
export default styles;