import Header from "./components/Header.jsx";
import { IconA, IconB } from "./components/Icon.jsx";
import Image from "./components/Image.jsx";
import Checkbox from "./components/Checkbox.jsx";
import { useState } from "react";
import Video from './components/Video.jsx'

function App() {

  const [counter,setCounter] = useState(0)
  const [isPlaying , setIsPlaying] = useState(false)

  const todoList = [
    {
      text:"Hello" ,
      isChecked:true
    },
        {
      text:"Flower" ,
      isChecked:false
    },
        {
      text:"Hi" ,
      isChecked:true
    }
  ]

  function buttonClick(){
    setCounter(counter+1)
  }

  function triggerPlayer(){
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <div>
        Now counter is {counter}
        <button onClick={buttonClick}>Add counter</button>
      </div>
      <Video
        src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}
        isPlaying={isPlaying}
    
      />
      {todoList.map((todo , index) => {
        return (
          <Checkbox
            key={index}
            text={todo.text}
            isChecked={todo.isChecked}
          />
        )
      })}

      <button onClick={triggerPlayer}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default App;
