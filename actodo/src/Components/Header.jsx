function Header(props) {
    return (
      <div>
        <h1 className="text-3xl font-medium">Vankkam {props.username}!</h1> {/* Display the username */}
        <p>I help you to manage your activities :)</p>
      </div>
    );
  }
  
  export default Header;
  