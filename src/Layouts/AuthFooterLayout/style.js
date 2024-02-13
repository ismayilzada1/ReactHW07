import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        backgroundColor:"#DEEAE8"
    },

    QuestionTextContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15
    },
    buttonUpTextContainer:{
        marginBottom:15
    },
    buttonUpText:{
        color:"#0E6565",
        fontSize:13,
    },
    CustomButton:{
        paddingHorizontal:90,
        backgroundColor:"#30A6AE",
        borderRadius:4,
        paddingVertical:6
    },
    buttonText:{
        fontSize:20,
        lineHeight:30,
        color:"#fff",
        fontWeight:600
    },
    QuestionText:{
        lineHeight:16,
        fontWeight:500,
        fontSize:13,
        color:"#000"
    },
    QuestionTextPressable:{
        lineHeight:16,
        fontWeight:500,
        fontSize:13,
        color:"#009A9A",
        marginLeft:4
    }

});

export default styles;