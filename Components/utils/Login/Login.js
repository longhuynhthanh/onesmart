import React from 'react';
import Logo from '../Logo/Logo';
import { View } from 'native-base';
import { ImageBackground } from 'react-native';
import styles from './Styles';
function Register(props) {
    const { navigation, action } = props;
    return (
        <React.Fragment>
            <View style={styles.container}>
                <ImageBackground style={styles.imageBackground} source={require('../../../public/images/drawable-ldpi/background.png')} resizeMode="stretch">
                    {props.children}
                </ImageBackground>
                <View style={styles.logo}>
                    <Logo action={action} navigation={navigation} />
                </View>
            </View>
        </React.Fragment>
    );
}

export default Register;