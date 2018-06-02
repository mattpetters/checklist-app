import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './app/components/Main';

export default class App extends React.Component {
  render() {
    return (
        <Main />
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
