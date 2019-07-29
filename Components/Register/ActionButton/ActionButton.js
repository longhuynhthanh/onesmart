import React from 'react';
import { View, Button, Text } from 'native-base';
import styles from './Styles';
function ButtonRegister(props) {
    const { navigation } = props;
    return (
        <View style={styles.ButtonContainer}>
            <Button dark rounded style={styles.Button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.Text}>Cancel</Text>
            </Button>
            <Button rounded style={[styles.Button, styles.ButtonRegister]}>
                <Text style={[styles.TextRegister, styles.Text]}>Next</Text>
            </Button>
        </View>
    );
}

export default ButtonRegister;