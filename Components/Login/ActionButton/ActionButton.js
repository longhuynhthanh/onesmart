import React from 'react';
import {View, Button, Text} from 'native-base';
import styles from './Styles';
function ActionButton(props) {
    const { navigation } = props;
    return (
        <View style={styles.ButtonContainer}>
            <Button dark rounded style={styles.Button}>
                <Text style={styles.Text}>LOGIN</Text>
            </Button>
            <Button rounded style={[styles.Button, styles.ButtonRegister]}>
                <Text style={[styles.TextRegister, styles.Text]} onPress={() => navigation.navigate("Register")}>SIGNUP</Text>
            </Button>
        </View>
    );
}

export default ActionButton;