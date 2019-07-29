import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create(
    {
        form: {
            marginTop: hp("2%"),
            width: wp("80%")
        },
        formItem: {
            marginTop: hp("2%"),
        },
        labelItem: {
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: wp("5%"),
        },
        InputItem: {
            color: "#FFFFFF",
            fontSize: wp("4%"),
            marginTop: hp("1.2%")
        }
    }
);

export default styles;