import React from 'react'
import {useState} from 'react'
import {Redirect,Link} from 'react-router-dom'




function P404(){
const [outi,setouti] = useState('')

	function out(){
		localStorage.clear();
		setouti('ok')
	}
	if(outi!==''){
		return(
			<Redirect to = '/sign'/>
			)
	}

	return(
			<div>
				<nav className="Nav">
		<div className="Nav-nho">
			<Link className='link' to='/'>Home</Link>
		<ul>
		
			<li className='link' onClick={(e)=>out()}>Logout</li>
			
		</ul>
		</div>
		
	</nav>
		 <div className='waiting'>
    <h1>P404 <span></span></h1> 
    
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

export default P404