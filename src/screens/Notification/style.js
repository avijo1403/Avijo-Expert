import { StyleSheet } from "react-native"
import { colors } from "../../Theme/GlobalTheme"

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor: colors.white,
    },
    highlight: {
      backgroundColor: 'yellow',
      fontWeight: 'bold',
    },
    itemName: {
      color: 'black',
      fontWeight: 'bold',
    },
    normal: {
      color: colors.grey,
    },
})
export default styles;