import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => (
    <View style={styles.spinnerStyle}>
        <ActivityIndicator size={size || 'large'} />
    </View>
);

const styles = {
    spinnerStyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Spinner };
