import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor:'white'

    },
    firstView: {
        width: deviceWidth,
        height: (deviceHeight * 0.6),


    },
    secondView: {
        width: deviceWidth,
        height: (deviceHeight * 0.4),


    },
    mainHeaderView: {
        width: (deviceWidth * 0.96),
        height: (deviceHeight * 0.2),
        marginLeft: '2%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    mainText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'


    },
    subText:{
        color: 'black',
        fontSize: deviceWidth * 0.04,
        fontWeight: '400'

    },
    buttonView: {
        width: (deviceWidth * 0.96),
        height: (deviceHeight * 0.2),
        marginLeft: '2%',

        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        width: (deviceWidth * 0.90),
        height: '25%',
        backgroundColor: 'black',
        borderRadius: 4,
        //   marginTop: 5


    },
    signupButton: {
        width: (deviceWidth * 0.90),
        height: '25%',
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 7

    },
    loginText: {
        color: 'white'

    },
    signupText: {
        color: 'black',
        fontWeight: '500'

    }


});
export default styles;