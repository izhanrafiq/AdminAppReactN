import React, { useEffect, useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, Button,StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import {getAttendances, getAttendanceByEmployeeId} from "../services/Employee-gql";

const Item = ({ item, onPress, style, onDelete}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{flex:8, height: 40, flexDirection: 'row'}} >
          
            <View style={{flex:5, height: 60}}>
                <Text style={styles.title}>Employee ID: {item.employeeId}</Text>
            </View>

            {/* <View  style={{flex:1, height: 65}}>
            <TouchableOpacity onPress={()=>{
              onDelete(item.id);
              }}>
            <Image
            style={styles.tinyLogo}
            source={require('../public/images/delete.png')}
          />
          </TouchableOpacity>
            </View> */}
          </View>

        <View style={{flex:2,  height: 15}} >
            <Text style={styles.date}>Date: {item.date}</Text>
        </View>

      </View>
  </TouchableOpacity>
);

let AttendancePage = (props) => {
// console.log("##########",props);
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  const [attendances, setAttendances] = useState([]);
  const [id, setId] = useState('');

  useEffect(()=>{
 //   console.log("Inside useeffect...",props.route.params);
      loadAttendance(props.route.params.id);
  },[]);

  loadAttendance = async(eid) => {
    let list = await getAttendanceByEmployeeId(eid);
    setId(eid);
    setAttendances(list);
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "violet" : "skyblue";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        
        onDelete={(id)=>{
          deleteAttendance(id);
          loadAttendance(props.route.params.id);
          doRender(count+1);
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
        data={attendances}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>{
            props.navigation.navigate('AddAttendance', {employeeId: id});
          }}>
              <Text style={styles.loginText}>Add Attendance</Text>
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
    fontSize: 25,
  },
  date:{
      fontSize: 15,
      paddingBottom: 1
  },
  tinyLogo: {
    width: 25,
    height: 25,
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

export default AttendancePage;
