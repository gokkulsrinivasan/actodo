function Todoitem(props){


    const activityArr=props.activityArr
    const SetActivityArr=props.SetActivityArr

    function handleDelete(deleteId){
     
        var temparr = activityArr.filter(function(item){

            if(item.id === deleteId)
            {
                return false
            }
            else
            {
               return true
            }
        })
        
        SetActivityArr(temparr)
    }


    return(
    
        
        <div className="flex justify-between">
        <p> {props.index+1}. {props.item.activity}</p>
        <button className="text-red-600 " onClick={function(){handleDelete(props.id)}}>Delete</button>
    
        </div>
    )

}

export default Todoitem