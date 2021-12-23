function Card({ title, content="Default Value" }) {
    return (
        <div className="card">
            <h2 className="component-name">Card Component</h2>
            
            <h1>Title: {title}</h1>
            <p>Content: {content}</p>
        </div>
    );
}

/* ❗ your code here */
export default Card;