import React, { useRef,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
export const TopUpModal = ({ isTopUpOpen }) => {
    //const modalizeRef = useRef < Modalize > (null);

    const modalizeRef = useRef(null);

    useEffect(() => {
        if (isTopUpOpen) {
            modalizeRef.current?.open();
        } else {
            modalizeRef.current?.close();
        }
    }, [isTopUpOpen]);
    return (
        <>

<GestureHandlerRootView style={{ flex: 1 }}>
            <Modalize ref={modalizeRef}>
                <View><Text>Topup</Text></View>

            </Modalize>
            </GestureHandlerRootView>
        </>
    );
    const styles = StyleSheet.create({


    })

};