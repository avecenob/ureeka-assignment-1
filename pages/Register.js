import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            name: '',
            password: ''
        };
    }

    handleRegister() {
        if (this.state.name === '') {
            alert('Name cannot be empty!');
            return;
        }

        if (this.state.email === '') {
            alert('Email cannot be empty!');
            return;
        }

        if (this.state.phone === '') {
            alert('Phone cannot be empty!');
            return;
        }

        if (this.state.password === '') {
            alert('Password cannot be empty!');
            return;
        }

        const formData = new FormData();
        formData.append("user-name", this.state.name);
        formData.append("user-email", this.state.email);
        formData.append("user-phone", this.state.phone);
        formData.append("user-password", this.state.password);

        fetch('https://mustseeum.com/api/account/register', {
            method: 'POST', // or 'PUT'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('Success:', response);
                alert('Account registered successfuly!');
                this.props.navigation.navigate('Home');
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    render() {
        return (
            <SafeAreaView>
                <Text>This is Register Page</Text>
                <View style={{ margin: 10 }}>
                    <TextInput
                        style={styles.text}
                        placeholder="Name"
                        value={this.state.name}
                        onChangeText={(text) => this.setState({ name: text })}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder="Phone"
                        value={this.state.phone}
                        onChangeText={(text) => this.setState({ phone: text })}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry
                    />
                </View>
                <Button
                    title="Register"
                    onPress={() => this.handleRegister()}
                />
                <Text style={{ margin: 10, textAlign: 'center' }}>Have an acoount?</Text>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </SafeAreaView>
        );
    }
}



const styles = StyleSheet.create({
    text: {
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: 'gray'
    }
})

export default Register;