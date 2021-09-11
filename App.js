

import * as React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login';

import Salary from './Components/salary/Salary';
import EmployeeSalary from './Components/salary/EmployeeSalary';
import EmployeeApp from './Components/EmployeeList';
import EditEmployee from './Components/EditEmployee';

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
          name="EmployeeSalary"
          component={EmployeeSalary}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;

