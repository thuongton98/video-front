import React from 'react'
import {fetchVideo,fetchChannel} from '../../redux/actions/getActions.js'
import {useSelector, useDispatch} from 'react-redux'

import {useRef,useState,useEffect} from 'react'
import {Link,Redirect,useHistory} from 'react-router-dom'

function Home(){
	let history = useHistory();
	const dispatch = useDispatch();
	const [videohover,setvideohover] = useState('')
	const [check,setcheck] = useState('')
	const [ok,setok] = useState('')
	const [redirect,setredirect] = useState('')
useEffect(()=>{
  dispatch(fetchChannel())
  dispatch(fetchVideo())
  if(localStorage.token!==undefined){
	  
	setcheck('ok')
}else{
	setcheck('')
	
}
    
},[dispatch])

function out(){
	
	
localStorage.removeItem('token')
localStorage.removeItem('user')
  history.push('/')
  setcheck('')

}


function showlogout(e){
	
	if(e==='')
	{
		
		return(
		<nav className="Nav">
		<div className="Nav-nho">
			<Link className='link' to='/'>Home</Link>
		<ul>
			<li><Link className='link' to='/soon'>Contact</Link></li>
			<li><Link className='link' to='/sign'>Login</Link></li>
			
		</ul>
		</div>
		<div className="Nav-lon">
        <form>
          <input type="text" placeholder="Search ..." />
          <input className="search" type="submit" value="Search" />
        </form>
      </div>
	</nav>

		)
	}else{
		return(
			<nav className="Nav">
		<div className="Nav-nho">
			<Link className='link' to={'/user/'+localStorage.user}>{localStorage.user}</Link>
		<ul>
			<li><Link className='link' to='/soon'>Contact</Link></li>
			<li onClick={(e)=>out(e)}>Logout</li>
			
		</ul>
		</div>
		<div className="Nav-lon">
        <form>
          <input type="text" placeholder="Search ..." />
          <input className="search" type="submit" value="Search" />
        </form>
      </div>
	</nav>
			
			)
	}
}

const channel = useSelector(state => state.get.channels)
const video = useSelector(state => state.get.videos);


function shownamechannel(){
	if(channel.length>0){

	return(
		
		 		
		 					<div className='channel'>
		 					{channel.map((value,index)=>{
		 						return(
		 							
		 								<Link key={index} to='/soon' className="channel-i">{value.name}</Link>

		 						
		 							)
		 					})}
		 				
		 				</div>
		 				
		 			
		 	

	
		)
	}
}
function hoverall(e){
if(videohover!==''){
		if(e.target!==videohover){
		videohover.load();
	}
}
}
function hovervideo(e){
	e.play()
	setvideohover(e)
	if(videohover!==''&&e!==videohover){
		videohover.load();
	}
}
if(redirect !==''){
	return(
		<Redirect to={'/video/'+redirect}/>
	)
}
function showallvideo(e){
	
if(e.length>0){
	return(
		 <section className="allvideo">
        <h2>All Video:</h2>
        <div className="allvideo-i">
         {e.map((value,index)=>{
         		return(
         			  <div onClick={(e)=>setredirect(value._id)} key={index}>
            <video onMouseOver={(e)=>hovervideo(e.target)} className="video" poster={value.poster} src={value.video} muted/>
            <h4>{value.title}</h4>
          </div>
         			)
         })}
        </div>
      </section>
		)
}
}
	if(video.length>0){
		return(
		<div onMouseOver={(e)=>hoverall(e)}>
			{showlogout(check)}
			<section className="top">
        <h2>Top Trending:(comming soon)</h2>
        <div className="flex">
          <div className="an">
            <video className="video" />
            <h4>Girl</h4>
          </div>
          <div className="an">
            <video className="video"/>
            <h4>
              Girl 2
            </h4>
          </div>
          <div className="an">
            <video className="video" />
            <h4>Girl 3</h4>
          </div>
          <div className="an">
            <video className="video"  />
            <h4>Girl 4</h4>
          </div>
          <div className="an5">
            <video className="video" />
            <h4>Girl 5</h4>
          </div>
        </div>
      </section>
        <section className="allvideo">
        <h2>Channel:</h2>
       {shownamechannel()}
      {showallvideo(video)}
      </section>
			<footer className="footer">
		<b>&copy;</b>
		<a href="/">Thuong</a>
	</footer>
		</div>
		)
	}
	return(
			<div>
		{showlogout(check)}
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

export default Home