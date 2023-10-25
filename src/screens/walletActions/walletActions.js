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
            <MaterialIcon name="plus-circle-outline" color={'white'} size={25} />

            <MaterialIcon name="tray-arrow-down" color={'white'} size={25} />
        </View>
    )
}