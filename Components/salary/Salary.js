import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from "react-native";
// import { deleteCustomer, getCustomerById, getCustomers } from "../services/CustomerAPI";
import { getSalary,getSalaryById,getSalaryBySearch,getSalaryListForEmp,updateSalary,deleteSalary, getSalaryInit} from "../../services/SalaryData";
import {getEmployeeById} from '../../services/EmployeeData';

let DATA = [];

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
            <View style={ {flex: 1,backgroundColor:"blue",height:40,alignContent:"space-around"}} >
              {/* <TouchableOpacity onPress={()=>{console.log("edit",item.id);
          onEdit(item.id);

              }}>
              <Image
              style={styles.tinyLogo}
              source={{
              uri: 'https://training.pyther.com/icons/edit.png?9',
              }}
              />
              </TouchableOpacity> */}
              <Button
              onPress={()=>{console.log("edit",item.id);
          onEdit(item.id);
        }} title="Edit"/>
            </View>

            <Button onPress={()=>{console.log("select month for employee id :",item.employeeId);
        onSelectMonth(item.employeeId);
        }} title="SL" />


            <View  style={{flex:1, height: 50}}>
              {/* <TouchableOpacity onPress={()=>{console.log("delete",item.id);
          onDelete(item.id);
              // console.log("ffffffff")
              // onDelete(item.id)
              }}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://training.pyther.com/icons/delete.png',
            }}
          />
                </TouchableOpacity> */}
          <Button  onPress={()=>{console.log("delete",item.id);
          onDelete(item.id);
        }} title="X"/>
            </View>
            </View>
        <View style={{flex:2,paddingVertical:5,paddingHorizontal:10,width:250,  height: "auto" ,backgroundColor:'lightblue',display:'flex',flexDirection:'column',borderRadius:10,backgroundColor:'#ddd'}} >
            <Text style={styles.email}>EmployeeId   : {item.employeeId}</Text>
            {/* <Text style={styles.phone}>Total-Salary  : {item.basic+item.lta+item.hra+item.variable+item.bonus+item.TDS+item.tax}</Text>
            <Text style={styles.address}>WorkingDays : {item.workingDaysInMonth}</Text> */}
            {/* <Text style={styles.city}>City        : {item.city}</Text> */}
        </View>
      </View>
  </TouchableOpacity>
);

const Salary = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  const [salary,setSalary]=useState([]);
  const [salaryInit,setSalaryInit] = useState([]);
  const navigation = useNavigation();
  const [fetch,setFetch] = useState(true);

//   const doFetch = async ()=>{
//     console.log("lllllllllllllllll..........Fetch........")
//     const data = await getCustomers();
//     console.log("pppp",data)
//     setCustomer(data);
  const doFetch = ()=>{
    console.log("lllllllllllllllll..........Fetch........")
    const salaryData = getSalary();
    const salaryInitData = getSalaryInit();
    console.log("pppp",salaryData)
    console.log("oooooo",salaryInitData)
    setSalary(salaryData);
    setSalaryInit(salaryInitData);

  }
  useEffect(()=>{
    doFetch();
  },[])
//   useEffect(async ()=>{
//     doFetch();
//   },[])
  const renderItem = ({ item }) => {
    console.log("in render//////////////////")
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
            // console.log("salary list:",empSalaryList);
            navigation.navigate("SingleSalary",props={empSalaryList})
        }}
        style={{ backgroundColor }}
        
      />
    //   <Item
    //     item={item}
    //     onPress={() => setSelectedId(item.id)}
    //     onDelete={async(id)=> {
    //         // console.log("gggggggggg",id,)
    //         // customers = customers.filter((e)=>{return e.id!==id})
    //         await deleteCustomer({id});
    //         doFetch();
    //         // console.log("new customers",customers)
            
    //         doRender(count+1)}}
    //     onEdit={async (id)=>{
    //       let customer = await getCustomerById(id);
    //       // console.log("ttttt",customer)
    //       navigation.navigate("AddCustomer",{...customer,isEdit:true,doFetch});
    //     }}
    //     style={{ backgroundColor }}
        
    //   />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={{backgroundColor:'#47474d'}}>
    <View style={{display:'flex',borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:'#dddddc'}}>
    </View>
      <View style={{height:'89%',overflowY:'scroll'}}>
      <FlatList
        data={salaryInit}
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

export default Salary;
