import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin() {
    if (this.state.username === '') {
      alert('Input username!');
      return;
    }

    if (this.state.password === '') {
      alert('Input password!');
      return;
    }

    const formData = new FormData();
    formData.append("user-id", this.state.username);
    formData.append("user-password", this.state.password);

    fetch('https://mustseeum.com/api/account/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  render() {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: 'center' }}>Login Page</Text>
        <View style={{ margin: 10 }}>
          <TextInput
            style={styles.text}
            placeholder="Username"
            value={this.state.username}
            onChangeText={(text) => this.setState({ username: text })}
          />
          <TextInput
            style={styles.text}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          // secureTextEntry
          />
        </View>
        <Button
          title='Login'
          onPress={() => this.handleLogin()}
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

export default Login;