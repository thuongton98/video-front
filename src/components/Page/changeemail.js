import React from 'react'
import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUser,confirmemail} from '../../redux/actions/getActions'
import {Redirect, useParams} from 'react-router-dom'
var crypto = require("crypto");


function Changeemail(){
	const dispatch = useDispatch();
	let id = useParams();
	const [email,setemail] = useState('')
	
	const [redirect,setredirect] = useState('')
	useEffect(()=>{
		dispatch(fetchUser())
	},[dispatch])
	
	const users = useSelector(state => state.get.users)
function submit(e,v){
	e.preventDefault();
	let token=crypto.randomBytes(200).toString('hex');
	const add ={
				id:v._id,
				email:v.newemail,
				newemail:'no',
				token
			}
			dispatch(confirmemail(add))
			if(localStorage.token!==undefined){
				localStorage.token = token
			}
			setredirect('ok')
}

function cancel(e,v){
	e.preventDefault();
let token=crypto.randomBytes(200).toString('hex');
	const add = {
		id:v._id,
		email:v.email,
		newemail:'no',
		token
	}
	dispatch(confirmemail(add))
	if(localStorage.token!==undefined){
				localStorage.token = token
			}
	setredirect('ok')

}
if(redirect!==''){
	
		return(
			<Redirect to={'/'}/>
			)
	
}
if(users.length>0){
		const finduser = users.filter(function(value){
			return value.token === id.id
		})
		if(finduser.length>0){
			if(finduser[0].newemail === 'no' || finduser[0].newemail === undefined){
				return(
					<Redirect to ='/p404'/>
					)
			}else{
				return(
					<div>
			<nav className="Nav">
		<div className="Nav-nho">
			<div>Home</div>
		<ul>
			
			<li>Contact</li>
			
		</ul>
		</div>
		
	</nav>
		 <div className="sign-all">
        <div className="sign signin">
         <h2>Confirm change Email: </h2>
       <form onSubmit={(e)=>submit(e, finduser[0])}>
      
       		 <div className="sign-i">
              <label htmlFor="email">Your Username: </label>
              <b>{finduser[0].username}</b>
            </div>
       	  <div className="sign-i">
       	 
              <label htmlFor="email">Your Email: </label>
              
              <b>{finduser[0].newemail}</b>
            </div>
          <div className='submit-flex'>
          	  <input className="submit" type="submit" value="confirm" />
             <input onClick={(e)=>cancel(e,finduser[0])} className="submit cancel" type="submit" value="Cancel" />
          </div>
       </form>
        </div>
        </div>
  <div className='bottom'>
			<footer className="footer">
        <b>©</b>
        <a href="/">Thuong</a>
      </footer>
		</div>
		</div>
					)
			}
		}else{
			return(
				<Redirect to='/p404'/>
				)
		}
	}
	return(
		<div>
			<nav className="Nav">
		<div className="Nav-nho">
			<div>Home</div>
		<ul>
			
			<li>Contact</li>
			
		</ul>
		</div>
		
	</nav>
		<div className='waiting'>
    <h1>Wait <span></span></h1> 
    <div className="wait">
        <div></div>
    </div>
  </div>
  <div className='bottom'>
			<footer className="footer">
        <b>©</b>
        <a href="/">Thuong</a>
      </footer>
		</div>
		</div>
		)
}



export default Changeemail