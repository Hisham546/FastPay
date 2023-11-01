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
import Miscellaneous from "../miscellaneous/miscellaneous";
export default function Home() {
    return (

        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headingTexts}>Fast Pay</Text>
                <View style={styles.userNameView}>
                    <View style={styles.userNameSubView}>
                        <Text style={styles.nameTexts}>Hi, User</Text>
                        <Text style={styles.normalTexts}>Your available balance</Text>
                    </View>
                    <View style={styles.balanceView}>
                        <Text style={[styles.nameTexts, { fontSize: 20 }]}> ₹ 4,590.00</Text>
                    </View>
                </View>

                <WalletActions />
                
            </View>
            <View style={styles.secondView}>
                <Miscellaneous />
                </View>

        </View>
    )

}