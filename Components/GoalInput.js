import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';


const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        // console.log(enteredText);
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }


    return (
        <>
            <Modal visible={props.visible} animationType="slide">
                <View style={styles.inputContainer}>

                    <Image style={styles.image} source={require("../assets/Images/splash.png")} />

                    <TextInput style={styles.textInput} placeholder="your today's tasks"
                        onChangeText={goalInputHandler} value={enteredGoalText} />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Add Goal" onPress={addGoalHandler} color="#5DA7DB" />
                        </View>
                        <View style={styles.button}>
                            <Button title="cancel" color="#DD5353" onPress={props.onCancel} />
                        </View>
                    </View>

                </View>
            </Modal>
        </>
    )
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#002E94",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 400,
        height: 200,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e6f3ff",
        borderRadius: 10,
        color: "#120438",
        paddingVertical: 5,
        fontSize: 28,
        width: "100%",
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        marginTop: 20,
        width: "30%",
        marginHorizontal: 8,
    }
})