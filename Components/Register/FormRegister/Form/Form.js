import React, { useState } from 'react';
import { Form, Item, Label, Input } from 'native-base';
import styles from './Styles';
function FormInput(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    return (
        <Form style={styles.form}>
            <Item stackedLabel style={styles.formItem}>
                <Label style={styles.labelItem}>Email</Label>
                <Input style={styles.InputItem}
                    placeholder="Input Email ...."
                    placeholderTextColor="#FFFFFF"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </Item>
            <Item stackedLabel style={styles.formItem}>
                <Label style={styles.labelItem}>Password</Label>
                <Input style={styles.InputItem}
                    placeholder="Input Password ...."
                    placeholderTextColor="#FFFFFF"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </Item>
            <Item stackedLabel style={styles.formItem}>
                <Label style={styles.labelItem}>Repassword</Label>
                <Input style={styles.InputItem}
                    placeholder="Input Repassword ...."
                    placeholderTextColor="#FFFFFF"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    value={repassword}
                    onChangeText={text => setRepassword(text)}
                />
            </Item>
            {props.children}
        </Form>
    );
}

export default FormInput;