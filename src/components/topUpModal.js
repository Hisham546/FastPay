import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions, Pressable } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const TopUpModal = props => {
    const { isTopUpOpen, closeModal } = props
    return (


        <Modal
            animationType="fade"
            transparent={true}
            visible={isTopUpOpen}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.headingView}>
                        <Text style={styles.modalText}>Add Amount</Text>
                        <Text style={styles.modalText}>How much would you like to top up?</Text>
                    </View>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={closeModal}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>


    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        // margin: 20,
        width: deviceWidth * 0.85,
        height: deviceHeight * 0.4,
        backgroundColor: 'white',
        borderRadius: 20,
        // padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    headingView: {
        width: deviceWidth * 0.85,
        height: deviceHeight * 0.07,
        backgroundColor: 'red'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
