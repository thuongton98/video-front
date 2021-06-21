import React from 'react'
import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchVideo,fetchUser,deletechannel,deletevideo,fetchChannel,newChannel,newVideo} from '../../redux/actions/getActions'
import {Redirect,Route,useParams,Link} from 'react-router-dom'



function Channel(){
const dispatch = useDispatch();
const axios = require('axios');
	useEffect(()=>{
		dispatch(fetchUser())
		dispatch(fetchChannel())
		dispatch(fetchVideo())
	},[dispatch])
	let id = useParams()

	const users = useSelector(state => state.get.users)
	const channels = useSelector(state => state.get.channels)
	const videos = useSelector(state => state.get.videos)


	const [redirectvideo,setredirectvideo] = useState('')
	const [footer,setfooter] = useState('bottom')
	const [openchannel,setopenchannel] = useState('')
	const [none,setnone] = useState('waiting')
	const [key,setkey] = useState('')
	const [name,setname] = useState('')
	const [mess,setmess] = useState('')
	const [classmess,setclassmess] = useState('')
	const [outi,setouti] = useState('')
	const [ok,setok] = useState('')
	const [video,setvideo] = useState('')
	
	const [title,settitle] = useState('')
	const [poster,setposter] = useState('')

	function out(){
		localStorage.clear();
		setouti('ok')
	}
	if(outi!==''){
		return(
			<Redirect to = '/sign'/>
			)
	}

if(redirectvideo!==''){
	return(
		<Redirect to={'/video/'+redirectvideo}/>
		)
}
	function uploadz(e) {
           
             if(e==''){
               alert('chua chon file!!!')
             }
             else{

             	const z = e.type.split('/')
             	
              	if(z[0]!=='video'){
              		alert('vui long chon video !!!')
              		setvideo('')
              	}else{
              		const formData = new FormData();
              formData.append("add", e);
               const config = {
               headers: {
                'content-type': 'multipart/form-data'
               }
               }
                axios.post('http://localhost:5000/uploadvideo/add', formData, config).then(res => {
                 var z;
                let filePath = res.data.fileNameInServer
               for(var i=0;i<filePath.length;i++)
         {if(filePath[i]==='/'&&filePath[i+1]==='/'){
           
              //tren window xoa \\
             z = filePath.split('\\')[1]
              
         }else{
           //tren linux xoa /
           z=filePath.split('/')[1]
         }
              }  const filevideo='http://localhost:5000/uploadvideo/'+z
                setvideo(filevideo)
            
               
               })
              	}
               
               
             }
           }
function uploadposter(e) {
          
             if(e==''){
               alert('chua chon file!!!')
             }
             else{

             	const z = e.type.split('/')
             
              	if(z[0]!=='image'){
              		alert('vui long chon hinh anh !!!')
              		setposter('')
              	}else{
              		const formData = new FormData();
              formData.append("add", e);
               const config = {
               headers: {
                'content-type': 'multipart/form-data'
               }
               }
                axios.post('http://localhost:5000/uploadimg/add', formData, config).then(res => {
                 var z;
                let filePath = res.data.fileNameInServer
               for(var i=0;i<filePath.length;i++)
         {if(filePath[i]==='/'&&filePath[i+1]==='/'){
           
              //tren window xoa \\
             z = filePath.split('\\')[1]
              
         }else{
           //tren linux xoa /
           z=filePath.split('/')[1]
         }
              }  const file='http://localhost:5000/uploadimg/'+z
                setposter(file)
            
               
               })
              	}
               
               
             }
           }
function showposter(e){
	if(e!==''){
		return(
			<img className='img-poster' src={poster} alt="x"/>
			)
	}
}
function xoavideo(e){
	dispatch(deletevideo(e))
	setok('ok')
}
function xoachannel(v,e){
	let n = 0;
	if(videos.length>0){
		const findvideo = videos.filter(function(value){
			return value.idchannel === e
		})
		if(findvideo.length>0){
			for(let i=0;i<findvideo.length;i++){
				dispatch(deletevideo(findvideo[i]._id))
				n++
			}
			dispatch(deletechannel(v))
if(n===findvideo.length){
	setok('ok')
}
		}}else{
			dispatch(deletechannel(v))
	
			setok('ok')
	
		}

}
function uploadall(e){
	e.preventDefault();
	if(video===''){
		alert('vui long upload video')
	}
	if(poster===''){
		alert('vui long upload poster')
	}
	if(title===''){
		alert('vui long nhap title')
	}
	if(video!==''&&poster!==''&&title!==''){
		const add = {
		video,
		title,
		poster,
		idchannel:id.id,

	}
	 dispatch(newVideo(add))
	 setok('ok')
	}
}

function showallvideo(){
	if(videos.length>0){
		const findvideo = videos.filter(function(value){
			return value.idchannel === id.id
		})
		if(findvideo.length>0){

			return(
				<div className="upload admin">
        <div className="admin-i">

          <h2>My Video</h2>
        </div>
        <table>
          <tbody><tr>
              <th>Id:</th>
              <th>Thumbail: 
              </th><th>Title:</th>
              <th>Video:</th>
             
              <th />
            </tr>
       {findvideo.map((value,index)=>{
       	     return(
       	     	<tr key={index} className="tr">
              <td>{value._id}</td>
              <td className="td-img"><img className="img-td" src={value.poster} alt="x" /></td>
              <td>{value.title}</td>
              <td onClick={(e)=>setredirectvideo(value._id)} className="td-video"><video className="video" src={value.video} /></td>
           
              <td className="center"><button onClick={(e)=>xoavideo(value._id)} className="delete">Delete</button></td>
            </tr>
       	     	)
       })}
           
          </tbody></table>
        <div className="admin-toilui">
          <div className="admin-lui" />
          <div className="admin-toi" />
        </div>
      </div>
				)
		}
	}
}
	function cancel(e){
		e.preventDefault();
		setnone('waiting')
		setfooter('bottom')
		setopenchannel('')
	}
	function submit(e){
		e.preventDefault();
		const findname = channels.filter(function(value){
			return value.name === name
		})
		if(findname<1){
			setmess('')
			setclassmess('none')
			const add ={
				idchannel : id.id,
				name,
				key
			}
			dispatch(newChannel(add))
			setok('ok')
		}else{
			setmess('name trung nhap lai')
			setclassmess('')
			setTimeout(()=>{
				setmess('')
				setclassmess('')
			},3000)
		}
	}

	if(ok!==''){
		return(
	<div>
		<nav className="Nav">
		<div className="Nav-nho">
			<Link className='link' to={'/user/'+localStorage.user}>{localStorage.user}</Link>
		<ul>
			<li><Link className='link' to='/'>Home</Link></li>
			<li className='link' onClick={(e)=>out()}>Logout</li>
			
		</ul>
		</div>
		
	</nav>
	<div className='waiting'>
    <h1> succes <span></span></h1> 
    <button onClick={(e)=>window.location.reload()} className='button'>Back</button>
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
	function createchannel(e){
		if(e!==''){
			return(
			<div className="sign-all">
        <div className="sign signin">
         <h2>Create Your Channel: </h2>
       <form onSubmit={(e)=>submit(e)}>
      		<div className={classmess}>{mess}</div>
       		 <div className="sign-i">
              <label htmlFor="name">Your Name Channel: </label>
             <input onChange={(e)=>setname(e.target.value)} type="text" id="name" placeholder="type Name Channel ..." required/>
            </div>
       	  <div className="sign-i">
       	 
              <label htmlFor="key">Your Key Channel: </label>
              
             <input onChange={(e)=>setkey(e.target.value)} type="number" id="key" placeholder="type key channel ..." required/>
            </div>
          <div className='submit-flex'>
          	  <input className="submit" type="submit" value="confirm" />
             <input onClick={(e)=>cancel(e)} className="submit cancel" type="submit" value="Cancel" />
          </div>
       </form>
        </div>
        </div>
			)
		}
	}

	if(users.length>0){
		const finduser = users.filter(function(value){
			return (value.token === localStorage.token) && (value._id === id.id)
		})
		const findadmin = users.filter(function(value){
			return (value.token === localStorage.token) && (value.role === 'admin')
		})
		const findchannel = channels.filter(function(value){
			return(value.idchannel === id.id)
		})
		if(finduser.length<1 && findadmin.length<1){
			return(
				<Redirect to='/p404'/>
				)
		}else{
			if(findchannel.length<1){
				return(
					<div>
			<nav className="Nav">
		<div className="Nav-nho">
			<Link className='link' to={'/user/'+localStorage.user}>{localStorage.user}</Link>
		<ul>
			<li><Link className='link' to='/'>Home</Link></li>
			<li className='link' onClick={(e)=>out()}>Logout</li>
			
		</ul>
		</div>
		
	</nav>
		<div className={none}>
    <h2>Chua co channel,vui long tao channel!!!!</h2> 
    <button onClick={(e)=>{setfooter('');setopenchannel('ok');setnone('none')}} className='button'>Tao Channel</button>
  			

  </div>
  {createchannel(openchannel)}
  <div className={footer}>
			<footer className="footer">
        <b>©</b>
        <a href="/">Thuong</a>
      </footer>
		</div>
		</div>
					)
			}else{
				return(
					<div>
			<nav className="Nav">
		<div className="Nav-nho">
			<Link className='link' to={'/user/'+localStorage.user}>{localStorage.user}</Link>
		<ul>
			<li><Link className='link' to='/'>Home</Link></li>
			<li className='link' onClick={(e)=>out()}>Logout</li>
			
		</ul>
		</div>
		
	</nav>
		<section className="upload-video">
        <h2>Upload Video: </h2>
        <button onClick={(e)=>xoachannel(findchannel[0]._id,id.id)} className="button-video">Delete Channel</button>
        <form>
          <div className="video-flex">
            <div className="video">
            <h3>1/Upload Video:</h3>
              <div>
                <video src={video} controls className="myvideo" />
                <button className="play">&gt;</button>
              </div>
              <div className="video-ii">
                <label htmlFor="video">Upload Video: </label>
                <input onChange={(e)=>uploadz(e.target.files[0])} id="video" type="file" required/>
              
              </div>
            </div>
            <div className="video-i">
            <h3>2/Add Content:</h3>
              <label htmlFor="title">Nhap title: </label>
              <input onChange={(e)=>settitle(e.target.value)} className="input" type="text" placeholder="Nhap title" required/>
              <div className="poster">
                <label htmlFor="poster">Upload poster: </label>
                <input onChange={(e)=>uploadposter(e.target.files[0])} id="poster" type="file" required/>
                {showposter(poster)}
              </div>
            </div>
          </div>
          <input onClick={(e)=>uploadall(e)} className="submit" type="submit" value="Upload" />
        </form>
      </section>
{showallvideo()}
  <div>
			<footer className="footer">
        <b>©</b>
        <a href="/">Thuong</a>
      </footer>
		</div>
		</div>
					)
			}
		}
	}

	return(
		<div>
			<nav className="Nav">
		<div className="Nav-nho">
			<Link className='link' to={'/user/'+localStorage.user}>{localStorage.user}</Link>
		<ul>
			<li><Link className='link' to='/'>Home</Link></li>
			<li className='link' onClick={(e)=>out()}>Logout</li>
			
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

export default Channel