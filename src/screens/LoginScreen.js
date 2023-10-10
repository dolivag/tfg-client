import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Alert, View, ScrollView, Button, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import FloatingLabelInput from '../components/FloatingLabelInput';


function LoginScreen({ navigation }) {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value })
    }

    return (
        <ScrollView style={styles.container}>
            <View >
                <FloatingLabelInput
                    style={styles.inputGroup}
                    label="Email"
                    value={state.email}
                    onChangeText={(value) => handleTextChange('email', value)}
                />
            </View>
            <View>
                <FloatingLabelInput
                    style={styles.inputGroup}
                    label="Password"
                    value={state.password}
                    secureTextEntry={true}
                    onChangeText={(value) => handleTextChange('password', value)}
                />
            </View>
            <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={console.log("Pulsado login")}
            >
                <Text style={styles.appButtonText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.appButtonText}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        padding: 0,
        marginBottom: 15,
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#a3a3a3',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 15
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default LoginScreen;