import React from 'react'
import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUser,forget} from '../../redux/actions/getActions'
import {Redirect} from 'react-router-dom'

function Forget(){
	const dispatch = useDispatch();
useEffect(()=>{
		dispatch(fetchUser())
	},[dispatch])
const users = useSelector(state => state.get.users)
const [email,setemail] = useState('')
const [mess,setmess] = useState('')
const [redirect,setredirect] = useState('')

function submit(e){
	e.preventDefault();
	const find = users.filter(function(value){
		return(value.email === email)
	})
	
	if(email===''){
		let mess2 = 'nhap email !!!'
		const mess1 =[mess2]
		setmess(mess1)
	}else{
		setmess('')
	}
	if(find.length>0){
		const forgetx ={
			id:find[0]._id,
			forget:'yes'
		}
		dispatch(forget(forgetx))
		setredirect('ok')
	}else{
		let mess2 = 'email khong dung nhap lai !!!'
		const mess1 =[mess2]
		setmess(mess1)
	}
}
if(redirect!==''){
	sessionStorage.setItem('signup','ok')
	return(
		<Redirect to='/checkemail'/>
		)
}
function showmess(e){
	
	setTimeout(()=>{
		setmess('')
	},3000)
	if(e!==''){
	return(
			<div>
			{e.map((value,index)=>{
				return(
					<div className='mess' key={index}>{value}</div>
					)
			})}
		</div>
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
     <div className="sign-all">
        <div className="sign signin">
         <h2>Forget: </h2>
       <form onSubmit={(e)=>submit(e)}>
       {showmess(mess)}
       	  <div className="sign-i">
              <label htmlFor="email">Nhap Email: </label>
              <input onChange={(e)=>setemail(e.target.value)} type="text" id="email" placeholder="type username ..." />
            </div>
            <input className="submit" type="submit" defaultValue="Sign in" />
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

export default Forget