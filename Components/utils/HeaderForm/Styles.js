import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create(
    {
        header: {
            fontSize: wp("8%"),
            color: "#FFFFFF",
            marginTop: hp("5%"),
            fontFamily: "Mountains"
        },
        border: {
            width: wp("15%"),
            borderBottomColor: "#FFFFFF",
            borderBottomWidth: hp("0.2%")
        }
    }
);

export default styles;