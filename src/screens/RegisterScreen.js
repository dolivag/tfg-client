import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native'
import FloatingLabelInput from '../components/FloatingLabelInput';
import RadioButton from '../components/RadioButton';
import { useDispatch, useSelector } from "react-redux";



const RegisterScreen = (props) => {

    const displayField = useSelector(state => state.register.displayField);

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        house: ""
    })

    useEffect(() => {
        displayField ? console.log('Mostrar') : console.log('No mostrar')
    }, [displayField]);

    const options = ["Create a Home", "Join a Home"]
    const [selectedOption, setSelectedOption] = useState(null);

    const url = 'http://localhost:3000/api/register';

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: state.name,
            email: state.email,
            password: state.password,
            houseId: "123456789012345678901234"
        }),
    };

    const register = async () => {
        try {
            await fetch(
                url, requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            Alert.alert("Post created at : ",
                                data.createdAt);
                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleSelect = (option) => {
        setSelectedOption(option);
        console.log("Opción elegida: " + option)
        console.log("Opción en selectedOption: " + selectedOption)
    };

    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value })
    }


    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.groupName}>Personal data</Text>
                <View>
                    <FloatingLabelInput
                        style={styles.textInput}
                        label="User name"
                        value={state.name}
                        onChangeText={(value) => handleTextChange('name', value)}
                    />
                </View>
                <View>
                    <FloatingLabelInput
                        style={styles.textInput}
                        label="Email"
                        value={state.email}
                        onChangeText={(value) => handleTextChange('email', value)}
                    />
                </View>
                <View>
                    <FloatingLabelInput
                        style={styles.textInput}
                        label="Password"
                        secureTextEntry={true}
                        value={state.password}
                        onChangeText={(value) => handleTextChange('password', value)}
                    />
                </View>
                <View>
                    <FloatingLabelInput
                        style={styles.textInput}
                        label="Repeat password"
                        secureTextEntry={true}
                        value={state.password2}
                        onChangeText={(value) => handleTextChange('password2', value)}
                    />
                </View>
            </View>

            <View>
                <Text style={styles.groupName}>Home</Text>
                <View>
                    <RadioButton
                        options={options}
                        selectedOption={selectedOption}
                        onSelect={handleSelect}
                    />
                    {displayField ? <View >
                        <FloatingLabelInput
                            style={styles.textInput}
                            label="House name"
                            value={state.house}
                            onChangeText={(value) => handleTextChange('house', value)}
                        />
                    </View> : null}
                </View>
            </View>
            <TouchableOpacity onPress={register} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 35,
        paddingVertical: 15
    },
    inputGroup: {
        padding: 0,
        marginBottom: 15,
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#a3a3a3',
    },
    textInput: {
        fontSize: 16,
        color: 'black',
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
    },
    groupName: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#009688',
        marginTop: 15,
        marginBottom: 5
    }
})

export default RegisterScreen;