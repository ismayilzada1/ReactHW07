import {StyleSheet} from "react-native";

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#DEEAE8"
    },
    ImageAndTextContainer:{
        flex:8,
        alignItems:"center",
        justifyContent:"flex-end",
    },
    ImageUnderText:{
        fontSize:22,
        fontWeight:700,
        lineHeight:33,
        color:"#000",
        marginTop:35
    },

    TextContainer:{
        flex:3,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:16,
        fontWeight:750,
        lineHeight:24,
        color:"#000",
        flexWrap:"wrap",
        marginHorizontal:70,
        textAlign:"center"
    }
});

export default styles;