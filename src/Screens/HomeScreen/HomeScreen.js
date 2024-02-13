import React from 'react';
import {Text, View,Image} from "react-native";
import styles from "./Style"
import Layout from "../../Layouts/Layout/Layout";
import { useNavigation } from '@react-navigation/native';
import HeaderDesign from "../../Components/HeaderDesign/HeaderDesign";

const HomeScreen = () => {
    const navigation = useNavigation();

    const GetStartedButtonMethod=()=>{
        navigation.navigate('LoginScreen');
    }

    return (
        <Layout main={
            <View style={styles.container}>

                <HeaderDesign/>

                <View style={styles.ImageAndTextContainer}>
                    <Image source={require('../../../assets/img.png')} style={{ width: 322, height: 239}}/>
                    <Text style={styles.ImageUnderText}>Gets things done with to do</Text>
                </View>

                <View style={styles.TextContainer}>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur. Enim.</Text>
                </View>

            </View>
        } ButtonText={"Get Started"} ButtonMethod={GetStartedButtonMethod}></Layout>
    );
};

export default HomeScreen;