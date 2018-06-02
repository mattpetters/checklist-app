import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import ListItem from './ListItem';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listItems: [],
            newItemText: ''
        };
    }

      addItem(){
        alert("Testing add item");
        if (this.state.newItemText){
            var date = new Date();
            this.state.listItems.push({
                'date':date.getFullYear()
            })
        }
      }
  render() {
      let items = this.state.listItems.map((val, key) => {
            return <ListItem key={key} keyId={key} val={val} deleteItem={()=> this.deleteItem(key) }/> 
      });
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Checkoff</Text>
            </View>
            <ScrollView style={styles.scrollContainer}> </ScrollView>
            <View style={styles.footer}>
                <TextInput style={styles.input}
                            onChangeText={(text) => this.setState({itemText: text})}
                            value={this.state.itemText}
                            placeholder='> Enter Item' 
                            placeholderTextColor='white'
        />
            </View>
            <TouchableOpacity onPress={this.addItem.bind(this)} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text> 
            </TouchableOpacity>
        </View>
    );

  }

}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#5A23D1',
      },
    headerText: {
        color: 'white',
        fontSize:18,
        padding:40,
    },
    header: {
        backgroundColor:'#834ef4',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#5726bf'
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
