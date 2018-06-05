import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './app/components/Main';
import ChecklistsScreen from './app/components/Screens/ChecklistsScreen';
import TaskScreen from './app/components/Screens/TaskScreen';
import ListScreen from './app/components/Screens/ListScreen';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
    Main: Main ,
    Checklists: ChecklistsScreen,
    TaskScreen: TaskScreen,
    ListScreen: ListScreen
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
