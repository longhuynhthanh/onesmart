import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = StyleSheet.create(
    {
        ButtonContainer: {
            flexDirection: "row",
            position: "absolute",
            bottom: hp("5%"),
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center"
        },
        Button: {
            width: wp("30%"),
            height: hp("6%"),
            justifyContent: "center",
            margin: wp("5%")
        },
        Text: {
            fontSize: wp("4%"),
            fontFamily: "Mountains"
        },
        TextRegister: {
            color: "#000000"
        },
        
        ButtonRegister: {
            backgroundColor: "#FFFFFF"
        },

    }
);

export default styles;