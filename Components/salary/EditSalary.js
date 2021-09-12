import React, { Component,useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { updateLeaves } from '../../services/LeavesData';
import { updateSalary } from '../../services/Salary-gpl';
// import { updateSalary } from '../../services/SalaryData';

const EditSalary = (props) => {
    console.log("parameters...",props.route.params.monthYear,typeof (props.route.params.monthYear));
    const [id, onChangeId] = React.useState(props.route.params.id);
    const [employeeId, onChangeEmployeeId] = React.useState(props.route.params.employeeId);
    const [monthYear, onChangeMonthYear] = React.useState(props.route.params.monthYear);
    const [basic, onChangeBasic] = React.useState(''+props.route.params.basic);
    const [hra, onChangeHra] = React.useState(''+props.route.params.hra);
    const [lta, onChangeLta] = React.useState(''+props.route.params.lta);
    const [variable, onChangeVariable] = React.useState(''+props.route.params.variable);
    const [bonus, onChangeBonus] = React.useState(''+props.route.params.bonus);
    const [TDS, onChangeTDS] = React.useState(''+props.route.params.TDS);
    const [tax, onChangeTax] = React.useState(''+props.route.params.tax);
    const [workingDaysInMonth, onChangeWorkingDaysInMonth] = React.useState(''+props.route.params.workingDaysInMonth);
    // const [dateOfEntry, onChangeDateOfEntry] = React.useState(props.route.params.dateOfEntry);
    // const [dateOfModify, onChangeDateOfModify] = React.useState(props.route.params.dateOfModify);

    const [value, onChangeText] = React.useState('9');

    // console.log("in edit leave :",props.route.params.doFetch);
    const doFetch = props.route.params.doFetch;

    let editSalary = async() => {
        // const isFetch = !(props.route.params.isFetch);
        let employeeSalary={
            id,employeeId,monthYear,basic,hra,lta,variable,bonus,TDS,tax,workingDaysInMonth,total:100
            // id,employeeId,monthYear,basic:parseFloat(basic),hra:parseFloat(hra),lta:parseFloat(lta),variable:parseFloat(variable),bonus:parseFloat(bonus),TDS:parseFloat(TDS),tax:parseFloat(tax),workingDaysInMonth:parseFloat(workingDaysInMonth)
        };
        console.log("New values for employeeSalary... ",employeeSalary);
    //    console.log("employees before... ",employees);
        await updateSalary(employeeSalary);
        doFetch();
        props.navigation.navigate('EmployeeSalary',{});
    }

    // let editSalary = () => {
    //     // const isFetch = !(props.route.params.isFetch);
    //     let employeeSalary={
    //         id,employeeId,monthYear,basic,hra,lta,variable,bonus,TDS,tax,workingDaysInMonth,dateOfEntry,dateOfModify
    //     };
    //     console.log("New values for employeeSalary... ",employeeSalary);
    // //    console.log("employees before... ",employees);
    //     updateSalary(employeeSalary);
    //     doFetch();
    //     props.navigation.navigate('EmployeeSalary',{});
    // }

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
                <View style={{display:"flex",flexDirection:"row",width:"90%",justifyContent:"space-around"}}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="MonthYear"
                        underlineColorAndroid='transparent'
                        value={monthYear}
                        clearButtonMode="always"
                        onChangeText={onChangeMonthYear} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Basic"
                        underlineColorAndroid='transparent'
                        value={basic}
                        clearButtonMode="always"
                        onChangeText={onChangeBasic} />
                </View>
                </View>
                <View style={{display:"flex",flexDirection:"row",width:"90%",justifyContent:"space-around"}}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Hra"
                        underlineColorAndroid='transparent'
                        value={hra}
                        clearButtonMode="always"
                        onChangeText={onChangeHra} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Lta"
                        underlineColorAndroid='transparent'
                        value={lta}
                        clearButtonMode="always"
                        onChangeText={onChangeLta} />
                </View>
                </View>
                <View style={{display:"flex",flexDirection:"row",width:"90%",justifyContent:"space-around"}}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Variable"
                        underlineColorAndroid='transparent'
                        value={variable}
                        clearButtonMode="always"
                        onChangeText={onChangeVariable} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Bonus"
                        underlineColorAndroid='transparent'
                        value={bonus}
                        clearButtonMode="always"
                        onChangeText={onChangeBonus} />
                </View>
                </View>
                <View style={{display:"flex",flexDirection:"row",width:"90%",justifyContent:"space-around"}}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="TDS"
                        underlineColorAndroid='transparent'
                        value={TDS}
                        clearButtonMode="always"
                        onChangeText={onChangeTDS} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Tax"
                        underlineColorAndroid='transparent'
                        value={tax}
                        clearButtonMode="always"
                        onChangeText={onChangeTax} />
                </View>
                </View>
                <View style={{display:"flex",flexDirection:"row",width:"90%",justifyContent:"space-around"}}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="workingDaysInMonth"
                        underlineColorAndroid='transparent'
                        value={workingDaysInMonth}
                        clearButtonMode="always"
                        onChangeText={onChangeWorkingDaysInMonth} />
                </View>
                </View>
                {/* <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="dateOfEntry"
                        underlineColorAndroid='transparent'
                        value={dateOfEntry}
                        clearButtonMode="always"
                        onChangeText={onChangeDateOfEntry} />
                </View>
                </View>
                <View style={{display:"flex",flexDirection:"row",width:"90%",justifyContent:"space-around"}}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="dateOfModify"
                        underlineColorAndroid='transparent'
                        value={dateOfModify}
                        clearButtonMode="always"
                        onChangeText={onChangeDateOfModify} />
                </View>
                </View> */}

                <View style={{backgroundColor:"purple",height:45,borderRadius:35,marginTop:10}}>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => editSalary()}>
                    <Text style={styles.loginText}>Update Salary</Text>
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
        width: "45%",
        height: 45,
        marginVertical: 10,
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

export default EditSalary;
