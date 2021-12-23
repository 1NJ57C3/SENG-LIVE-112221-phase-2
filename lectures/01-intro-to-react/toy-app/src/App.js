// import logo from './logo.svg';
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

// function Header() {
//   return (
//     <h1>Hello!</h1>
//   );
// }

const toys = [
  {
    id: 1,
    name: "Woody",
    image:
      "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101036512835",
    likes: 33
  },
  {
    id: 2,
    name: "Buzz Lightyear",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6326/6326855_sd.jpg",
    likes: 14
  },
  {
    id: 3,
    name: "Mr. Potato Head",
    image:
      "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
    likes: 3
  },
  {
    id: 4,
    name: "Slinky Dog",
    image: "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
    likes: 4
  },
  {
    id: 5,
    name: "Rex",
    image:
      "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047622890",
    likes: 1
  },
  {
    id: 6,
    name: "Bo Peep",
    image:
      "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
    likes: 2
  },
  {
    id: 7,
    name: "Hamm",
    image: "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
    likes: 0
  },
  {
    id: 8,
    name: "Little Green Men",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-s1q5sn_ecb74152.jpeg?region=0,0,450,450",
    likes: -2
  }
];

// function doCalculation() {
  // perform a task, return data
// }

// ToyCard Component
function ToyCard ({ toy }) {  /* Props can be bypassed using deconstruction */  /* function ToyCard(props) { */  /* syntax = props.REFERENCE.key */ 
  // props => properties
  // props => JS Object

  return (
    <>
      <h1>{toy.name}</h1> {/* <h1>{props.toy.name}</h1> */}
      <p>Likes: {toy.likes}</p> {/* <p>Likes: {props.toy.likes}</p> */}
      <img src={toy.image} alt={toy.Name} /> {/* <img src={props.toy.image} alt={props.toy.Name} /> */}
    </>
  );
}

function App() {
  return (
    <div className = "App">
      
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
            value=""
            placeholder="Enter a toy's name..."
            className="input-text"
          />

          {/* Input Component */}
          {/* <Input /> */}
          <br />
          <input
            type="text"
            name="image"
            value=""
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

      {/* style ={{marginRight: spacing + 'em'}} */}
      
      {/* Stylistic Component */}
      <p style={{textAlign: 'center'}} /* HTML: "text-align:center" */ >
        Andy needs your help! <button id="new-toy-btn">Add a new toy!</button>
      </p>

      {/* Toy Collection Component */}
      <div id="toy-collection">
        
        {/* Map over Array of Toy Objects */}
        {toys.map(toy => { // For each toy (param) in toy array...
                
          // For each Toy object, create a ToyCard Component and pass the Toy object as a prop "toy" through.
          return (
            // <ToyCard key={1} [refKey]={first Toy object} />
            <ToyCard key={toy.id} toy={toy} /> // Pass toy object through as props object
          );
        })}
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }