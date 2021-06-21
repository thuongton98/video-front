import React from 'react'
import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUser,active} from '../../redux/actions/getActions'
import {Redirect, useParams} from 'react-router-dom'
var crypto = require("crypto");

function Active(){
const dispatch = useDispatch();
const [redirect,setredirect] = useState('')
let id = useParams();
	useEffect(()=>{
		dispatch(fetchUser())
	},[dispatch])

	const users = useSelector(state => state.get.users)
function actived(e){
	let token=crypto.randomBytes(200).toString('hex');
	const ok = {
		id:e._id,
		active:'yes',
		token
	}
	dispatch(active(ok))
	setredirect('ok')
}
	if(redirect === 'ok'){
		return(
			<Redirect to = '/'/>
			)
	}
	if(users.length>0){
		const finduser = users.filter(function(value){
			return value.token === id.id
		})
		if(finduser.length>0){
			if(finduser[0].active === 'yes'){
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
		<div className='waiting'>
    <h1>Click To Active <span></span></h1> 
     <button onClick={(e)=>actived(finduser[0])} className='button'>Home</button>
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


export default Active