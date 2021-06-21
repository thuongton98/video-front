import React from 'react'
import {useState} from 'react'
import {Redirect} from 'react-router-dom'

function Checkemail(){
	const [ok,setok] = useState('')
	function removesession(){
sessionStorage.removeItem('signup');
setok('ok')
	}
if(ok!==''){
	return(
	<Redirect to='/'/>
	)
}
	return(
		<div>
			<nav className="Nav">
		<div className="Nav-nho">
			<div>{sessionStorage.signup}</div>
		<ul>
			<li>Home</li>
			<li>Contact</li>
			
		</ul>
		</div>
		
	</nav>
		<div className='waiting'>
    <h1>Please Check Your Email <span></span></h1> 
    <button onClick={(e)=>removesession(e)} className='button'>Home</button>
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

export default Checkemail