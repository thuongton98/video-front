import React from 'react'
import { useHistory } from "react-router-dom";


function Soon(){
  let history = useHistory();
	return(
		 <div className='waiting'>
    <h1>Commint Soon, Please wait <span></span></h1> 
    <button onClick={()=>{history.goBack()}} className='button'>Back</button>
  </div>
		)
}

export default Soon