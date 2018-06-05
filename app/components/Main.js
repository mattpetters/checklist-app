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
import ChecklistItem from './ChecklistItem';
import AppHeader from './AppHeader';
import colors from '../util/colors';
import { connect } from 'react-redux';
import * as checklistActions from '../data/checklists';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checklists: [] 
        };
    }

    componentDidMount(){
        if (this.props.checklists) {
            this.setState({checklists: this.props.checklists})
        }
    }

    deleteItem(key) {
        this.state.listItems.splice(key, 1)
        this.setState({listItems: this.state.listItems})
    }
  render() {
      let lists = this.props.checklists.map((val, key) => {
            return <ChecklistItem key={key} keyId={key} val={val} onPress={
                () => {
                    this.props.navigation.navigate('ListScreen', {'list':val})
                }
            } /> 
      });
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}> 
                {lists}
            </ScrollView>
            <Button title="Add a List" onPress={this.props.onAddListPress}></Button>
        </View>
    );

  }

}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.bgColor,
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

const mapStateToProps = state => {
  return {
    checklists: state.checklists
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onAddListPress: () => {dispatch(checklistActions.createChecklist())}  
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
