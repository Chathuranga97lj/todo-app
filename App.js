import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import Task from './components/Task';

export default function App() {

  const [tasks, setTasks] = useState([
    {"task":"Get Up 4.00 a.m", "done":true, "id":"1"},
    {"task":"Study for A/L", "done":true, "id":"2"},
    {"task":"Sleep at 12.00 p.m", "done":true, "id":"3"}
  ])

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.content}>
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
