/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import { getEmployees } from './services/EmployeeData';
 import { getSalary } from './services/SalaryData';
 import { getLeaves } from './services/LeavesData';
 
 
 function App() {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       
         <View
           style={{
             backgroundColor:"red",height:100
           }}>
             <Text>ddddddd</Text>
             <View style={{display:"flex",flexDirection:"row"}}>
             <Button title="getemployee" onPress={()=>{console.log("employeedata :",getEmployees())}} style={{backgroundColor:"white"}} />
             <Button title="getsalary" onPress={()=>{console.log("salary :",getSalary())}} style={{backgroundColor:"white"}} />
             <Button title="getleaves" onPress={()=>{console.log("leaves :",getLeaves())}} style={{backgroundColor:"white"}} />
             </View>
         </View>
 
         </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 