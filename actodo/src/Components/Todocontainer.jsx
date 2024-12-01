import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"
function Todocontainer(){
  const [activityArr,SetActivityArr]=useState([
    {
        id:1,
        activity:"Go for a walk"
    },

    {
        id:2,
        activity:"Have breakfast"
    },
])
  return(
    <div>
        <div className="flex gap-5 flex-wrap">
  
      
        <Addtodoform activityArr={activityArr} SetActivityArr={SetActivityArr} />
    <div>
    </div>
      <Todolist  activityArr={activityArr} SetActivityArr={SetActivityArr}/>
    </div>
    </div>
  )


}

export default Todocontainer