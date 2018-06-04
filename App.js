import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './app/components/Main';
import ChecklistsScreen from './app/components/Screens/ChecklistsScreen';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
    Main: Main ,
    Checklists: ChecklistsScreen 
}
,{
    initialRouteName:'Main'
}
);

export default class App extends React.Component {
  render() {
    return (
        <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A23D1',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
