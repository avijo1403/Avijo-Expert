import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    calendarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'5%',
        borderBottomWidth:1,
        borderColor:colors.grey,
        height:38
      },
      itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 40,
        padding: 5,
      },
      dateText: {
        fontSize: 12,
        fontFamily: 'Gilroy-Medium',
        color:colors.black
      },
      arrowButton: {
        padding: 10,
      },
      arrowText: {
        fontSize: 24,
      },
      moonContainer:{
          flexDirection:'row',
          alignItems:'center',
          width:'90%',
          marginTop:'5%'
      },
      moonText:{
          paddingLeft:'8%',
          fontSize:12,
          fontFamily:'Gilroy-Regular',
          color:colors.black
      },
      about:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        width:'90%',
        paddingTop:'5%'
      },
      aboutText:{
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        color:colors.darkGrey,
        width:'90%',
        paddingTop:'2%'
      },
      specialization:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        width:'90%',
        marginTop:'5%'
      },
      generalMedicine:{
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        color:colors.darkGrey,
        width:'90%',
        marginTop:'5%'
      }
})
export default styles;