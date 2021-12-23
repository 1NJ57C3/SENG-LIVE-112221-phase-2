// Breakout Activity #1: Add Necessary Callback Functions / JSX Attributes to Control All <input>s
    // Extra Credit: Create a state (formData) to manage all of our form data
    // Extra Credit: Create ONE callback function to manage the onChange behavior 
    // for any of our controlled inputs

// Breakout Activity #2: Dynamically display a list of Added Cards as we continue 
// to submit new Card entries.

// What hook will we need to use to manage states for CardForm?
    import { useState } from 'react';

    function CardForm({ handleAddCard, cards }){
            // Create states we will use to handle title and content
        // const [ title, setTitle ] = useState("")
        // const [ content, setContent ] = useState("")
            // Create callback functions to manage the onChange behavior for each of our controlled inputs
        
        // function manageTitle(event) {
        //     setTitle(event.target.value);
        // }

        // function manageContent(event) {
        //     setContent(event.target.value);
        // }

    // Extra Credit: Create a state (formData) to manage all of our form data
    const [ formData, setFormData ] = useState({
        title:'',
        content:''
        // someOtherInput: someOtherValue
    });
    

    // Extra Credit: Create ONE callback function (manageFormData) to manage the onChange 
    // behavior for any of our controlled inputs
    function manageFormData(event) {
        // Capture name and value from target of event
        const key = event.target.name;
        let value = event.target.value;

        setFormData({
            ...formData,

            // title: "New Title"
            // content: "New Content"
            [key]: value
        });

        // Update formData state with new form submission data
    }

    // Breakout Activity #2: Create a callback function to handle onSubmit behavior for our controlled form
    function handleSubmit(event) {
        console.log("handleSubmit fired");
        
        // Prevent default form submission behavior
        event.preventDefault();
        // Create newCard JS object with formData and generate
        // a unique ID for each new object
        const newCard = {
            // id
            id: cards.length + 1, /* Can be done above in setFormData without new const */
            // title
            title: formData.title,
            // content
            content: formData.content,
        }
        // Use handleAddCard from props to add the newCard JS object
        // to the existing array of Card objects (cards)
        handleAddCard(newCard) /* Can use {...formData} if using above alternative approach */
        // Clear out input values upon form submission using formDataSetter
        setFormData({
            title:'',
            content:''})
        // setFormData(emptyobject) - alternative approach?
    }
    

    return (
        <div>
            <h1> Add New Card</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title"
                    className="input"
                    onChange={manageFormData}
                    value={formData.title}
                />
                <input 
                    type="text" 
                    placeholder="Content" 
                    name="content"
                    className="input"
                    onChange={manageFormData}
                    value={formData.content}
                />

                <input 
                    type="submit" 
                    value="Submit"
                    className="input"
                />
            </form>

            {/* Check "title" and "content" states here */}
            <h2>{formData.title} | {formData.content}</h2>
        </div>
    );
}

export default CardForm;
