import React, { Component,useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {updateEmployee} from '../services/Employee-gql';

const EditEmployee = (props) => {
    console.log("parameters...",props);
    const [id, onChangeId] = React.useState(props.route.params.id);
    const [name, onChangeName] = React.useState(props.route.params.name);
    const [email, onChangeEmail] = React.useState(props.route.params.email);
    const [address, onChangeAddress] = React.useState(props.route.params.address);
    const [dateOfBirth, onChangeDateOfBirth] = React.useState(props.route.params.dateOfBirth);
    const [dateOfJoining, onChangeDateOfJoining] = React.useState(props.route.params.dateOfJoining);
    const [education, onChangeEducation] = React.useState(props.route.params.education);
    const [type, onChangeType] = React.useState(props.route.params.type);
    const [role, onChangeRole] = React.useState(props.route.params.role);
    const [password, onChangePassword] = React.useState(props.route.params.password);
    const [dateOfEntry, onChangeDateOfEntry] = React.useState(props.route.params.dateOfEntry);
    const [dateOfModify, onChangeDateOfModify] = React.useState(props.route.params.dateOfModify);    const [active, onChangeActive] = React.useState(props.route.params.active);

    const [value, onChangeText] = React.useState('9');

    var editEmployeein = () => {
        var employee={
            id,name,email,address,dateOfBirth,dateOfJoining,education,type,role,password,dateOfEntry,dateOfModify,active
        };
        console.log("New values for employee... ",employee);
    //    console.log("employees before... ",employees);
        updateEmployee(employee);
        // console.log("========================",);
        // console.log("employees after... ",employees);
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

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => editEmployeein()}>
                    <Text style={styles.loginText}>Update Employee</Text>
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
    },
    loginButton: {

    },
    loginText: {
        color: 'black',
    }
});

export default EditEmployee;
