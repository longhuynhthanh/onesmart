import React from 'react';
import FormRegister from './FormRegister/FormRegister';
import ButtonRegister from './ActionButton/ActionButton';
import Login from '../utils/Login/Login';
function Register(props) {
    const { navigation } = props;
    return (
        <Login navigation={navigation} action={"LOGIN"}>
            <FormRegister />
            <ButtonRegister navigation={navigation} />
        </Login>
    );
}

export default Register;