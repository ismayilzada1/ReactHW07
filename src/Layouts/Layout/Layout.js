import React from 'react';
import styles from "./style"
import {View} from "react-native";
import AuthFooterLayout from "../AuthFooterLayout/AuthFooterLayout";
const Layout = ({main,ButtonText,QuestionTextMethod,ButtonMethod,QuestionText,QuestionTextPressable,ButtonUpText,ButtonUpTextMethod}) => {
    return (
        <View style={styles.container}>

            <View style={styles.main}>
                {main}
            </View>

            <View style={styles.footer}>
                <AuthFooterLayout buttonText={ButtonText} QuestionTextMethod={QuestionTextMethod} QuestionText={QuestionText} ButtonMethod={ButtonMethod} ButtonUpText={ButtonUpText} ButtonUpTextMethod={ButtonUpTextMethod} QuestionTextPressable={QuestionTextPressable}>
                </AuthFooterLayout>
            </View>

        </View>
    );
};

export default Layout;