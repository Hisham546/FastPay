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
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';



export const WalletActions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topup}>
                <MaterialIcon name="plus-circle-outline" color={'white'} size={25} />
                <Text
                 numberOfLines={1}
                 adjustsFontSizeToFit
                 
                style={styles.walletTexts}>Top Up</Text>
            </View>
            <View style={styles.topup}>
                <MaterialIcon name="tray-arrow-down" color={'white'} size={25} />
                <Text style={styles.walletTexts}>Withdraw</Text>
            </View>
        </View>
    )
}