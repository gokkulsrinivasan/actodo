import { useState } from "react";
import { Link  } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Signup(props){

    const users=props.users
    const Setuser=props.Setusers


    const navigate=useNavigate()
    const [eUsername, SeteUsername] = useState();
  const [ePassword, SetePassword] = useState();

  function handleUInput(evt) {
    SeteUsername(evt.target.value);
  }


  function handlePInput(evt) {
    SetePassword(evt.target.value);
  }

  function Adduser() {
    Setuser([...users, { username: eUsername, password: ePassword }]);
    navigate("/")
  }
  


    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md" >
            <h1 className="text-3xl font-medium"> Hey! Hai!!</h1>
            <p>I help you to manage your activities after you Signup :)</p>

            <div className="flex flex-col gap-2 my-2">
                <input
                 type="text" 
                 className="w-52 border-black p-1 bg-transparent border rounded-md" 
                 placeholder="Username"
                 onChange={handleUInput}/> 
        <input
                 type="text" 
                 className="w-52 border-black p-1 bg-transparent border rounded-md" 
                 placeholder="Password"
                 onChange={handlePInput}/> 
        <input
                 type="text" 
                 className="w-52 border-black p-1 bg-transparent border rounded-md" 
                 placeholder="Confirm Password"/> 

                 <button className="bg-[#f87171] w-24 p-1 rounded-md" onClick={Adduser}>
                  Sign up
                 </button>

                 <p>Already have an account ? <Link to={"/"} >Login</Link></p>
        
              </div>
            </div>

            

        </div>
    )
}


export default Signup