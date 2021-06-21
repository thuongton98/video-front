import React from 'react'
import {Route,Redirect} from 'react-router-dom'



function Checkuser({components:Component,...rest}){
if(sessionStorage.signup===undefined){
	return(
		<Redirect to='/p404'/>
		)
}
	return(
		<div>
			<Route
			 {...rest}
        
           render={props => {
             
           
         
           
             
       
             return <><Component {...props}/></>
           }}

		/>
	
		</div>
		)
}


export default Checkuser