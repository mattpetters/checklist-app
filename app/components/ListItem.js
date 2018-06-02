import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';

export default class ListItem extends React.Component {
  render() {
    return (
        <View key={this.props.keyId} style={styles.listItem}> 
             <Text style={styles.itemText}> {this.props.value.date} </Text>
             <Text style={styles.itemText}> {this.props.value.text} </Text>
            <TouchableOpacity onPress={this.props.deleteItem} style={styles.deleteButton}>
                <Text style={styles.deleteItemText}>Delete</Text> 
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    listItem: {
        position:'relative',
        padding: 20,
        paddingRight: 100,
    },
    itemText: {
        paddingLeft: 20,
        borderLeftWidth: 10
    },
    deleteButton:{
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
