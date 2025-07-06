import { StyleSheet } from "react-native";

const myStyle = StyleSheet.create({
  container : {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
  header: {
    fontSize:20,
    fontWeight: 'bold'
  },
  content:{
    backgroundColor:'orange',
    padding : 25,
    marginTop : 10,
    borderWidth : 2,
    borderColor : 'black',
    borderStyle : 'dashed',
    borderRadius : 10
  },
  image: {
    width : 300 , 
    height : 300
  },
  input : {
     borderBottomColor : '#ddd',
     borderBottomWidth : 1,
     paddingHorizontal : 8,
     paddingVertical : 6,
     marginBottom : 10
  },

})



export {myStyle};