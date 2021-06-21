import React from 'react'
import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUser,newUser} from '../../redux/actions/getActions'
import {Redirect,Route} from 'react-router-dom'
import Footer from '../Page/footer'

function Checkuser({components:Component,...rest}){
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(fetchUser())
	},[dispatch])

	const users = useSelector(state => state.get.users)

if(localStorage.token===undefined){
	return(
		<Redirect to ='/sign'/>
		)
}

	return(
	
			<Route 
			 {...rest}
        
           render={props =>(
                        
                      
                    
                      <>
                       
                                      <Component {...props}/>
                                   
                   </>
                                      
                                      
                                    
                      )}

		/> 
	

	
		)
}


export default Checkuser