import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const EmployeeRoute = () => <Text>Employee</Text>;

const SalarysRoute = () => <Text>Salary</Text>;

const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'employee', title: 'Employee', icon: 'album' },
    { key: 'salary', title: 'Salary', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    employee: EmployeeRoute,
    salarys: SalarysRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigation;
