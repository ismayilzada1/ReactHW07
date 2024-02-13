import React from 'react';
import styles from "./style"
import {Pressable, Text, View} from "react-native";

const AuthFooterLayout = ({buttonText,ButtonMethod,QuestionText,QuestionTextPressable,QuestionTextMethod,ButtonUpText,ButtonUpTextMethod}) => {
    return (
            <View style={styles.container}>

                <Pressable style={styles.buttonUpTextContainer} onPress={ButtonUpTextMethod}>
                    <Text style={styles.buttonUpText}>{ButtonUpText}</Text>
                </Pressable>

                <Pressable style={styles.CustomButton} onPress={ButtonMethod}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </Pressable>

                <View style={styles.QuestionTextContainer}>
                    <Text style={styles.QuestionText}>
                        {QuestionText}
                    </Text>

                    <Pressable onPress={QuestionTextMethod}>
                        <Text style={styles.QuestionTextPressable}>
                            {QuestionTextPressable}
                        </Text>
                    </Pressable>
                </View>

            </View>
    );
};

export default AuthFooterLayout;