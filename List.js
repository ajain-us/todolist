import React, { useState } from 'react';

import { View, TextInput, TouchableOpacity, StyleSheet, Text, FlatList, Alert} from 'react-native';

import Item from './Item';

export default function List(){
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    function addTask(){
        if (text === ''){
            Alert.alert("Provide a task", "Please enter a task before adding.");
            return;
        }
        const newTask = {key: Date.now(), text: text, marked: false};
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(remove){
        setTasks(tasks.filter((elem) => elem.key !== remove));
    }

    function markTask(change){
        setTasks(tasks.map((elem) => 
            elem.key === change ? {key: elem.key, text: elem.text, marked: (!elem.marked)} : elem));
    }

    return(
        <View>
            <View style={styles.top}>
                <TextInput value={text} onChangeText={setText} style={styles.input} /> 
                <TouchableOpacity style={styles.button} onPress={addTask}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                <Item task={item} deleteTask={deleteTask} markTask={markTask} />)}
                keyExtractor={(item) => item.key}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 8,
        marginRight: 8,
        marginBottom: 8,
        width: 200, 
        height: 40
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 4,
        height: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    top: {
        flexDirection: 'row',
        marginBottom: 20,
    }
});


