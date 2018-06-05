import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './app/components/Main';
import ChecklistsScreen from './app/components/Screens/ChecklistsScreen';
import TaskScreen from './app/components/Screens/TaskScreen';
import ListScreen from './app/components/Screens/ListScreen';
import { createStackNavigator } from 'react-navigation';
import colors from './app/util/colors';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './app/data/checklists';

const RootStack = createStackNavigator({
    Main: Main ,
    Checklists: ChecklistsScreen,
    TaskScreen: TaskScreen,
    ListScreen: ListScreen
}
,{
    initialRouteName:'Main',
     navigationOptions: {
        title: 'Checkoff',
      headerStyle: {
        backgroundColor: colors.appHeaderColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
}
);

const store = createStore(reducer);


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <RootStack />
        </Provider>
    );
  }
}
