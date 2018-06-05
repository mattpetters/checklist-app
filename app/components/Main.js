import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    TextInput,
    Button,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import ListItem from './ListItem';
import AppHeader from './AppHeader';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checklists: [
                {text: "test 1"},
                {text: "test 2"},
                {text: "test 3"},
                {text: "test 4"},
                {text: "test 5"},
                {text: "test 6"}
            ],
        };
    }

      addItem(){
        if (this.state.newItemText){
            var date = new Date();
            this.state.listItems.push({
                'text':this.state.newItemText
            });
            this.setState({
                listItems: this.state.listItems,
                newItemText: ''
            });
        }
      }

    deleteItem(key) {
        this.state.listItems.splice(key, 1)
        this.setState({listItems: this.state.listItems})
    }
  render() {
      let lists = this.state.checklists.map((val, key) => {
            return <ListItem key={key} keyId={key} val={val}/> 
      });
    return (
        <View style={styles.container}>
            <AppHeader />
            <ScrollView style={styles.scrollContainer}> 
                {lists}
            </ScrollView>
        </View>
    );

  }

}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#5A23D1',
      },
    scrollContainer:{
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 10
    },
    input: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 40,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#5726bf'
    },
    addButton: {
        position: 'absolute',
        backgroundColor: '#E91E63',
        zIndex: 11,
        right: 20,
        bottom: 90,
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    
    },
    addButtonText: {
        fontSize: 24,
        color: 'white'
    }
});
