import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

export default function Item({task, deleteTask, markTask}){
    return (<View style={task.marked ? styles.row_fin : styles.row}>
        <Text style={task.marked ? styles.text_fin : styles.text}> {task.text} </Text>
        <Button title="✅" onPress={() => markTask(task.key)}/>
        <Button title="❌" onPress={() => deleteTask(task.key)}/>
    </View>)
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        width: 245
    },
    row_fin:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        width: 245,
        backgroundColor: 'lightgreen',
    },
    text: {
        width: 150, 
    },
    text_fin: {
        width: 150, 
        textDecorationLine: 'line-through'
    }
    
});