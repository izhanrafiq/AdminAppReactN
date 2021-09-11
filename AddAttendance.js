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
import {addAttendance} from '../services/AttendanceData'

const AddAttendance = (props) => {
    const [id, onChangeId] = React.useState('');
    const [employeeId, onChangeEmployeeId] = React.useState('');
    const [date, onChangeDate] = React.useState('');
    const [inTimeDate, onChangeInTimeDate] = React.useState('');
    const [outTime, onChangeOutTime] = React.useState('');
    const [totalHours, onChangeTotalHours] = React.useState('');

    const [value, onChangeText] = React.useState('9');
    
    var addToAttendance = async () => {
        var attendance={
            id,employeeId,date,inTimeDate,outTime, totalHours
        };
        attendance.id= Date.now()+"S";
        attendance.employeeId = props.route.params.employeeId;
        await addAttendance(attendance);
        console.log("Added Attendance: ",attendance);
        props.navigation.navigate('Employee', {});
    }

        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Date"
                        underlineColorAndroid='transparent'
                        value={date}
                        clearButtonMode="always"
                        onChangeText={onChangeDate} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="In Time Date"
                        underlineColorAndroid='transparent'
                        value={inTimeDate}
                        clearButtonMode="always"
                        onChangeText={onChangeInTimeDate} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Out Time"
                        underlineColorAndroid='transparent'
                        value={outTime}
                        clearButtonMode="always"
                        onChangeText={onChangeOutTime} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Total Hours"
                        underlineColorAndroid='transparent'
                        value={totalHours}
                        clearButtonMode="always"
                        onChangeText={onChangeTotalHours} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => addToAttendance()}>
                    <Text style={styles.loginText}>Add Attendance</Text>
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

export default AddAttendance;
