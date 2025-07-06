import { View , TextInput } from "react-native"
import { Button } from "react-native-web"
import {myStyle} from '../styles/myStyle.js'
import { useState } from "react"
export default function({insertData}) {
    const [name , setName] = useState("")
    const [age,setAge] = useState(25)
    return (
        <View>
            <TextInput
                style={myStyle.input}
                placeholder="insert your name"
                keyboardType="default"
                onChangeText={(value) => setName(value)}
            ></TextInput>
            <TextInput
                style={myStyle.input}
                placeholder="your age"
                keyboardType="number-pad"
                onChangeText={(value) => setAge(value)}
            ></TextInput>
            <Button title="add" onPress={() => insertData(name , age)}></Button>
        </View>
    )
}