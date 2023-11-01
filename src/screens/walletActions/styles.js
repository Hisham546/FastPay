import { Dimensions, Platform, PixelRatio , StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.93,
        height: deviceHeight * 0.12,
        backgroundColor: 'black',
        marginLeft:'3%',
        borderRadius:3,
       // alignItems:'center',
        flexDirection:'row',
       // justifyContent:'space-around'
    },
    topup:{
        width: deviceWidth * 0.30,
        height: deviceHeight * 0.12,
        justifyContent:'center',
        alignItems:'center'

    },
    walletTexts:{
        color:'white',
        fontSize:10,
        fontWeight: '500'

    }

});
export default styles;