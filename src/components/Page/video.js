import React from 'react'
import {fetchVideo,fetchChannel} from '../../redux/actions/getActions.js'
import {useSelector, useDispatch} from 'react-redux'

import {useRef,useState,useEffect} from 'react'
import {Link,Redirect,useParams} from 'react-router-dom'


function Video(){
const [outi,setouti] = useState('')
const dispatch = useDispatch();
let videoref=useRef();
let seekBarref=useRef();
let volumeref=useRef();
	const [check,setcheck] = useState('')
const [pause,setpause] = useState('Pause')
const [mute,setmute] = useState('unMute')
const [redirectvideo,setredirectvideo]=useState('')
useEffect(()=>{
  dispatch(fetchChannel())
  dispatch(fetchVideo())
  if(localStorage.token!==undefined){
	setcheck('ok')
}else{
	setcheck('')
}
    
},[dispatch])

const channels = useSelector(state => state.get.channels)
const videos = useSelector(state => state.get.videos);
let id = useParams();

	function out(){
		localStorage.clear();
		setouti('ok')
	}
	if(outi!==''){
		return(
			<Redirect to = '/sign'/>
			)
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
		
	</nav>
			
			)
	}
}



function shownextvideo(k,e){
	return(
		<div className="next-video">
			{
				k.map((value,index)=>{
		if(value !== e && value.idchannel === e.idchannel){
			return(
				<a  key={index} href={"/video/"+value._id}>
					<div className="next-flex">
				<div>
					<video src={value.video} poster={value.poster} className="myvideo-item"></video>
					<button className="showbuttonplay">></button>
				</div>
				<p>{value.title}</p>
			</div>
				</a>
				)
		}
	})
			}
		</div>
		)
	
}


function playButton(){
	 if (videoref.paused === true) {
    // Play the video
    videoref.play();

    // Update the button text to 'Pause'
    setpause('Pause')
  } else {
    // Pause the video
    videoref.pause();

    // Update the button text to 'Play'
    setpause('Play')
  }
}
function muteButton(){
if (videoref.muted === false) {
    // Mute the video
    videoref.muted = true;
    volumeref.value=0
    // Update the button text
   setmute('unMute')
  } else {
    // Unmute the video
    videoref.muted = false;
    volumeref.value=1
    // Update the button text
    setmute('Mute')
  }
}
function fullScreenButton(){
	if (videoref.requestFullscreen) {
    videoref.requestFullscreen();
  } else if (videoref.mozRequestFullScreen) {
    videoref.mozRequestFullScreen(); // Firefox
  } else if (videoref.webkitRequestFullscreen) {
    videoref.webkitRequestFullscreen(); // Chrome and Safari
  }
}
function seekBar(e){
	 // Calculate the new time
  var time = videoref.duration * (e.target.value / 100);

  // Update the video time
  videoref.currentTime = time;



}

function updatetime(e){
	 var value = (100 / videoref.duration) * videoref.currentTime;

  // Update the slider value
  seekBarref.value = value;
}
function changevolume(e){
	// Update the video volume
  videoref.volume = e;
}

if(videos.length>0){
	const findvideo = videos.filter(function(value){
		return value._id === id.id
	})
	

	if(findvideo.length>0){
		const findchannel = channels.filter(function(value){
		return value.idchannel === findvideo[0].idchannel
	})
		return(
			 <div>
			 {showlogout(check)}
			 	<section className="video-item">
        <div className="showvideo">
          <Link to='/soon' className="dangky">Dang ky</Link>
          <div>
            <video onTimeUpdate={(e)=>updatetime(e)} ref={ref=>videoref=ref} src={findvideo[0].video} className="video" autoPlay muted/>
            {/* Video Controls */}
            <div id="video-controls">
              <button onClick={(e)=>playButton(e)} type="button" id="play-pause">{pause}</button>
              <input ref={ref=>seekBarref=ref} onChange={(e)=>seekBar(e)}  type="range" id="seek-bar" defaultValue={0} />
              <button onClick={(e)=>muteButton(e)} type="button" id="mute">{mute}</button>
              <input ref={ref=>volumeref=ref} onChange={(e)=>changevolume(e.target.value)} type="range" id="volume-bar" min={0} max={1} step="0.1" defaultValue={0} />
              <button onClick={(e)=>fullScreenButton(e)} type="button" id="full-screen">Full-Screen</button>
            </div>
          </div>
          <div>
            <h4>{findchannel[0].name}</h4>
            <p>{findvideo[0].title}</p>
          </div>
        </div>
        
          {shownextvideo(videos,findvideo[0])}
        
      </section>
       <div>
			<footer className="footer">
        <b>©</b>
        <a href="/">Thuong</a>
      </footer>
		</div>
			 </div>
			)
	}else{
		return(
			<Redirect to='/p404'/>
			)
	}
}

	return(
			<div>
				{showlogout(check)}
		 <div className='waiting'>
    <h1>video <span></span></h1> 
    
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

export default Video