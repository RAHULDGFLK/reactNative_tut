import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';


export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    // console.log("DEL");
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  const startAddGoalHandler = () => {
    setModalVisibility(true);
  }

  const endAddGoalHandler = () => {
    setModalVisibility(false);
  }


  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title="ADD new Goal" color="#5DA7DB" onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} visible={modalVisibility} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={(courseGoals)}
            renderItem={(itemData) => {
              return (
                <GoalItem text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler} />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  goalsContainer: {
    flex: 3,
  },

});
