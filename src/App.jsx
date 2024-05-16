import React, { useRef, useState } from 'react'
import Card from './components/Card/Card';
import './App.css'



function App() {

  // const [wordsArray , setWordsArray] = useState(["Star","Flag","China","Red","Flag","Star","Red","China"]);

  const [wordsArray, setWordsArray] = useState(
    [
      {
        word: "Zero",
        flipped: false,
        matched: false
      },
      {
        word: "Star",
        flipped: false,
        matched: false
      },
      {
        word: "China",
        flipped: false,
        matched: false
      },
      {
        word: "Zero",
        flipped: false,
        matched: false
      },
      {
        word: "Red",
        flipped: false,
        matched: false
      },
      {
        word: "China",
        flipped: false,
        matched: false
      },
      {
        word: "Red",
        flipped: false,
        matched: false
      },
      {
        word: "Star",
        flipped: false,
        matched: false
      },
    ]);

  const [clicks, setClicks] = useState(0);

  const checkingArray = useRef([]);
  const matchedArray = useRef([]);
  const clickedIndex = useRef();

  const handleClick = (i, word) => {

    if (matchedArray.current.includes(word)) {
      console.log("already matched");
      return;
    }

    setClicks(currentClicks => {
      return currentClicks + 1;
    })

    if (clickedIndex.current === i) {
      console.log("clicked on same card");
      return
    }

    if (clickedIndex.current == null) {
      console.log(`prev index ${i} added`);
      clickedIndex.current = i;
    }

    console.log(clickedIndex.current)

    //Matched case
    if (checkingArray.current.includes(word)) {
      matchedArray.current.push(word);
      clickedIndex.current = null;
      checkingArray.current = []
    }
    //New click case
    else if (checkingArray.current.length == 0) {
      checkingArray.current.push(word);
    }

    setWordsArray((currentArray) => {
      const tempObj = { ...currentArray[i], flipped: !currentArray[i].flipped }
      const tempArray = [...currentArray.slice(0, i), tempObj, ...currentArray.slice(i + 1)]
      return tempArray;
    })

    //Unmatched Case
    if (!checkingArray.current.includes(word) && checkingArray.current.length) {
      const previousIndex = clickedIndex.current;
      // checkingArray.current.push(word);
      setTimeout(() => {
        setWordsArray((currentArray) => {
          // Flip back both the previous and the current cards
          const tempArray = currentArray.map((item, index) => {
            if (index === i || index === previousIndex) {
              return { ...item, flipped: false };
            }
            return item;
          });
          return tempArray;
        });
        clickedIndex.current = null;
        checkingArray.current = [];
      }, 1000);
    }
  }

  return (
    <div className='home'>
      <div className="score">
        <p className={{"color" : "white"}}>Clicks = {clicks}</p>
      </div>
      <div className="cardlist">
        {wordsArray.map((obj, i) =>
          <Card key={i} word={obj.word} flipped={obj.flipped} onClick={() => handleClick(i, obj.word)} />
        )}
      </div>

    </div>
  )
}

export default App
