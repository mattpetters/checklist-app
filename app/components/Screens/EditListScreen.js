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
import ListItem from '../ListItem';

export default class EditListScreen extends React.Component {
          static navigationOptions = ({ navigation }) => {
              const pageTitle = navigation.getParam('list').title
            return {
              title: pageTitle
            };
          }
//     constructor(props){
//         super(props);
//         this.state = {
//             listItems: [],
//             newItemText: ''
//         };
//     }

//       addItem(){
//         if (this.state.newItemText){
//             var date = new Date();
//             this.state.listItems.push({
//                 'text':this.state.newItemText
//             });
//             this.setState({
//                 listItems: this.state.listItems,
//                 newItemText: ''
//             });
//         }
//       }

//     deleteItem(key) {
//         this.state.listItems.splice(key, 1)
//         this.setState({listItems: this.state.listItems})
//     }
  render() {
      let items = this.state.listItems.map((val, key) => {
            return <ListItem key={key} keyId={key} val={val} deleteItem={()=> this.deleteItem(key) }/> 
      });
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}> 
                {items}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput style={styles.input}
                            onChangeText={(text) => this.setState({newItemText: text})}
                            value={this.state.newItemText}
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

// const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         backgroundColor: '#5A23D1',
//       },
//     scrollContainer:{
//         flex: 1,
//         marginBottom: 100
//     },
//     footer: {
//         position: 'absolute',
//         bottom: 0,
//         right: 0,
//         left: 0,
//         zIndex: 10
//     },
//     input: {
//         alignSelf: 'stretch',
//         color: '#fff',
//         padding: 40,
//         backgroundColor: '#252525',
//         borderTopWidth: 2,
//         borderTopColor: '#5726bf'
//     },
//     addButton: {
//         position: 'absolute',
//         backgroundColor: '#E91E63',
//         zIndex: 11,
//         right: 20,
//         bottom: 90,
//         width: 90,
//         height: 90,
//         borderRadius: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         elevation: 8
    
//     },
//     addButtonText: {
//         fontSize: 24,
//         color: 'white'
//     }
// });

// import React from 'react';
// import {StyleSheet, View, Text, ScrollView, Button } from 'react-native';
// export default class EditListScreen extends React.Component {


//         render(){

//             const { navigation } = this.props;
//             const list = navigation.getParam('list')
//             var tasks
//             if (list.tasks) {
//                  tasks = list.tasks.map((val, key) => {
//                     return <Text style={styles.listScreenItem} key={key}>{val.text}</Text>  
//                 });
//             }
//             return (
//             <View style={styles.listScreenContainer}>
//                 <Text style={styles.listHeader}>{list.title}</Text>    
//                 <ScrollView>
//                 { tasks }
//                 </ScrollView>
//             </View>
//             )
//         }
// }

// const styles = {
//     listScreenContainer:{
//         flex: 1,
//         padding: 40
//     },
//     listHeader: {
//         fontSize: 30
//     },
//     listScreenItem: {}
// }
