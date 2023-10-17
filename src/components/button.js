import {
    StyleSheet,
    Text,
    View,Dimensions,
    TouchableHighlight, TouchableOpacity, ActivityIndicator
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const ButtonComponent = props => {
    const { disabled = false } = props
    return (

        <TouchableOpacity onPress={props.onPress} disabled={disabled} activeOpacity={1}
            style={[props.style, { alignItems: 'center', justifyContent: 'center' }]} >
            <Text style={props.textStyle}>{props.ButtonLabel}</Text>
        </TouchableOpacity>
    )

};
