import React from 'react'
import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUser,newUser} from '../../redux/actions/getActions'
import {Redirect,Route} from 'react-router-dom'


function AdminRoute({components:Component,...rest}){
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(fetchUser())
	},[dispatch])

	const users = useSelector(state => state.get.users)

if(localStorage.token===undefined){
	return(
		<Redirect to ='/sign'/>
		)
}else{
	if(users.length>0){

	const find = users.filter(function(value){
		return (value.role === 'admin') && (value.token === localStorage.token)
	})
	if(find.length<1){
		return(
			<Redirect to ={'/user/'+localStorage.user}/>
			)
	}
}
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



export default AdminRoute