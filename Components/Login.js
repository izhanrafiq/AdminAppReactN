import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

import {Button, TextInput, Appbar, Title} from 'react-native-paper';

import {NativeModules} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: 'Login',
  };
  state = {
    email: 'admin',
    password: 'admin',
  };

  onLoginButton = () => {
    console.log(
      '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> on login button',
    );
    if (this.state.email == this.state.password) {
      this.props.navigation.navigate('Salary');
    //   NativeModules.Device.getDeviceName((err, name) => {
    //     console.log(err, name);
    //   });
      this.setState({
        email: '',
        password: '',
      });
    } else {
      alert('Username/Password should be admin/admin.');
    }
  };

  onForgotText = () => {
    //this.props.navigation.navigate('Forgot');
  };

  onRegister = () => {
    //this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
        style={{backgroundColor:"blue" ,height:50,width:50,marginTop:10,marginBottom:10}}
              source={require('../public/images/admin.png')}
            />
        <Title style={styles.title}>Admin Login</Title>
        {/* <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={require('../public/images/user.png')} />
                    <TextInput mode='outlined' style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={require('../public/images/password.png')} />
                    <TextInput mode='outlined'  style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
                        
                </View> */}
        <View
          style={{
            // backgroundColor: 'red',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            width: '80%',
          }}>
          <View
            style={{
              borderBottomColor: '#F5FCFF',
              backgroundColor: 'grey',
              borderRadius: 10,
              // borderBottomWidth: 1,
              width: '95%',
              height: '40%',
              // marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
            }}>
            <Image
              style={styles.inputIcon}
              source={require('../public/images/user.png')}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Username"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              value={this.state.email}
              onChangeText={email => this.setState({email})}
            />
          </View>
          <View
            style={{
              borderBottomColor: '#F5FCFF',
              backgroundColor: 'grey',
              borderRadius: 10,
              // borderBottomWidth: 1,
              width: '95%',
              height: '40%',
              // marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.inputIcon}
              source={require('../public/images/password.png')}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="skyblue"
            icon={require('../public/images/login.png')}
            mode="contained"
            onPress={() => this.onLoginButton()}>
            Login
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    // borderRadius: 30,
    // backgroundColor:"red",
    borderBottomWidth: 1,
    width: '100%',
    height: 35,
    textAlign: 'center',
    marginBottom: 10,
    // marginLeft: 150,
    flexDirection: 'row',

    // alignItems: 'center'
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width:"80%",
    borderRadius: 30,
    // marginLeft: 50,
  },
  loginButton: {
    backgroundColor: 'black',
  },
  loginText: {
    color: 'white',
  },
});
