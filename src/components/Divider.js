import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

const CustomDivider = (props) => {

    return <Divider style={styles.div} />
}

const styles = StyleSheet.create({
    div: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginTop: 5,
        marginBottom: 5
    }
})

export default CustomDivider;