import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: 'white'

    },
    headerView: {
        width: deviceWidth,
        height: (deviceHeight * 0.4),


    },
    userNameView: {
        width: deviceWidth * 0.95,
        marginLeft: '2.20%',
        marginTop: '4%',
        height: (deviceHeight * 0.11),

        flexDirection:'row'

    },
    userNameSubView: {
        width: deviceWidth * 0.47,
        justifyContent:'center',
       // alignItems:'center',
        height: (deviceHeight * 0.11),


    },
    balanceView:{
        width: deviceWidth * 0.485,
        justifyContent:'center',
        alignItems:'center',
        height: (deviceHeight * 0.11), 

    }

});
export default styles;