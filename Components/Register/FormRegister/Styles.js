import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create(
    {
        formRegister: {
            position: "absolute",
            top: 0,
            left: wp("10%")
        }
    }
);

export default styles;