import {AsyncStorage} from 'react-native';

export default class Repository {
    saveList(list) {
        try {
            await AsyncStorage.setItem(list.id, list)
        } catch (err) {
            alert("An error occurred while saving") 
            alert(err)
        }
    }
    getList(id) {
            try {
  const value = await AsyncStorage.getItem(id);
      if (value !== null){
        // We have data!!
          return value
      }
    } catch (error) {
      // Error retrieving data
    }
    }
}
