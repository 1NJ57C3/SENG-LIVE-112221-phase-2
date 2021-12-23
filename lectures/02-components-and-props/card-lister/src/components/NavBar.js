function NavBar({ isLoggedIn }) {
    console.log(!!isLoggedIn)
    return (
        <nav className="nav">
            <h2 className="component-name">NavBar Component</h2>
            
            {/* ❗ your code here */}
            {/* {!!isLoggedIn === true ? <p>You're Logged In</p> : <p>You're Logged Out</p>} */}
            <p>You're Logged {isLoggedIn ? "In" : "Out"}</p>
        </nav>
    );
}

/* ❗ your code here */
export default NavBar;