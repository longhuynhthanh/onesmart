import React from 'react';
import Header from '../../utils/HeaderForm/HeaderForm';
import Form from './Form/Form';
import { View } from 'native-base';
import styles from './Styles';
function FormRegister() {
    return (
        <View style={styles.formRegister}>
            <Header title={"Register"} />
            <Form />
        </View> 
    );
}

export default FormRegister;