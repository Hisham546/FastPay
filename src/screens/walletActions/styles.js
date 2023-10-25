import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.96,
        height: deviceHeight * 0.12,
        backgroundColor: 'black',
        marginLeft:'2%',
        borderRadius:3,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    }

});
export default styles;