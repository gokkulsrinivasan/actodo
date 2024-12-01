
import Todoitem from "./Todoitem"


function Todolist(props)
{
   const activityArr=props.activityArr
   const SetActivityArr=props.SetActivityArr

    return(

        <div className="bg-[#fca5a5] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Todays activity </h1>

        {activityArr.length===0?<p>You havent added any activity yet!</p>:""}
        
        {
            activityArr.map(function(item,index){
            
                return <Todoitem id={item.id} item={item} index={index} activityArr={activityArr} SetActivityArr={SetActivityArr} />
            })
        }
        </div>
    )
}

export default Todolist