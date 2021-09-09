import React, { useEffect, useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, Button,StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { getEmployees,deleteEmployee,updateEmployee, getEmployeeById } from "../services/EmployeeData";
import EditEmployee from "./EditEmployee";

const Item = ({ item, onPress, style, onDelete, onEdit}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{flex:8, height: 40, flexDirection: 'row'}} >
            <View style={{flex:7, height: 60}}>
                <Text style={styles.title}>{item.name}</Text>
            </View>

            <View style={ {flex: 1}} >
            <TouchableOpacity onPress={()=>{
              onSalary(item);
            }}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://training.pyther.com/icons/user.png?9',
            }}
          />
          </TouchableOpacity>
         </View>

            <View style={ {flex: 1}} >
            <TouchableOpacity onPress={()=>{
              onEdit(item);
            }}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://training.pyther.com/icons/edit.png?9',
            }}
          />
          </TouchableOpacity>
         </View>

            <View  style={{flex:1, height: 65}}>
            <TouchableOpacity onPress={()=>{
              onDelete(item.id);
              }}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://training.pyther.com/icons/delete.png',
            }}
          />
          </TouchableOpacity>
            </View>

        </View>
        <View style={{flex:2,  height: 30}} >
            <Text style={styles.email}>{item.email}</Text>
            {/* <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.dateOfBirth}>{item.dateOfBirth}</Text> */}

        </View>
      </View>
  </TouchableOpacity>
);

const EmployeeApp = ({navigation}) => {

  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  const [employees, setEmployees] = useState([]);
  //  const [employees, setEmployees] = useState(getEmployees());

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      loadEmployee();
    });
    return unsubscribe;
  },[navigation]);

  loadEmployee = async() => {
    let list = await getEmployees();
    setEmployees(list);
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "skyblue" : "Powderblue";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onDelete={(id)=>{
          deleteEmployee(id);
          loadEmployee();
          doRender(count+1);
        }}

        onEdit={(employee)=>{
          console.log("Employee....to....edit...", employee);
          navigation.navigate('EditEmployee', employee);

        }}

        onSalary={(employee)=>{
            //Implement Salary page.....
            navigation.navigate('SalaryEmployee', employee);
  
          }}

        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      </View>
      <FlatList
        data={employees}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

    {/* <Button 
          title="Add Employee"
          onPress={()=>{
            //updateAsyncData();
            navigation.navigate('AddEmployee', { name: "" });
          }}
          ></Button>  */}

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>{
            navigation.navigate('AddEmployee', { name: "" });
          }}>
              <Text style={styles.loginText}>Add Employee</Text>
        </TouchableHighlight>
    </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 30
  },
  title: {
    fontSize: 32,
    
  },
  email: {
    fontSize: 20,
    
  },
  address:{
      fontSize: 20,
      paddingBottom: 1
  },
  dateOfBirth:{
    fontSize: 15,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 200,
    borderRadius: 30,
    marginLeft:90
},
loginButton: {

},
loginText: {
    color: 'black',
}
});

export default EmployeeApp;
