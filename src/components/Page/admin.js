import React from 'react'

import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUser,deleteuser,updateuseradmin} from '../../redux/actions/getActions'
import {Redirect,Route,useParams} from 'react-router-dom'



function Admin(){
const dispatch = useDispatch();
	const axios = require('axios');
		useEffect(()=>{
		dispatch(fetchUser())
		
	},[dispatch])
	let id = useParams()

	const users = useSelector(state => state.get.users)
const [outi,setouti] = useState('')
const [go,setgo] = useState('')
const [alluser,setalluser] = useState([])
const [option,setoption] = useState([])
const [showuser,setshowuser] =useState ([])
const [value,setvalue] = useState([])
const [number,setnumber] =useState(5)
let prevref =useRef()
let nextref =useRef()
const [n,setn] =useState(4)
const [gochannel,setgochannel] = useState('')
const [update,setupdate] = useState('')
const [deleteok,setdeleteok] = useState('')

const [username,setusername] = useState('')
const [email,setemail] = useState('')
const [fname,setfname] = useState('')
const [lname,setlname] = useState('')
const [phone,setphone] = useState('')
const [birth,setbirth] = useState('')
const [pass,setpass] = useState('')
const [active,setactive] = useState('')

useEffect(()=>{
		const z = []
		for(let i = 0;i<users.length;i++){
			if(users[i]!==users[0]){
				z.push(users[i])
			}

		}
		if(z.length<users.length){
			setalluser(z)
			const k = []
			var ki=5;
			for(let i=0;i<Math.ceil(z.length/5);i++){
				k.push(ki)
				ki=ki+5;
			}
			setoption(k)
		}

		const k = []

		if(z.length>0){
			for(let i = 0;i<5;i++){
			
				k.push(z[i])
			

		}
		setvalue(k)
		}
		
	},[users])


function out(){
		localStorage.clear();
		setouti('ok')
	}
	if(outi!==''){
		return(
			<Redirect to = '/sign'/>
			)
	}
	if(go!==''){
		return(
			<Redirect to = '/'/>
			)
	}
	function show(e){
	if(alluser.length>0){
		const z = []
		for(let i = 0;i<parseInt(e);i++){
			if(alluser[i]!==undefined){
				z.push(alluser[i])
			}
		}
		setvalue(z)
		setnumber(parseInt(e))
		let pn = parseInt(e)-1
		setn(parseInt(pn))
		prevref.className='none'
		if(nextref.className!=='admin-toi'){
			nextref.className='admin-toi'
		}
	}
}
function showoption(e){
	if(e.length>0){

		return(
			<select  onClick={(e)=>show(e.target.value)} className="num" id="num">
				{e.map((value,index)=>{
					return(
						<option key={index} value={value}>{value}</option>
						)
				})}
			</select>
			)
	}
}

function nextprev(e){
	
	
	function prev(){
		nextref.className='admin-toi'
		const z=[]
		for(let i=0;i<alluser.length;i++){
             if(i<=(parseInt(n)-5)&&i>(parseInt(n)-5)-parseInt(number)){
             	if(alluser[i]!==undefined){
             		z.push(alluser[i])
             	}
             }
             
		}
		let pn=parseInt(n)-5
		setn(parseInt(pn))
		setvalue(z)
		if(pn<=4){
			prevref.className='none'
		}
		
	}
	function next(){
		prevref.className='admin-lui'
		const z=[]
		for(let i=0;i<alluser.length;i++){
             if(i>parseInt(n)&&i<=parseInt(n)+parseInt(number)){
             	if(alluser[i]!==undefined){
             		z.push(alluser[i])
             	}
             }
		}
		let pn=parseInt(n)+5
		setn(parseInt(pn))
		
		setvalue(z)

		if(pn>=alluser.length){
			nextref.className='none'
		}
	}

	if(value.length<alluser.length){
		  return(
		  	 <div className="admin-toilui">
          <div ref={ref=>prevref=ref} onClick={()=>prev()} className="none" />
          <div ref={ref=>nextref=ref} onClick={()=>next()} className="admin-toi" />
        </div>
		  	)
	}
}
function submitupdate(e,v){

	e.preventDefault();
	let u,em,f,l,p,ph,b,a;

	if(username===''){
		u = v.username
	}else{
		u = username
	}
	if(email===''){
		em = v.email
	}else{
		em = email
	}
	if(fname===''){
		f = v.fname
	}else{
		f = fname
	}
	if(lname===''){
		l = v.lname
	}else{
		l = lname
	}
	if(phone===''){
		ph = v.phone
	}else{
		ph = phone
	}
	if(pass===''){
		p = v.pass
	}else{
		p = pass
	}
	if(birth===''){
		b = v.birth
	}else{
		b = birth
	}
	if(active===''){
		a = v.active
	}else{
		a = active
	}
	const add ={
		id:v._id,
		username:u,
		email:em,
		fname:f,
		lname:l,
		phone:ph,
		pass:p,
		birth:b,
		active:a

	}
	
	dispatch(updateuseradmin(add))
	setdeleteok('update')
}
function cancel(e){
	e.preventDefault();
	setupdate('')
}
function deleteu(e){
	dispatch(deleteuser(e))
	setdeleteok('delete')
}
if(deleteok!==''){
return(
	<div>
		<nav className="Nav">
		<div className="Nav-nho">
			<div>{localStorage.user}</div>
		<ul>
			<li onClick={(e)=>setgo('ok')}>Home</li>
			<li onClick={(e)=>out()}>Logout</li>
			
		</ul>
		</div>
		
	</nav>
	<div className='waiting'>
    <h1>{deleteok} succes <span></span></h1> 
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
if(update!==''){
	return(
		<div>
			<nav className="Nav">
		<div className="Nav-nho">
			<div>{localStorage.user}</div>
		<ul>
			<li onClick={(e)=>setgo('ok')}>Home</li>
			<li onClick={(e)=>out()}>Logout</li>
			
		</ul>
		</div>
		
	</nav>
		<div className='uploadi admin sign-all'>
	 <div className="admin-i">
       
        <h2>Update User : {update.username}</h2>
      </div>
      <div className="sign user">
    <form >
       	 <div className="sign-i">
       	
              <label htmlFor="username">Your Username: </label>
             <input onChange={(e)=>setusername(e.target.value)} disabled type="text" id="username" defaultValue={update.username} required/>
            </div>
            <div className="sign-i">
       	
              <label htmlFor="email">Your Email: </label>
             <input onChange={(e)=>setemail(e.target.value)} disabled type="text" id="email" defaultValue={update.email} required/>
            </div>
       		 <div className="sign-i">
              <label htmlFor="fname">Your First Name: </label>
             <input  onChange={(e)=>setfname(e.target.value)}  type="text" id="fname" defaultValue={update.fname} required/>
            </div>
       	  <div className="sign-i">
              <label htmlFor="lname">Your Last Name: </label>
             
              <input  onChange={(e)=>setlname(e.target.value)} type="text" id="lname" defaultValue={update.lname} required/>
            </div>
            <div className="sign-i">
              <label htmlFor="Phone">Your Phone Number: </label>
             
              <input  onChange={(e)=>setphone(e.target.value)} type="text" id="phone" defaultValue={update.phone} required/>
            </div>
            <div className="sign-i">
              <label htmlFor="lname">Your BirthDay: </label>
             
              <input  onChange={(e)=>setbirth(e.target.value)} id="lname" type='date' defaultValue={update.birth} required/>
            </div>
            <div className="sign-i">
       	
              <label htmlFor="pass">Your Password: </label>
             <input  onChange={(e)=>setpass(e.target.value)} type="text" id="pass" defaultValue={update.pass} required/>
            </div>
            <div className="sign-i">
       	
              <label htmlFor="active">Your Active: </label>
             <select  onChange={(e)=>setactive(e.target.value)} id='active' defaultValue={update.active} required>
             		<option value="yes">Yes</option>
             		<option value="no">No</option>
             </select>
            </div>
            <div className='submit-flex'>
            	<input onClick={(e)=>submitupdate(e,update)} className='submit'  type="submit" value="Update" />
            <input onClick={(e)=>cancel(e)} className='submit cancel'  type="submit" value="Cancel" />
            </div>
       </form>
       </div>
	</div>
		</div>
		)
}
function showtable(e){
	if(e.length>0){
		return(
			<table className="table-admin">
          <tbody><tr>
              <th>Avatar:</th>
              <th>Username:</th>
              <th>Email:</th>
              <th>First Name:</th>
              <th>Last Name:</th>
              <th>Phone:</th>
              <th>Birth:</th>
              <th>Pass:</th>
              <th>Role:</th>
              <th>Active:</th>
              <th>Social:</th>
              <th>Channel:</th>
              <th />
              <th />
            </tr>
            
            
         
				{e.map((value,index)=>{
					return(
						<tr key={index}>
              <td><img className='img-user' src={value.avatar} alt="avatar"/></td>
              <td>{value.username}</td>
              <td>{value.email}</td>
              <td>{value.fname}</td>
              <td>{value.lname}</td>
              <td>{value.phone}</td>
              <td>{value.birth}</td>
              <td>{value.pass}</td>
              <td>{value.role}</td>
              <td>{value.active}</td>
              <td>{value.social}</td>
              <td className="td-delete"><p onClick={(e)=>setgochannel(value._id)} className="update">Go Channel</p></td>
              <td className="td-delete"><p onClick={(e)=>setupdate(value)} className="update">update</p></td>
              <td className="td-delete"><p onClick={(e)=>deleteu(value._id)} className="delete">delete</p></td>
            </tr>
						)
				})}
		 </tbody></table>
			)
	}
}

if(gochannel!==''){
	return(
		<Redirect to = {'/channel/'+gochannel}/>
		)
}
	if(users.length>0){
		const find = users.filter(function(value){
			return value.token === localStorage.token
		})
		
		if(find.length>0){
			return(
				<div>
					<nav className="Nav">
		<div className="Nav-nho">
			<div>{localStorage.user}</div>
		<ul>
			<li onClick={(e)=>setgo('ok')}>Home</li>
			<li onClick={(e)=>out()}>Logout</li>
			
		</ul>
		</div>
		
	</nav>
	<div className='uploadi admin'>
	 <div className="admin-i">
       
        <h2>Admin Dashboard</h2>
      </div>
     <div className='admini-user'>
     	 <div className="admini-i">
       {showoption(option)}
        <h2>User: </h2>
      </div>
       
          {showtable(value)}
     		{nextprev(alluser)}
     </div>
	</div>
		<footer className="footer">
        <b>©</b>
        <a href="/">Thuong</a>
      </footer>
				</div>
				)
		}else{
			localStorage.clear();
			return(
				<Redirect to='/sign'/>
				)
		}
	}
	return(
		<div>
			<nav className="Nav">
		<div className="Nav-nho">
			<div>Home</div>
		<ul>
			
			<li onClick={(e)=>out()}>Logout</li>
			
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

export default Admin