import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from "react-native";
import { getSalary,getSalaryById,getSalaryBySearch,getSalaryListForEmp,updateSalary,deleteSalary, getSalaryInit} from "../../services/SalaryData";
import {getEmployeeById} from '../../services/EmployeeData';
import SelectDropdown from 'react-native-select-dropdown'




const Item = ({ item, onPress, style,onDelete,onEdit, onSelectMonth}) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, style,{borderRadius:10}]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        {/* {console.log("ggggg",item)} */}
        <View style={{flex:8, height: 50, flexDirection: 'row'}} >
            <View style={{flex:7, height: 50}}>
                <Text style={styles.title}>{getEmployeeById(item.employeeId).name}</Text>
            </View>
            <View style={ {flex: 1,height:40,alignContent:"space-around"}} >
              
              <Button
              onPress={()=>{console.log("edit",item.id);
          onEdit(item.id);
        }} title="Edit"/>
            </View>

            <Button onPress={()=>{console.log("select month",item.employeeId);
        onSelectMonth(item.employeeId);
        }} title="Pay-Slip" />


            <View  style={{flex:1, height: 50}}>
              
          <Button  onPress={()=>{console.log("delete",item.id);
          onDelete(item.id);
        }} title="X"/>
            </View>
            </View>
        <View style={{flex:2,paddingVertical:5,paddingHorizontal:10,width:250,  height: "auto" ,backgroundColor:'lightblue',display:'flex',flexDirection:'column',borderRadius:10,backgroundColor:'#ddd'}} >
            <Text style={styles.phone}>Total-Salary : {item.basic+item.lta+item.hra+item.variable+item.bonus+item.TDS+item.tax}</Text>
            <Text style={styles.address}>WorkingDays : {item.workingDaysInMonth}</Text>
            <Text style={styles.city}>Month/Year    : {item.monthYear}</Text>
            <Text style={styles.city}>DateOfEntry    : {item.dateOfEntry}</Text>
            <Text style={styles.city}>DateOfModify    : {item.dateOf}</Text>
      </View>
      </View>
  </TouchableOpacity>
);

const EmployeeSalary = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
//   const [salary,setSalary]=useState([]);
//   const [salaryInit,setSalaryInit] = useState([]);
  const [salaryList,setSalaryList] = useState([]);
  const [monthSalary,setMonthSalary] = useState([]);
  const [monthList,setMonthList] = useState([]);
  const navigation = useNavigation();
  const [fetch,setFetch] = useState(true);

  const doFetch = ()=>{
      const empSalaryList = props.route.params.empSalaryList;
    console.log("in salaryList :",empSalaryList)
    setSalaryList(empSalaryList);
    let tempMonthList = empSalaryList.map((e)=>{return e.monthYear;});
    console.log("monthlist :",tempMonthList)
    setMonthList(tempMonthList);

  }
  useEffect(()=>{
    doFetch();
  },[])
//   useEffect(async ()=>{
//     doFetch();
//   },[])
  const renderItem = ({ item }) => {
    console.log("in render in single salary //////////////////")
    const backgroundColor = item.id === selectedId ? "lightgrey" : "white";
    return (
      <Item
        item={item}
        // item={check(item)}
        onPress={() => setSelectedId(item.id)}
        onDelete={(id)=> {
            // console.log("gggggggggg",id,)
            // customers = customers.filter((e)=>{return e.id!==id})
            deleteSalary({id});
            doFetch();
            doRender(count+1)
          }}
        onEdit={(id)=>{
          let empsalary = getSalaryById(id);
          // console.log("ttttt",customer)
        //   navigation.navigate("AddCustomer",{...customer,isEdit:true,doFetch});
        }}
        onSelectMonth={(empId)=>{
            let empSalaryList = getSalaryListForEmp(empId);
            console.log("salary list:",empSalaryList);
        }}
        style={{ backgroundColor }}
        
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={{backgroundColor:'#47474d'}}>
    <View style={{display:'flex',borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:'#dddddc'}}>
    </View>
    <View style={{height:50,width:"100%"}}>
    <SelectDropdown
	data={monthList}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index,salaryList[0].monthYear);
      setMonthSalary(salaryList.filter((item)=>{
        console.log(";;;;;;;;",item.monthYear===selectedItem);
        return item.monthYear===selectedItem;}))
        console.log(monthSalary)

    doRender(count+1)
    
	}}
  buttonStyle={{backgroundColor:"lightgrey",width:"90%",alignSelf:"center",borderRadius:10}}
  // buttonTextStyle={{textShadowOffset:"10"}}
  dropdownStyle={{backgroundColor:"white",borderRadius:10}}
    defaultButtonText={"Select Month"}
	buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
	rowTextForSelection={(item, index) => {return item}}
/>
    </View>
      <View style={{height:'89%',overflowY:'scroll'}}>
      <FlatList
        data={monthSalary.length ? monthSalary : salaryList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId} 
      />  
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: StatusBar.currentHeight || 0
  },
  addBtn:{
    color:'red',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
},
title: {
    fontSize: 32,
  },
  email: {
    fontSize: 20,
  },
  phone: {
    fontSize: 18,

  },
  address:{
      fontSize:16,
      color:'blue',
    //   backgroundColor:'lightgrey'
  },
  city:{
      fontSize:16,
      color:'green',
    //   backgroundColor:'lightgrey'
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

export default EmployeeSalary;
