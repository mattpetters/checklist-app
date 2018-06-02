import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default class ListItem extends React.Component {
  render() {
    return (
        <View key={this.props.keyId} style={styles.listItem}> 
             <Text style={styles.itemText}> {this.props.val.date} </Text>
             <Text style={styles.itemText}> {this.props.val.text} </Text>
            <TouchableOpacity onPress={this.props.deleteItem} style={styles.deleteButton}>
                <Text style={styles.deleteItemText}>Delete</Text> 
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'white',
        position:'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 5,
        borderBottomColor: 'gray'
    },
    itemText: {
        paddingLeft: 20,
        borderLeftWidth: 10
    },
    deleteButton:{
        backgroundColor:'gray',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    deleteItemText: {
        color: 'white'
    }
});
