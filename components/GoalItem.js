import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem (props){
    return (
    <Pressable 
    onPress={props.onDeleteItem.bind(this, props.id)}
    style={({pressed})=>pressed && styles.pressedItem } //&& means true
    >
    <View 
    style={styles.goalItem}>
        <Text style ={styles.goalText}>{props.text}</Text>
    </View>
    </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
    margin: 8,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#e8ddb5',
    color: 'white',
    fontSize: '30',
   
   },
   pressedItem: {
    opacity: 0.5,
   },
   goalText: {
    color: '#60945d',
    fontSize: 16
   }});