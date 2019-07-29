import React from 'react';
import { Image } from 'react-native';
import { Text } from 'native-base';
import styles from './Styles';
function Logo(props) {
    const { action, navigation } = props;
    //#region function
    const handlePress = () => action === "SIGN UP" ? navigation.navigate("Register") : navigation.navigate("Login");
    //#endregion
    return (
        <React.Fragment>
            <Image source={require('../../../public/images/drawable-ldpi/logo.png')} style={styles.image} />
            <Text style={[styles.Text, styles.TextLogo]} onPress={handlePress}><Text style={styles.Text} note>{action === "SIGN UP" ? "Don't have an account?" : "You have an account"}</Text> {props.action}</Text>
        </React.Fragment>
    );
}

export default Logo;