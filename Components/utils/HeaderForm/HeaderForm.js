import React from 'react';
import { Text, View } from 'native-base';
import styles from './Styles';
function HeaderForm(props){
    return (
        <React.Fragment>
            <Text style={styles.header}>{props.title}</Text>
            <View style={styles.border}></View>
        </React.Fragment>
    );
}

export default HeaderForm;