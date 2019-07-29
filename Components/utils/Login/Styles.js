import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create(
    {
        container: {
            width: wp("100%"),
            height: hp("100%")
        },
        imageBackground: {
            flex: 7
        },
        logo: {
            flex: 3,
            alignItems: "center"        
        }
    }
);
export default styles;