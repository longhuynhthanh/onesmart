import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create(
    {
        Text: {
            fontSize: wp("4%"),
            fontFamily: "Mountains"
        },
        TextLogo: {
            marginTop: hp("3%")
        }, 
        image: {
            width: wp("30%"),
            height: wp("30%")
        }
    }
);

export default styles;