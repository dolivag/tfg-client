import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Placeholder = () => {
    return (
        <View style={styles.container}>
            <Text>Placeholder</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
});

export default Placeholder;
