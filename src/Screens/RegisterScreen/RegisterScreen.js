import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./Style";
import Layout from "../../Layouts/Layout/Layout";
import HeaderDesign from "../../Components/HeaderDesign/HeaderDesign";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
    const navigation = useNavigation();

    const QuestionTextMethod = () => {
        navigation.navigate("LoginScreen");
    };

    return (
        <Layout main={
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Adjust vertical offset based on platform
            >
                <HeaderDesign />

                <View style={styles.titles}>
                    <Text style={styles.title1}>Welcome Onboard</Text>
                    <Text style={styles.title2}>Let's help you meet up your tasks.</Text>
                </View>

                <View style={styles.inputs}>
                    <TextInput style={styles.CustomInput} placeholderTextColor={"#0e0e0e"} placeholder={"Enter your full name"} />
                    <TextInput style={styles.CustomInput} placeholderTextColor={"#0e0e0e"} placeholder={"Enter your email id"} />
                    <TextInput style={styles.CustomInput} placeholderTextColor={"#0e0e0e"} placeholder={"Enter Password"} />
                    <TextInput style={styles.CustomInput} placeholderTextColor={"#0e0e0e"} placeholder={"Enter confirm password"} />
                </View>
            </KeyboardAvoidingView>
        } ButtonText={"Register"} QuestionTextMethod={QuestionTextMethod} QuestionText={"Already have an account ?"} QuestionTextPressable={"Sign in"}>
        </Layout>
    );
};

export default RegisterScreen;
