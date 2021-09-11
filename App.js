

import * as React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login';

import Salary from './Components/salary/Salary';
import EmployeeSalary from './Components/salary/EmployeeSalary';
import EmployeeApp from './Components/EmployeeList';
import EditEmployee from './Components/EditEmployee';
import Leaves from './Components/leaves/Leaves';
import EmployeeLeaves from './Components/leaves/EmployeeLeaves';
import EditLeaves from './Components/leaves/EditLeaves';
import AddLeave from './Components/leaves/AddLeaves';
import EditSalary from './Components/salary/EditSalary';
import AddSalary from './Components/salary/AddSalary';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="Salary"
          component={Salary}
        />
         <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="Employee"
          component={EmployeeApp}
        />
         <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="EditEmployee"
          component={EditEmployee}
        />
         <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="EditLeaves"
          component={EditLeaves}
        />
         <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="EditSalary"
          component={EditSalary}
        />
         <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="AddLeave"
          component={AddLeave}
        />
         <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="AddSalary"
          component={AddSalary}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="EmployeeSalary"
          component={EmployeeSalary}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="Leaves"
          component={Leaves}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'white',
          }}
          name="EmployeeLeaves"
          component={EmployeeLeaves}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;

