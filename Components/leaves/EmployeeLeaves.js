import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
} from 'react-native';
import {getEmployeeById} from '../../services/EmployeeData';
import SelectDropdown from 'react-native-select-dropdown';
import {
  getLeaves,
  getLeavesById,
  deleteLeaves,
  updateLeaves,
  getLeavesListForEmp,
  getLeavesInit,
  getLeavesBySearch,
} from '../../services/LeavesData';

const Item = ({item, onPress, style, onDelete, onEdit}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, style, {borderRadius: 10}]}>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
      {/* {console.log("ggggg",item)} */}
      <View style={{flex: 8, height: 50, flexDirection: 'row'}}>
        <View style={{flex: 7, height: 50}}>
          <Text style={styles.title}>
            {getEmployeeById(item.employeeId).name}
          </Text>
        </View>
        <View style={{flex: 1, height: 40, alignContent: 'space-around'}}>
          <Button
            onPress={() => {
              console.log('edit', item.id);
              onEdit(item.id);
            }}
            color="purple"
            title="Edit"
          />
        </View>


        <View style={{flex: 1, height: 50}}>
          <Button
            onPress={() => {
              console.log('delete', item.id);
              onDelete(item.id);
            }}
            color="purple"
            title="X"
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          paddingVertical: 5,
          paddingHorizontal: 10,
          width: 250,
          height: 'auto',
          backgroundColor: 'lightblue',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 10,
          backgroundColor: '#ddd',
        }}>
        <Text style={styles.count}>Count             : {item.count}</Text>
        <Text style={styles.year}>Year                  : {item.year}</Text>
        <Text style={styles.date}>DateOfEntry     : {item.dateOfEntry}</Text>
        <Text style={styles.date}>DateOfModify  : {item.dateOfModify}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const EmployeeLeaves = props => {
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  //   const [salary,setSalary]=useState([]);
  //   const [salaryInit,setSalaryInit] = useState([]);
  const [employeeId, setEmployeeId]=useState('');
  const [leavesList, setLeavesList] = useState([]);
  const [yearLeaves, setYearLeaves] = useState([]);
  const [yearList, setYearList] = useState([]);
  const navigation = useNavigation();
//   const [fetch, setFetch] = useState(true);
//   const [isFetch,setIsFetch] = useState(props.route.params.isFetch);

//   const fetchedEmpId = props.route.params;
//   console.log("ooooooooo",fetchedEmpId);


const doFetch = () => {
    const fetchedEmpId = props.route.params;
    console.log("ooooooooo",fetchedEmpId);
    if (fetchedEmpId.employeeId) {
        setEmployeeId(fetchedEmpId.employeeId);
    }
    console.log("ooooooooo",employeeId);

    let empLeavesList = getLeavesListForEmp(employeeId ? employeeId : fetchedEmpId.employeeId);
    // const empLeavesList = props.route.params.empLeavesList;
    console.log('in leavesList :', empLeavesList);
    setLeavesList(empLeavesList);
    let tempYearList = [];
    empLeavesList.map(e => {
      if (!tempYearList.includes(e.year)) {
        tempYearList.push(e.year);
      }
    });
    console.log('monthlist :', tempYearList);
    setYearList(tempYearList);
  };
  useEffect(() => {
    doFetch();
  }, []);
  //   useEffect(async ()=>{
  //     doFetch();
  //   },[])
  const renderItem = ({item}) => {
    console.log('in render in single leaves //////////////////');
    const backgroundColor = item.id === selectedId ? 'lightgrey' : 'white';
    return (
      <Item
        item={item}
        // item={check(item)}
        onPress={() => setSelectedId(item.id)}
        onDelete={id => {
        //   console.log("gggggggggg",id,)
          // customers = customers.filter((e)=>{return e.id!==id})
          deleteLeaves({id});
          doFetch();
          doRender(count + 1);
        }}
        onEdit={id => {
          let empLeaves = getLeavesById(id);
          console.log("ttttt",empLeaves);
            navigation.navigate("EditLeaves",{...empLeaves,doFetch});
        }}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: 'rgb(174, 135, 196)'}}>
        <View
          style={{
            display: 'flex',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#dddddc',
          }}></View>
        <View style={{height: 50, width: '50%',display:"flex",flexDirection:"row",marginVertical:10,justifyContent:"space-between"}}>
          <View style={{width:"90%",marginLeft:10}}>
          <SelectDropdown
            data={yearList}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index, leavesList[0].year);
              setYearLeaves(
                leavesList.filter(item => {
                  console.log(';;;;;;;;', item.year === selectedItem);
                  return item.year === selectedItem;
                }),
              );
              console.log(yearLeaves);

              doRender(count + 1);
            }}
            buttonStyle={{
              backgroundColor: 'lightgrey',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 10,
            }}
            buttonTextStyle={{color:"purple"}}
            dropdownStyle={{backgroundColor: 'white', borderRadius: 10}}
            defaultButtonText={'Select Year'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          </View>
          <View style={{backgroundColor:"skyblue",width:"90%",justifyContent:"center",marginLeft:10,borderRadius:10}} >
                <Button color="purple" onPress={()=>{
                    console.log("employeeId......... ",employeeId);
                    navigation.navigate('AddLeave',{employeeId:employeeId,doFetch,setEmployeeId})}} title="Add Leave" />
            </View>
        </View>
        <View style={{height: '89%', overflowY: 'scroll'}}>
          <FlatList
            data={yearLeaves.length ? yearLeaves : leavesList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
    marginTop: StatusBar.currentHeight || 0,
  },
  addBtn: {
    color: 'red',
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
  count: {
    fontSize: 18,
    color: 'purple',
  },
  year: {
    fontSize: 16,
    color: 'purple',
    //   backgroundColor:'lightgrey'
  },
  date: {
    fontSize: 16,
    color: 'purple',
    //   backgroundColor:'lightgrey'
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

export default EmployeeLeaves;
