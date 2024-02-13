import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#DEEAE8"
    },
    titles:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50
    },
    inputs:{
        flex:1,
        justifyContent:"space-around"
    },
    title1:{
        fontWeight:700,
        fontSize:22,
        lineHeight:33,
        color:"#000"
    },
    title2:{
        fontWeight:500,
        fontSize:16,
        lineHeight:24
    },
    CustomInput:{
        backgroundColor:"white",
        fontSize:16,
        paddingVertical:12,
        borderRadius:15,
        paddingLeft:15,
        fontWeight:400,
        lineHeight:20,
        marginHorizontal:15
    }
});

export default styles;