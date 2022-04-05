import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
import 'react-native-get-random-values'; // npm i react-native-get-random-values
import { v4 as uuidv4 } from 'uuid'; // befor import install >> npm i uuid

export default function App() {

  const [tasks, setTasks] = useState([
    {"task":"Get Up 4.00 a.m", "done":true, "id":"1"},
    {"task":"Study for A/L", "done":true, "id":"2"},
    {"task":"Sleep at 12.00 p.m", "done":true, "id":"3"}
  ])
 
 // npm i uuid << install that 
  const addTask = (text) => {
    if(!text){
      Alert.alert("Please add a Task")
    }else{
      setTasks(prevTasks => {
        return [{task:text, id:uuidv4()}, ...prevTasks]
      })
    }   
  } 

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTask addTask={addTask}/>
          <View style={styles.list}>
            <FlatList
              data = {tasks}
              renderItem = {({item}) => (
                <Task item={item} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>          
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding: 30
  },
  list: {
    marginTop: 30
  }
});
