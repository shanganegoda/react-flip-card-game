import React from 'react'
import Card from './components/Card/Card';
import './App.css'

let cardArray = new Array(8).fill(1);
// const wordsArray = ["Star" , "Flag" , "China" , "Red" , "Flag" ,  "Star" ,  "Red" , "China"]
const wordsArray = [
{
  word : "Star",
  found : false
},
{
  word : "Flag",
  found : false
},
{
  word : "China",
  found : false
},
{
  word : "Red",
  found : false
},
{
  word : "Flag",
  found : false
},
{
  word : "Star",
  found : false
},
{
  word : "Red",
  found : false
},
{
  word : "China",
  found : false
},
]
// let count = 0;

// cardArray.forEach((_, i) => {
//   count ++;
//   cardArray[i] = count;
// });

cardArray = [...wordsArray]

console.log(cardArray)

const handleClick = () => {
  
}

function App() {
  return (
    <div className='home'>
      <div className="cardlist">
        {cardArray.map((obj,i) => <Card key={i} word={obj.word} onClick={() => handleClick()}/>)}
      </div>
    </div>
  )
}

export default App
