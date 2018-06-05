import React from 'react';
import {StyleSheet, View, Text, ScrollView, Button } from 'react-native';
export default class ListScreen extends React.Component {
          static navigationOptions = ({ navigation }) => {
              const pageTitle = navigation.getParam('list').title
            return {
              title: pageTitle
            };
          }


        render(){

            const { navigation } = this.props;
            const list = navigation.getParam('list')
            var tasks
            if (list.tasks) {
                 tasks = list.tasks.map((val, key) => {
                    return <Text style={styles.listScreenItem} key={key}>{val.text}</Text>  
                });
            }
            return (
            <View style={styles.listScreenContainer}>
                <Text style={styles.listHeader}>{list.title}</Text>    
                <ScrollView>
                { tasks }
                </ScrollView>
                <Button title='Edit' onPress={()=>{
                    alert("Transition to edit")
                }}></Button>
                <Button title='Play' onPress={() => {
                    alert("Transition to play")
                }}></Button>
                <Button title='Delete' onPress={() => {
                    alert("Delete list")
                }}></Button>
            </View>
            )
        }
}

const styles = {
    listScreenContainer:{
        flex: 1,
        padding: 40
    },
    listHeader: {
        fontSize: 30
    },
    listScreenItem: {}
}
