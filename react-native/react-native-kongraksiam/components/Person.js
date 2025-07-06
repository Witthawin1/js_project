import {View , Text , TouchableOpacity} from 'react-native'
import {myStyle} from '../styles/myStyle.js'
import {MaterialIcons} from "@expo/vector-icons"

export default function Person(props){ 

    const {id , name , age , deleteData} = props
    return (
        <TouchableOpacity onPress={() => {
            console.log("กำลังลบ ID:", id); 
            deleteData(id); 
        }}>
        <View style={myStyle.content}>
            <Text style={[{fontSize:20}, myStyle.header]}>User data | name : {name} , age : {age}</Text>
            <MaterialIcons name='delete' size={30}></MaterialIcons>
        </View>
        </TouchableOpacity>
    )
}