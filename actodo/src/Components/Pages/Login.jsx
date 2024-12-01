import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login(props) {

const Users=props.Users
const setusers=props.setusers

const navigate=useNavigate()
  const [eUsername, SeteUsername] = useState("");
  const [ePassword, SetePassword] = useState("");
  const [ruser, SetRuser] = useState(true);

  const users=props.users;


  
  function checkUser() {
    var userfound = false; // Reset the value before checking
    users.forEach(function (item) {
      if (item.username === eUsername && item.password === ePassword) {
        console.log("success");
        userfound = true;
        navigate("/landing", { state: { user: eUsername } }); // Fixed path
      }
    });
  
    if (userfound === false) {
      console.log("failed");
      SetRuser(false);
    }
  }
  
 
  function handleUInput(evt) {
    SeteUsername(evt.target.value);
  }


  function handlePInput(evt) {
    SetePassword(evt.target.value);
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-white p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey! Hai!!</h1>
        {ruser ? (
          <p>I help you to manage your activities after you Signup :)</p>
        ) : (
          <p className="text-red-600">"Please signup before you login Buddy!"</p>
        )}
       
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"
            onChange={handleUInput}
          />
          <input
            type="password" 
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
            onChange={handlePInput}
          />

          <button
            className="bg-[#8b5cf6] w-24 p-1 rounded-md"
            onClick={checkUser}
          >
            Log in
          </button>

          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
