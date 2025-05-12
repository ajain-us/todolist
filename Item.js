import React from 'react';

import { View, Text, CheckBox, Button } from 'react-native';

export default function Item({task, indx, deleteTask, markTask}){
    return (<View>
        <Text> {task.text} </Text>
    </View>)
}