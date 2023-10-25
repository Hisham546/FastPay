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
import { WalletActions } from "../walletActions/walletActions";
export default function Home() {
    return (

        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text>Fast Pay</Text>
                <View style={styles.userNameView}>
                    <View style={styles.userNameSubView}>
                        <Text>Hi, User</Text>
                        <Text>Your available balance</Text>
                    </View>
                    <View style={styles.balanceView}>
                        <Text> ₹ 4,590.00</Text>
                    </View>
                </View>

                <WalletActions />
            </View>
           
        </View>
    )

}