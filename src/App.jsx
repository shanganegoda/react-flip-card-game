import React, { useState } from 'react'
import Card from './components/Card/Card';
import './App.css'



function App() {

const [wordsArray , setWordsArray] = useState(["Star","Flag","China","Red","Flag","Star","Red","China"]);

const handleClick = i => {
  console.log("clickedS")
  setWordsArray((currentArray) => {
    const obj = {...currentArray[i] , flipped : true }
    const tempArray = currentArray.filter((_,index) => index != i)
    console.log(tempArray)
    return currentArray
  })
  // wordsArray[index].flipped =  !wordsArray[index].flipped
}

console.log(wordsArray)

  return (
    <div className='home'>
      <div className="cardlist">
        {wordsArray.map((obj,i) => <div key={i} onClick={() => handleClick(i)}>
          <p>{obj.flipped ? "sds" : "ASdas"}</p>
          <Card  word={obj.word} flipped={obj.flipped} />
          </div>)
          }
      </div>
    </div>
  )
}

export default App
