import { useState } from 'react';
import { StyleSheet, 
        View, 
        FlatList,
        Button,
        Text,
        Image
      } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
const [modalIsVisible, setModalIsVisible]=useState(false);
 const [courseGoals, setCourseGoals] = useState([]);
 
 function startAddGoalHandler(){
  setModalIsVisible(true);
 }
 function endAddGoalHandler(){
  setModalIsVisible(false);
 }

  function addGoalHandler (enteredGoalText){
    setCourseGoals(currentCourseGoals => [
      ...courseGoals, 
      {text:enteredGoalText, id: Math.random().toString()}, 
    ]); //a string
    setModalIsVisible(false);
    //or endAddGoalHandler(); would work the same way 
  }
  
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style= {styles.appContainer}>
      <Image style={styles.image} 
        source={require('./assets/images/goal1.png')}/>
      <Text style={styles.textheader}> Your Goal List: </Text>
      <Button
        title ='Add New Goal' 
        color="#feffe9"
      onPress ={startAddGoalHandler} 
    />
    <GoalInput visible ={modalIsVisible} 
    onAddGoal={addGoalHandler}
    onCancel={endAddGoalHandler}
    />
      <View style ={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={(itemData)=>{
          return ( <GoalItem 
          text = {itemData.item.text} 
          id = {itemData.item.id}
          onDeleteItem ={deleteGoalHandler} />
          );
        }} 
        keyExtractor={(item, index)=>{
          return item.id;
        }}
        alwaysBounceVertical={false}/>
    </View>
  </View>
  </>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16,
  backgroundColor: '#60945d'
 },
 image:{
  width: 200,
  height: 200,
  margin: 20,
  alignSelf: 'center'
 },
 textheader:{
  fontSize: 18,
  fontWeight: '700',
  color: '#feffe9'
 },
 button: {
 fontWeight: '200' 
 },
 goalsContainer:{
  flex: 5,
 },
 
});
