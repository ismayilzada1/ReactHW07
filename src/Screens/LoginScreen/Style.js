import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#DEEAE8"
    },
    ImageAndTitleContainer:{
        flex:2,
        alignItems:"center",
        justifyContent:"flex-end"
    },
    inputs:{
        flex:1,
        justifyContent:"space-evenly"
    },
    Title:{
        fontWeight:700,
        fontSize:22,
        lineHeight:33,
        color:"#000"
    },
    CustomInput:{
        backgroundColor:"white",
        fontSize:16,
        paddingVertical:15,
        borderRadius:15,
        paddingLeft:15,
        fontWeight:400,
        lineHeight:22,
        marginHorizontal:15
    },

});

export default styles;