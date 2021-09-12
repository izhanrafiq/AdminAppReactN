import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {addEmployee} from '../services/Employee-gql'

const AddEmployee = (props) => {
    const [id, onChangeId] = React.useState('');
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    const [dateOfBirth, onChangeDateOfBirth] = React.useState('');
    const [dateOfJoining, onChangeDateOfJoining] = React.useState('');
    const [education, onChangeEducation] = React.useState('');
    const [type, onChangeType] = React.useState('');
    const [role, onChangeRole] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [dateOfEntry, onChangeDateOfEntry] = React.useState('');
    const [dateOfModify, onChangeDateOfModify] = React.useState('');
    const [active, onChangeActive] = React.useState('');

    const [value, onChangeText] = React.useState('9');
    
    var addToEmployee = async () => {
        var employee={
            id,name,email,address,dateOfBirth,dateOfJoining,education,type,role,password,dateOfEntry,dateOfModify,active
        };
        employee.id= Date.now()+"S";
        console.log("Added ",employee);
        await addEmployee(employee);
        props.navigation.navigate('Nav', {index:"emp"});
    }

        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Name"
                        underlineColorAndroid='transparent'
                        value={name}
                        clearButtonMode="always"
                        onChangeText={onChangeName} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        underlineColorAndroid='transparent'
                        value={email}
                        clearButtonMode="always"
                        onChangeText={onChangeEmail} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Address"
                        underlineColorAndroid='transparent'
                        value={address}
                        clearButtonMode="always"
                        onChangeText={onChangeAddress} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="DateOfBirth"
                        underlineColorAndroid='transparent'
                        value={dateOfBirth}
                        clearButtonMode="always"
                        onChangeText={onChangeDateOfBirth} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="DateOfJoining"
                        underlineColorAndroid='transparent'
                        value={dateOfJoining}
                        clearButtonMode="always"
                        onChangeText={onChangeDateOfJoining} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="education"
                        underlineColorAndroid='transparent'
                        value={education}
                        clearButtonMode="always"
                        onChangeText={onChangeEducation} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="type"
                        underlineColorAndroid='transparent'
                        value={type}
                        clearButtonMode="always"
                        onChangeText={onChangeType} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="role"
                        underlineColorAndroid='transparent'
                        value={role}
                        clearButtonMode="always"
                        onChangeText={onChangeRole} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="password"
                        underlineColorAndroid='transparent'
                        value={password}
                        clearButtonMode="always"
                        onChangeText={onChangePassword} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="dateOfEntry"
                        underlineColorAndroid='transparent'
                        value={dateOfEntry}
                        clearButtonMode="always"
                        onChangeText={onChangeDateOfEntry} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="dateOfModify"
                        underlineColorAndroid='transparent'
                        value={dateOfModify}
                        clearButtonMode="always"
                        onChangeText={onChangeDateOfModify} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="active"
                        underlineColorAndroid='transparent'
                        value={active}
                        clearButtonMode="always"
                        onChangeText={onChangeActive} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => addToEmployee()}>
                    <Text style={styles.loginText}>Add Employee</Text>
                </TouchableHighlight>
            </View>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    loginButton: {
        backgroundColor: "#5ce1e6",
    },
    loginText: {
        color: 'black',
    }
});

export default AddEmployee;
