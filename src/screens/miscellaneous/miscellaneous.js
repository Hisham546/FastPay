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

export default function Miscellaneous() {
    return (
        <View style={styles.container}>
            <View style={styles.miscView1}>
                <MaterialIcon name="web" color={'#7FC8A9'} size={25} />
                <MaterialIcon name="water" color={'#61A3BA'} size={25} />
                <MaterialIcon name="flash" color={'#F9B572'} size={25} />
                <MaterialIcon name="television" color={'#F875AA'} size={25} />
            </View>
            <View style={styles.miscView1}>
                <MaterialIcon name="car-estate" color={'#186F65'} size={25} />
                <MaterialIcon name="home" color={'#7FC8A9'} size={25} />
                <MaterialIcon name="cash-100" color={'#F875AA'} size={25} />
                <MaterialIcon name="dots-horizontal-circle" color={'#706233'} size={25} />
            </View>
        </View>
    )

}