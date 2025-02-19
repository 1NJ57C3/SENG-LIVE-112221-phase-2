// 💡 Break Out Activity 1: Enable POST Request to json-server to add new Cards
//   ❗ Notable files:
//      - App.js

// 💡 Break Out Activity 2: Enable DELETE Request to json-server to remove Cards
//   ❗ Notable files:
//      - App.js
//      - CardList.js
//      - Card.js
//      - Button.js

// 💡 Break Out Activity 3: Enable PATCH Request to json-server to edit Cards
//   ❗ Notable files:
//      - App.js
//      - CardList.js
//      - Card.js
//      - Button.js

// useState Hook Import
import { useState, useEffect } from 'react';

// Import CSS Styles
import './App.css';

// Component Imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import CardList from './components/CardList';
import CardForm from './components/CardForm';

function App() {
  // Set "cards" state + setter function
  const [ cards, setCards ] = useState([]);
  
  // 🚧 Add states to manage POST (addCard), PATCH (update/editCard), and DELETE (removeCard)
  // ❗ Why is setting state necessary?
  const [ addCard, setAddCard ] = useState(false);
  const [ removeCard, setRemoveCard ] = useState(false);
  const [ editCard, setEditCard ] = useState(false);

  // This state serves as a re-render trigger
  const [ updateData, setUpdateData ] = useState(false);

  // ...
  // ...
  // ...

  // Use fetch to retrieve Cards from db.json and
  // set as our initial value for "cards"
  function loadCards() {
    fetch("http://localhost:3001/cards")
      .then(res => res.json())
      .then(data => {
        console.log("Data fetched!", data);
        setCards(data);
    });
  }

  useEffect(() => {
    console.log("Fetching data...");

    // Invoke "loadCards" via useEffect 
    loadCards(); 

  // ❗ What states will we need to add to our dependencies array and why?
  // }, [addCard, removeCard, editCard]);
  }, [updateData]);

  function handleAddCard(newCard) {

    // 🚧 Refactor handleAddCard() to handle POST

    fetch("http://localhost:3001/cards", {
      // method: "❓",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(❓)
      body: JSON.stringify(newCard)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        //  ❗ Remember to invoke loadCards() and toggle "addCard" state after successful fetch   
        // setAddCard(!addCard);
        setUpdateData(!updateData);
      })
      
      // Avoid direct state mutation by using the Spread Operator
      // const newCardsArray = [...cards, newCard]
      
      // Pass new array to "setState."
      // setCards(newCardsArray)
    }
  

  // 🚧 Add function to handle DELETE (handleRemoveCard)
  // ❗ Remember to invoke loadCards() and toggle "removeCard" state after successful fetch

  function handleRemoveCard(card) {
    //  fetch(`http://localhost:3001/cards/${❓}`, {
     fetch(`http://localhost:3001/cards/${card.id}`, {
      
      //  method: "❓",
       method: "DELETE",
       headers: {
         "Content-Type": "application/json"
     }
    }).then(
      // ❗ Remember to invoke loadCards() and toggle "addCard" state after successful fetch   
      // setRemoveCard(!removeCard);
      setUpdateData(!updateData)
    )};

  // 🚧 Add function to handle PATCH (handleEditCard)
  // ❗ Remember to invoke loadCards() and toggle "editCard" state after successful fetch

    function handleEditCard(card) {
      // fetch(`http://localhost:3001/cards/${❓}`, {
      fetch(`http://localhost:3001/cards/${card.id}`, {
        // method: "❓",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // liked: ❓
          liked: !card.liked
        })
      }).then(
          // ❗ Remember to invoke loadCards() and toggle "editCard" state after successful fetch   
          // setEditCard(!editCard);
          setUpdateData(!updateData)
      )};

  return (
    <div className="App">
      {/* NavBar Component */}
      <NavBar isLoggedIn/>

      {/* Header Component */}
      <Header 
        firstName="Louis" 
        lastName="Medina" 
      />

      <CardForm 
        handleAddCard={handleAddCard}
        cards={cards}
      />

      {/* CardList Component */}
      <CardList 
        cards={cards}
        
        // 🚧 Pass handleRemoveCard() and handleEditCard as props
        handleRemoveCard={handleRemoveCard}
        handleEditCard={handleEditCard}
      />
    </div>
  );
}

export default App; 