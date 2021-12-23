// Accepts a Card object as a prop
import { useState } from 'react';

// Component Imports
import Button from './Button';

function Card({ title, content="Add Some Content Here"}) {
    // props = { title: "My Title" }
    // props.title => "My Title"

    // const [ STATE, SETTER FUNCTION ] = useState(INITIAL VALUE);

    const [isVisible, setVisibility] = useState(true);

    // Inverse Data Flow
    function toggleVisibility() {
        setVisibility(!isVisible);
            // stateSetter(!state);
            // add
            // more
            // scalable
            // behaviors
    }

    // Add isLiked State
    const [ isLiked, setLiked ] = useState(false);

    // Add isAdded State
    const [ isAdded, setAdded ] = useState(false);

    const ColoredLine = ({ color }) => (
        <hr style={{
                color: color,
                backgroundColor: color,
                height: 2,
                width: "10rem"
        }} />
    );

    return (
        <div className="card">
            { isVisible ? (
                <>
                    <h2 className="component-name">Card Component</h2>
                    <h1>{title}</h1>
                    <ColoredLine color="black" />
                    <p>{content}</p>
                </>
            ) : ( 
                <h2>Added to Cart</h2>
            )}

            {/* Break Out Activity #1: Modify the onClick behavior of our Add to Cart <button> 
            to render only an H2 element saying “Added to Cart” in place of Card details. */}

            {/* Break Out Activity #2: Create a <Button /> Component to enable each Button to 
            manage its own isToggled state. 💡 To configure each <Button />, try passing a “name” 
            prop from Card.js */}

            {/* { isLiked ? <p>Liked</p> : <p>Not Liked</p> } */}

            <Button
                name="cart"
                toggleVisibility={toggleVisibility}
            />
            <br />
            <Button
                name="like"
            />

            {/* <button onClick={() => setAdded(!isAdded)} className="button">
                { isAdded ? 'Remove From Cart' : 'Add To Cart' }
            </button>
            <br />
            <button onClick={() => setLiked(!isLiked)}className="button">{ isLiked ? '❤️' : '♡'}</button> */}
        </div>
    );
}

export default Card; 