import logo from './logo.svg';
import './App.css';

// DRY => Don't Repeat Yourself
// SPA => Single Page Application

/* 
    - Break Out Activity #1: Take HTML from Toy Tales lab (Lines 9 - 48) and turn it into JSX
        - https://github.com/learn-co-curriculum/phase-1-challenge-toy-tale/blob/master/index.html
        - What needs to change? What's the same?
        - Refactor HTML into separate components

    - Break Out Activity #2: Implement a ToyCard Component
        - Start by hard-coding the JSX in your App component return statement
        - Use props to make your component reusable
        - Copy/paste data from the "toys.js" file as props and iterate over Toy objects
          to create a ToyCard component for each
        - BONUS: Try importing and storing data from the "toys.js" file
*/

function Header() {
  return(
    <h1>Hello!</h1>
  );
}

function App() {
  return (
    <div className="App">
      
      {/* Header Component */}
      {/* <Header /> */}
      {/* Header.js */}
      <div id="toy-header">
        <img
          src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
          alt="toy-header"
        />
      </div>

      {/* Container Component */}
      <div className="container">
        
        {/* AddToyForm Component */}
        <form className="add-toy-form">
          <h3>Create a toy!</h3>

          {/* Input Component */}
          {/* <Input /> */}
          <input
            type="text"
            name="name"
            // value=""
            placeholder="Enter a toy's name..."
            className="input-text"
          />
          <br />
         
          {/* Input Component */}
          {/* <Input /> */}
          <input
            type="text"
            name="image"
            // value=""
            placeholder="Enter a toy's image URL..."
            className="input-text"
          />
          <br />
          
          {/* Input Component */}
          {/* <Input /> */}
          <input
            type="submit"
            name="submit"
            value="Create Toy"
            className="submit"
          />
        </form>
      </div>
      
      {/* style={{marginRight: spacing + 'em'}} */}
      
      {/* Stylistic Component */}
      <p style={{textAlign: "center"}}>
        Andy needs your help! <button id="new-toy-btn">Add a new toy!</button>
      </p>

      {/* ToyCollection Component */}
      <div id="toy-collection"></div>
    </div>
  );
}

export default App;
