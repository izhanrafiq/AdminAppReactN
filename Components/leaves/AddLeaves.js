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
import { addLeaves } from '../../services/LeavesData';

const AddLeave = (props) => {
    
    const [id, onChangeId] = React.useState('');
    const [employeeId, onChangeEmployeeId] = React.useState('');
    const [count, onChangeCount] = React.useState('');
    const [year, onChangeYear] = React.useState('');
    const [startDate, onChangeStartDate] = React.useState('');
    const [endDate, onChangeEndDate] = React.useState('');
    const [dateOfEntry, onChangeDateOfEntry] = React.useState('');
    const [dateOfModify, onChangeDateOfModify] = React.useState('');

    const [value, onChangeText] = React.useState('9');

    const doFetch = props.route.params.doFetch;
    // console.log("in add leave :",doFetch);
    const empId = props.route.params.employeeId;
    console.log("in add leave :",empId);
    const setEmployeeId = props.route.params.setEmployeeId;
    console.log("in add leave :",setEmployeeId);
    
    let addToLeaves = () => {
        let employeeLeave={
            id,employeeId:empId,count,year,startDate,endDate,dateOfEntry,dateOfModify
        };
        employeeLeave.id= Date.now()+"S";
        console.log("Added ",employeeLeave);
        addLeaves(employeeLeave);
        setEmployeeId(empId)
        doFetch();
        props.navigation.navigate('EmployeeLeaves', {});
    }

        return (
            // <ScrollView>
            <View style={styles.container}>
            {/* <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="EmployeeId"
                        underlineColorAndroid='transparent'
                        value={employeeId}
                        clearButtonMode="always"
                        onChangeText={onChangeEmployeeId} />
                </View> */}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Count"
                        underlineColorAndroid='transparent'
                        value={count}
                        clearButtonMode="always"
                        onChangeText={onChangeCount} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Year"
                        underlineColorAndroid='transparent'
                        value={year}
                        clearButtonMode="always"
                        onChangeText={onChangeYear} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="startDate"
                        underlineColorAndroid='transparent'
                        value={startDate}
                        clearButtonMode="always"
                        onChangeText={onChangeStartDate} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="endDate"
                        underlineColorAndroid='transparent'
                        value={endDate}
                        clearButtonMode="always"
                        onChangeText={onChangeEndDate} />
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

                <View style={{backgroundColor:"blue",height:45,borderRadius:35,}}>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => addToLeaves()}>
                    <Text style={styles.loginText}>Add Leave</Text>
                </TouchableHighlight>
                </View>
            </View>
            // </ScrollView>
        );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        display:"flex",
        justifyContent:"center",
        backgroundColor: 'rgb(174, 135, 196)',
        // backgroundColor: '#DCDCDC',
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
        color: 'white',
        fontSize: 18,
        fontWeight:"bold"
        
    }
});
export default AddLeave;
