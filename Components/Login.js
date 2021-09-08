import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

import { Button,TextInput,Appbar,Title} from 'react-native-paper';

import {NativeModules} from 'react-native';


export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Login'
    };
    state = {
        email: 'admin',
        password: 'admin'
    }

  

    onLoginButton = () => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> on login button");
        if (this.state.email == this.state.password) {
            this.props.navigation.navigate('Customers', { name: this.state.email });
            NativeModules.Device.getDeviceName((err ,name) => {
                console.log(err, name);
                });
            this.setState({
                email: '',
                password: ''
            });
        } else {
            alert('Username/Password should be admin/admin.');
        }
    }

    onForgotText = () => {
        //this.props.navigation.navigate('Forgot');
    }

    onRegister = () => {
        //this.props.navigation.navigate('Register');
    }

    render() {
        return (
            
            <View style={styles.container}>
                <Title style={styles.title}>Admin Login</Title>
                <View style={styles.inputContainer}>
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
                        
                </View>
                <View style={styles.buttonContainer}>
                <Button color="#de905f" icon={require('../public/images/login.png')} mode="contained" onPress={() => this.onLoginButton()}>
                    Login
                </Button>
                </View>
                

                {/* <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight> */}
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title:{
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        marginLeft: 150,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1,
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
        alignItems: 'center'
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
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        marginLeft:50
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});
