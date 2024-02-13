import React from 'react';
import { View, Text, Image, TextInput, Linking, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./Style";
import Layout from "../../Layouts/Layout/Layout";
import HeaderDesign from "../../Components/HeaderDesign/HeaderDesign";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();

    const ButtonUpTextMethod = () => {
        Linking.openURL('mailto:ismayilzade023m@gmail.com');
    }

    const QuestionTextMethod = () => {
        navigation.navigate('RegisterScreen');
    }

    return (
        <Layout main={
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
            >
                <View style={styles.container}>

                    <HeaderDesign />

                    <View style={styles.ImageAndTitleContainer}>

                        <Text style={styles.Title}>
                            Welcome back !
                        </Text>

                        <Image source={require('../../../assets/img_login.png')} style={{ width: 321, height: 315 }} />
                    </View>

                    <View style={styles.inputs}>
                        <TextInput style={styles.CustomInput} placeholderTextColor={"#0e0e0e"} placeholder={"Enter your email"} />
                        <TextInput style={styles.CustomInput} placeholderTextColor={"#0e0e0e"} placeholder={"Enter your password"} />
                    </View>

                </View>
            </KeyboardAvoidingView>
        } ButtonText={"Login"} QuestionText={"Don't have an account ?"} QuestionTextPressable={"Sign Up"} ButtonUpText={"Forgot Password"} ButtonUpTextMethod={ButtonUpTextMethod} QuestionTextMethod={QuestionTextMethod}>
        </Layout>
    );
};

export default LoginScreen;
