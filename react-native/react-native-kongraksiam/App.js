import { View, Text, Image , ScrollView , Button, Alert , FlatList} from "react-native";
const logo = require("./assets/icon.png");
import { myStyle } from "./styles/myStyle.js";
import {useState} from 'react'
import Person from "./components/Person.js";
import AddForm from "./components/AddForm.js";

export default function App() {
  const [developer , setDeveloper] = useState({name : "Admin" , year : 2020})
  const [data,setData] = useState([
    {id : 1 , name : "kong" , age : 30},
       {id : 2 , name : "ko" , age : 10},
          {id : 3 , name : "ng" , age : 20}
  ])

  const deleteData = (id) => {
    setData((prevData) => {
      return prevData.filter((item) => item.id != id)
    })
  }

  const insertData = (name, age) => {
    if (name) {
      setData((prevData)=> {
        return [
          {id:Math.random().toString(),name,age},
          ...prevData
        ]
      })
    }else{
      Alert.alert('plese insert your name')
    }
  }
  
  return (
    <View style={myStyle.container}>
      <ScrollView>
      <Image source={logo} style={myStyle.image}></Image>
      <Image source={logo} style={myStyle.image}></Image>
      <Text style={myStyle.header}>Hello react-native</Text>
      <Text style={myStyle.content}>builder : {developer.name} | {developer.year}</Text>

      {/* <Person name={"Kong"} age={30}></Person>
      <Person name={"Win"} age={20}></Person>
      <Person name={"Chalee"} age={18}></Person> */}
      <FlatList 
      data={data}
      renderItem={({item}) => (
        <Person  id={item.id} name={item.name} age={item.age} deleteData = {deleteData}></Person>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text style={{alignSelf:"center", fontSize:30 , fontWeight:'bold'}}>user data</Text>}
      ListEmptyComponent={<Text style={{alignSelf:"center", fontSize:30 , fontWeight:'bold'}}>no data</Text>}
      >
      </FlatList>
      <AddForm insertData={insertData}></AddForm>


      <Text style={myStyle.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text style={myStyle.content}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Text>
      <Button title="update" color="red"
      onPress={() => setDeveloper({name: "Witthawin" , year:2025})}
      ></Button>
      </ScrollView>

      {/* <View style={{width:80 , height:80 , backgroundColor:"blue" , alignSelf:'center'}}></View>
      <View style={{width:80 , height:80 , backgroundColor:"yellow"}}></View>
      <View style={{width:80 , height:80 , backgroundColor:"green"}}></View> */}
    </View>
  );
}
