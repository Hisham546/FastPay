import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.93,
        height: deviceHeight * 0.20,
        backgroundColor: 'white',
        marginLeft: '3%',
        borderRadius: 3,

    },
    miscView1: {
        width: deviceWidth * 0.93,
        height: deviceHeight * 0.10,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    miscView2: {

    }


});
export default styles;