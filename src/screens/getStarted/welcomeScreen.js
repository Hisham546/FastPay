import React, { useEffect, useRef, useState, useContext } from "react";
import {
    View,
    Image,
    Text, Button, ImageBackground,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput, StatusBar,
}
    from "react-native";
import styles from "./styles";
import { ButtonComponent } from "../../components/button";
import { useNavigation } from '@react-navigation/native';

export const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.firstView}></View>
            <View style={styles.secondView}>
                <View style={styles.mainHeaderView}>
                    <Text
                        style={styles.mainText}
                    >Easy Online Payment</Text>
                    <Text
                        style={styles.subText}
                    >Make your payment experience more better today</Text>
                </View>
                <View style={styles.buttonView}>
                    <ButtonComponent
                        ButtonLabel={'Login'}
                        style={styles.loginButton}
                        textStyle={styles.loginText}
                        onPress={() => navigation.navigate('Home')}
                    />
                    <ButtonComponent
                        ButtonLabel={'Sign Up'}
                        style={styles.signupButton}
                        textStyle={styles.signupText}

                    />
                </View>
            </View>
        </View>

    )
}
