import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import EmployeeApp from './EmployeeList';
import Salary from './salary/Salary';
import { useNavigation } from '@react-navigation/core';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const Nav = (props) => {
    React.useEffect(()=>{
        },[]);

    
  const [index, setIndex] = React.useState(0);
  const [render,setRender]=React.useState(0);
  const [routes] = React.useState([
    { key: 'albums', title: 'Employee', icon:require('../public/images/emp.png')},
      { key: 'salary', title: 'Salary',     icon:require('../public/images/money.png')},
  ]);

  renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case 'salary':
      return <Salary jumpTo={jumpTo} />;
    case 'albums':
      return <EmployeeApp jumpTo={jumpTo} />;
  }
}

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
    />
  );
};

export default Nav;
