import React, { useState } from 'react';

import { View, TextInput, Button, StyleSheet} from 'react-native';

import Item from './Item';

export default function List(){
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    //const [indx, setIndx] = useState(-1);

    function addTask(){
        const newTask = {key: Date.now(), text: text, marked: false};
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(remove){
        setTasks(tasks.filter((elem) => elem.key !== remove));
    }

    function markTask(change){
        setTasks(tasks.map((elem) => 
            elem.id === change ? {key: elem.key, text: elem.text, marked: (!elem.marked)} : elem));
    }

    return(
        <View>
            <TextInput value={text} onChangeText={setText} style={styles.input} />
            <Button title="Add" onPress={addTask}/>
            {tasks.map((task) => (
                <Item task={task} indx={task.key} deleteTask={deleteTask} markTask={markTask}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8
    }
});


