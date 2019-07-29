import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create(
    {
        fomrLogin: {
            position: "absolute",
            top: 0,
            left: wp("10%")
        },
        TextForgotPassword: {
            color: "#FFFFFF",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: wp("4%")
        }
    }
);

export default styles;