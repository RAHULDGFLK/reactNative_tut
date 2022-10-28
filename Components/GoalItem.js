import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = (props) => {

    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}
            style={({ pressed }) => pressed && styles.pressedItem} >
            <View style={styles.goalItem}>
                <Text>{props.text}</Text>
            </View>
        </Pressable >
    )
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 5,
        backgroundColor: "#7DE5ED",
        paddingVertical: 10,
        paddingStart: 20,
        borderRadius: 10,
        fontSize: 20,
    },
    pressedItem: {
        opacity: 0.5,
    },
})