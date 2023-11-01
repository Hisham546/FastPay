import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: '#F8F8F8'

    },
    headerView: {
        width: deviceWidth,
        height: (deviceHeight * 0.3),



    },
    secondView: {
        width: deviceWidth,
        height: (deviceHeight * 0.7),

    },
    userNameView: {
        width: deviceWidth * 0.95,
        marginLeft: '2.20%',
        marginTop: '4%',
        height: (deviceHeight * 0.11),

        flexDirection: 'row'

    },
    userNameSubView: {
        width: deviceWidth * 0.47,
        justifyContent: 'center',
        // alignItems:'center',
        height: (deviceHeight * 0.11),


    },
    balanceView: {
        width: deviceWidth * 0.485,
        justifyContent: 'center',
        alignItems: 'center',
        height: (deviceHeight * 0.11),

    },
    headingTexts: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: '2%'

    },
    normalTexts: {
        color: 'gray',
        fontSize: 13,
        fontWeight: '400'

    },
    nameTexts: {
        color: 'black',
        fontSize: 17,
        fontWeight: '500'
    }

});
export default styles;