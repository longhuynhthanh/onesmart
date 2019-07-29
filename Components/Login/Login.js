import React from 'react';
import FormLogin from './FormLogin/FormLogin';
import ActionButton from './ActionButton/ActionButton';
import LoginBackground from '../utils/Login/Login';
function Login(props) {
    const {navigation} = props;
    return (
        <LoginBackground navigation={navigation} action="SIGN UP">
            <FormLogin />
            <ActionButton navigation={navigation} />
        </LoginBackground>
    );
}

export default Login;