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
        // alignItems:'center',
        flexDirection: 'row',
        // justifyContent:'space-around'
    },
    miscView1: {
        width: deviceWidth * 0.93,
        height: deviceHeight * 0.10,
        backgroundColor:'blue',
    },
    miscView2: {

    }


});
export default styles;