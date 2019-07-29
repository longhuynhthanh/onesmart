import React from 'react';
import { View } from 'native-base';
import { Text } from 'react-native';
import styles from './Styles';
import HeaderForm from '../../utils/HeaderForm/HeaderForm';
import Form from './Form/Form';
function FormLogin() {
    return (
        <View style={styles.fomrLogin}>
            <HeaderForm title={"Login"} />
            <Form>
                <Text style={styles.TextForgotPassword}>Forgot Password?</Text>
            </Form>
        </View>
    );
}

export default FormLogin;