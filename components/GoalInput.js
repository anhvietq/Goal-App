import { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

function GoalInput (props){
    const [enteredGoalText, setEnteredGoalText]= useState ('');
    function goalsInputHandler(enteredText){
        setEnteredGoalText(enteredText);
       }
       function addGoalHandler (){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
       }
    return(
    <Modal 
        animationType="slide"
        visible={props.visible}
        transparent={true} >
        <View   
        style={{
        height: '20%',
        marginTop: 'auto',
        backgroundColor:'#6c9d69'
    }}>
        <TextInput 
        style= {styles.textInput} 
        placeholder='Enter your goal here...'
        onChangeText={goalsInputHandler}
        value ={enteredGoalText}
        />
    <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler} color= "#feffe9" />
        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.onCancel} color ='black'/>
        </View>
      </View>
      </View>
    </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({ 
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#6c9d69',
       },

       textInput: {
        borderWidth: 2,
        borderColor: '#49592a',
        backgroundColor: "#e8ddb5",
        borderRadius: 6,
        width: '100%',
        padding: 16,
        color: '#120438',
       },
       buttonContainer: {
        marginTop: 16,
        flexDirection:'row',
        alignSelf: 'center'
       },
       button: {
        width: 100,
        marginHorizontal: 8
       }
});