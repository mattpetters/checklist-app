import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../util/colors';

const AppHeader = (props) => {
    return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Checkoff</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        color: 'white',
        fontSize:18,
        padding:40,
    },
    header: {
        backgroundColor: colors.appHeaderColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#5726bf'
    }
});

export default AppHeader;

