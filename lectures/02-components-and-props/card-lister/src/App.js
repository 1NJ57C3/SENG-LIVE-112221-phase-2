import './App.css';

// Card Data Import
// ❗ your code here
import cards from "./cards";

// Child Component Imports
// ❗ your code here
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  console.log(cards);
  return (
    <div className="App">
      
      {/* Replace h1 with Component JSX */}
      {/* <h1>NavBar Component</h1> */}
      <NavBar isLoggedIn />
      
      {/* Replace h1 with Component JSX */}
      {/* <h1>Header Component</h1> */}
      <Header
      // {firstName: 'First', lastName: 'Last'}
        firstName='First'
        lastName='Last'
      />

      {/* Replace h1 with Component JSX */}
      {/* <h1>CardList Component</h1> */}
      <CardList cards={cards} />

      {/* Replace h2s with Component JSX */}
      {/* <h2>CardList Component</h2>
      <h2>CardList Component</h2>
      <h2>CardList Component</h2> */}
    </div>
  );
}

export default App;