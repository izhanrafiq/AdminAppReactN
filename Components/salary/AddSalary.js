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
import { addSalary } from '../../services/Salary-gpl';
// import { addSalary } from '../../services/SalaryData';
const AddSalary = (props) => {
    
    const [id, onChangeId] = React.useState('');
    const [employeeId, onChangeEmployeeId] = React.useState("");
    const [monthYear, onChangeMonthYear] = React.useState('');
    const [basic, onChangeBasic] = React.useState('');
    const [hra, onChangeHra] = React.useState('');
    const [lta, onChangeLta] = React.useState('');
    const [variable, onChangeVariable] = React.useState('');
    const [bonus, onChangeBonus] = React.useState('');
    const [TDS, onChangeTDS] = React.useState('');
    const [tax, onChangeTax] = React.useState('');
    const [workingDaysInMonth, onChangeWorkingDaysInMonth] = React.useState('');
    // const [dateOfEntry, onChangeDateOfEntry] = React.useState('');
    // const [dateOfModify, onChangeDateOfModify] = React.useState('');

    const [value, onChangeText] = React.useState('9');

    const doFetch = props.route.params.doFetch;
    // console.log("in add leave :",doFetch);
    const empId = props.route.params.employeeId;
    console.log("in add leave :",empId);
    const setEmployeeId = props.route.params.setEmployeeId;
    console.log("in add leave :",setEmployeeId);
    
    let addToSalary = async () => {
        let employeeSalary={
            id,employeeId:empId,monthYear,basic,hra,lta,variable,bonus,TDS,tax,workingDaysInMonth,total:100
        };
        // employeeSalary.id= Date.now()+"S";
        console.log("Added ",employeeSalary);
        await addSalary(employeeSalary);
        setEmployeeId(empId)
        doFetch();
        props.navigation.navigate('EmployeeSalary', {});
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


                <View style={{backgroundColor:"blue",height:45,borderRadius:35,marginTop:10}}>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => addToSalary()}>
                    <Text style={styles.loginText}>Add Salary</Text>
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
export default AddSalary;
