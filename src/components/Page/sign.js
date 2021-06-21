import React from 'react'
import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUser,newUser} from '../../redux/actions/getActions'
import {Redirect,Link} from 'react-router-dom'
var crypto = require("crypto");

function Sign(){
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(fetchUser())
	},[dispatch])


	const [signok,setsignok]=useState('')
	const users = useSelector(state => state.get.users)
	const [bottom,setbottom] = useState('bottom')
	const [signin,setsignin] = useState('signin')
	const [signup,setsignup] = useState('signup')
	const [sign,setsign] =useState('Sign up')
	const [uusername,setuusername]=useState('')
	const [ufname,setufname]=useState('')
	const [ulname,setulname]=useState('')
	const [uphone,setuphone]=useState('')
	const [ubirth,setubirth]=useState('')
	const [upass,setupass]=useState('')
	const [uemail,setuemail]=useState('')
	const [iusername,setiusername] = useState('')
	const [ipass,setipass] = useState('')
	const [messpass,setmesspass]=useState('')
	const [messpass1,setmesspass1]=useState('')
	const [messpass2,setmesspass2]=useState('')
	const [messpass3,setmesspass3]=useState('')
	const [messpass4,setmesspass4]=useState('')
	const [messpass5,setmesspass5]=useState('k co mat khau')
const [messusername,setmessusername] = useState('')
const [mess,setmess] = useState('none')
const [messfname,setmessfname] = useState('')
const [messlname,setmesslname] = useState('')
const [messbirth,setmessbirth] = useState('')
const [messphone,setmessphone] = useState('')
const [redirect,setredirect] =useState('')
const [messemail,setmessemail] = useState('')
const [showmess,setshowmess]=useState('')
const [z,setz]=useState([])
 let showref = useRef('')
 let showiref = useRef('')
 const [forgeti,setforgeti]=useState('')

function isubmit(e){
	e.preventDefault();
	let mess1,mess2
  if(iusername === ''){
  	mess1 ='nhap username'
  }else{
  	mess1 =''
  }
  if(ipass === ''){
  	mess2 = 'nhap password'
  }else{
  	mess2 = ''
  }
  const mess = [
  mess1,
  mess2
  ]
  setshowmess(mess)
  const findu = users.filter(function(value){
  	return value.username === iusername
  })
  const findp = users.filter(function(value){
  	return value.pass === ipass
  })
 	if(findu.length<1&&iusername!==''){
 		let mess = [
 		mess='username khong ton tai',
 		mess1,
 		mess2
 		]
 		setshowmess(mess)
 	}
 	if(findp.length<1&&ipass!==''){
 		let mess = [
 		mess='password sai, nhap lai!!!!',
 		mess1,
 		mess2
 		]
 		setshowmess(mess)
 	}
 	if((findu.length<1&&iusername!=='')&&(findp.length<1&&ipass!=='')){
 		let mess = [
 		mess1='username khong ton tai',
 		mess2='password sai, nhap lai!!!!'
 		]
 		setshowmess(mess)
 	}else{
 	if(findu.length>0){
 			
 		setsignok(findu[0])
 	}
 			
 	}
}
if(signok!==''){
	localStorage.setItem('user',signok.username)
 		  	localStorage.setItem('token',signok.token)
	  if(redirect.role==='admin'){
 		 
 		  	return(
 		  		<Redirect to={'/admin'}/>
 		  		)
 		  }else{
 		  	
 		  	return(
 		  		<Redirect to={'/user/'+signok.username}/>
 		  		)
 		  }
}
function showmesssignin(e){
	setTimeout(()=>{
		if(e!==''){
			setshowmess('')
		}
	},3000)
	if(e!==''){
		
			return(
			<div>
			{
				e.map((value,index)=>{
					if(value!==''){
						return(
						<div className='mess' key={index}>{value}</div>
						)
					}
				})
			}
		</div>
			)

	}
}
	function signi(){
		if(signin==='signin'){
			setsignup('')
			setsignin('signup')
			setsign('Sign in')
			setbottom('')
		}else{
			setsignin('signin')
			setsignup('signup')
			setsign('Sign up')
			setbottom('bottom')
		}

	}

function showpasssignin(e){
	if(showref.type==='password'){
		showref.type='text'
	}else{
		showref.type='password'
	}
}

function showpasssignup(e){
	if(showiref.type==='password'){
		showiref.type='text'
	}else{
		showiref.type='password'
	}

}

function checkpass(num){
  if(num===''){
   
  setmesspass5('nhap mat khau')
  setmesspass3('')
  setmesspass1('')
  setmesspass2('')
  setmesspass4('')

  setmesspass('')
 
  }else{
  	setmesspass5('')
    if(/^[a-zA-Z0-9- ]*$/.test(num)===true){
      setmesspass('nhap ky tu dac biet')
    }else{
      setmesspass('')

     
    }
    if(num.length<=9){
      setmesspass1('ky tu > 9')
     
    }else{
      setmesspass1('')
     
    }
    const k=num.replace(/[^0-9-]+/ig, "");
  
  if(k===""){
    setmesspass2('k co so')

  }else{
    setmesspass2('')
    
  }
  const z=num.replace(/[^a-zA-Z-]+/ig, "");
  if(z===''){
    setmesspass3('k co chu')

   
  }else{
    setmesspass3('')
    
  }
  
  var t = z.toUpperCase()

  var d='';
  for(var i=0;i<z.length;i++){
    if(z[i]===t[i]){
      d='co'
    }
  }
  if(d!=='co'){
    
    setmesspass4('nhap ky tu in hoa')

   
  }else{
    setmesspass4('')
    
  }
  
  
  }
 if(messpass1===''||messpass2===''||messpass3===''||messpass4===''||messpass5===''||messpass===''){
			setupass(num)
	}
  
  
}
function showpasscheck(){

	if(messpass5===''){

		const mess= [
					messpass,
					messpass1,
					messpass2,
					messpass3,
					messpass4
				]
		
 return(
 	<div className='showcheck'>
 		{ mess.map((value,index)=>{
 		  	if(value!==''){
 		  		return(
 		  			<div key={index} className='checkerror'></div>
 		  			)
 		  	}
 		  })

 	}
 	{ mess.map((value,index)=>{
 		  	if(value===''){
 		  		return(
 		  			<div key={index} className='check'></div>
 		  			)
 		  	}
 		  })
 		
 	}
 	</div>
 	)

	}

}
function showmessi(e){
	setTimeout(()=>{
		if(e!==''){
			setshowmess('')
		}
	},3000)
	if(e!==''){
		
			return(
			<div>
			{
				e.map((value,index)=>{
					if(value!==''){
						return(
						<div className='mess' key={index}>{value}</div>
						)
					}
				})
			}
		</div>
			)

	}

}



function usubmit(e){

	e.preventDefault();
	
	checkpass(upass)
	if(messpass1!==''||messpass2!==''||messpass3!==''||messpass4!==''||messpass5!==''||messpass!==''){
	const mess = [
	messpass,
	messpass1,
	messpass2,
	messpass3,
	messpass4,
	messpass5,

	]

	setshowmess(mess)
	
}else{

setshowmess('')

if(uusername===''){
setmessusername('nhap username!!!')
		setmess('mess')
		
		window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		})
}else{
	setmessusername('')
}
if(ufname===''){
setmessfname('nhap first name!!!')
		setmess('mess')
		
		window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		})
}else{
	setmessfname('')
}
if(ulname===''){
setmesslname('nhap last name!!!')
		setmess('mess')
		
		window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		})
}else{
	setmesslname('')
}
if(uemail===''){
setmessemail('nhap email!!!')
		setmess('mess')
		
		window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		})
}else{
	setmessemail('')
}
if(messusername!==''||messemail!==''||messfname!==''||messlname!==''){
	const mess = [
	messusername,
	messemail,
	messfname,
	messlname
	]
	setshowmess(mess)
}
if(users.length>0){
	const findusername = users.filter(function(value){
		return(value.username===uusername)
	})
	const findemail = users.filter(function(value){
		return(value.email===uemail)
	})
	if(findemail.length>0){
		setuemail('')
		let messemail1 = 'email trung nhap lai'
		let mess = [
		messemail1
		]
		setshowmess(mess)
		
		window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		})
		
	}else{
		if(findusername.length>0){
		setuusername('')
		let messusername1 = 'username trung nhap lai'
		let mess = [
		messusername1
		]
		setshowmess(mess)
		setTimeout(()=>{
			setmessusername('')
			setmess('none')
		},3000)
		window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		})
	}else{
	
		if(uusername!==''&&upass!==''&&ufname!==''&&ulname!==''&&ubirth!==''&&uphone!==''&&uemail){
	let token=crypto.randomBytes(200).toString('hex');
	const user = {
				username:uusername,
				email:uemail,
        		lname:ulname,
        		fname:ufname,
        		phone:uphone,
        		birth:ubirth,
        		pass:upass,
        	
        		token,
			}
			dispatch(newUser(user))
			setredirect('ok')
}
	}
	}
	
	
if(findemail.length>0&&findusername.length>0){
	let mess1 = 'email trung nhap lai'
	let mess2 = 'username trung nhap lai'
	const mess = [
	mess1,
	mess2
	]
	setshowmess(mess)
}
}else{
	if(uusername!==''&&upass!==''&&ufname!==''&&ulname!==''&&ubirth!==''&&uphone!==''&&uemail){
	let token=crypto.randomBytes(200).toString('hex');
	const user = {
				username:uusername,
				email:uemail,
        		lname:ulname,
        		fname:ufname,
        		phone:uphone,
        		birth:ubirth,
        		pass:upass,
        	
        		token,
			}
			dispatch(newUser(user))
			setredirect('ok')
}
}
}
}
if(localStorage.token!==undefined){
	return(
		<Redirect to={'/user/'+localStorage.user}/>
		)
}
if(redirect!==''){
	sessionStorage.setItem('signup', uusername)
	return(

		<Redirect to={'/checkemail'}/>
		)
}
if(forgeti!==''){
	return(
		<Redirect to='/forget'/>
		)
}
	return(
		<div>
		<nav className="Nav">
		<div className="Nav-nho">
			<div>Home</div>
		<ul>
			<li onClick={(e)=>{signi(e)}}>{sign}</li>
			<li><Link className='link' to='/soon'>Contact</Link></li>
			
		</ul>
		</div>
		
	</nav>
			 <div className="sign-all">
        <div className={"sign "+signin}>
          <h2>Sign</h2>
         
          <form onSubmit={(e)=>isubmit(e)}>
           {showmesssignin(showmess)}
            <div className="sign-i">
              <label htmlFor="username">Username: </label>
              <input onChange={(e)=>setiusername(e.target.value)} type="text" id="username" placeholder="type username ..." />
            </div>
            <div className="sign-i">
              <label htmlFor="pass">Password: </label>
              <input onChange={(e)=>setipass(e.target.value)} ref={ref=>{showref=ref}} type="password" id="pass" placeholder="type password" />
            </div>
            <div className="sign-show">
              <label htmlFor="show">
                <input type="checkbox" id="show" />
                <span className="checkmark" />
                <p onClick={(e)=>showpasssignin(e)}>show password</p>
              </label>	
              <span onClick={(e)=>{signi(e)}} className="notk">khong co tai khoan!!!</span>
            </div>
            <div onClick={(e)=>setforgeti('ok')} className='forget'>quen mat khau ????</div>
            <input className="submit" type="submit" defaultValue="Sign in" />
          </form>
        </div>
        <div className={"sign "+ signup}>
          <h2>Sign up</h2>

          <form onSubmit={(e)=>{usubmit(e)}}>



           {showmessi(showmess)}
            <div className="sign-i">
              <label htmlFor="username1">Username: </label>
              <input onChange={(e)=>setuusername(e.target.value)} type="text" id="username1" placeholder="type username ..." />
            </div>
             <div className="sign-i">
              <label htmlFor="email1">Email: </label>
              <input onChange={(e)=>setuemail(e.target.value)} type="text" id="email1" placeholder="type email ..." />
            </div>
            <div className="sign-i">
              <label htmlFor="firstname">First Name: </label>
              <input onChange={(e)=>setufname(e.target.value)} type="text" id="firstname" placeholder="type first name ..." />
            </div>
            <div className="sign-i">
              <label htmlFor="lastname">Last Name: </label>
              <input onChange={(e)=>setulname(e.target.value)} type="text" id="lastname" placeholder="type last name ..." />
            </div>
            <div className="sign-i">
              <label htmlFor="phone">Phone Number: </label>
              <input onChange={(e)=>setuphone(e.target.value)} type="tel" id="phone" placeholder="0123456789" pattern="[0-9]{10}"  required />
            </div>
            <div className="sign-i">
              <label htmlFor="birth">BirthDay: </label>
              <input onChange={(e)=>setubirth(e.target.value)} type="date" id="birth" required/>
            </div>
            <div className="sign-i">
            	
              <label htmlFor="pass1">Password: </label>
              {showpasscheck()}
              <input onChange={(e)=>checkpass(e.target.value)} ref={ref=>{showiref=ref}} type="password" id="pass1" placeholder="type password" />
            </div>
            <div className="sign-show">
              <label htmlFor="show1">
                <input type="checkbox" id="show1" />
                <span className="checkmark" />
                <p onClick={(e)=>showpasssignup(e)}>show password</p>
              </label>	
              <span onClick={(e)=>{signi(e)}} className="tk">da co tai khoan!!!</span>
            </div>
            <input className="submit" type="submit" defaultValue="Sign in" />
          </form>
        </div>
      </div>
<div>
			<footer className="footer">
        <b>©</b>
        <a href="/">Thuong</a>
      </footer>
		</div>
		</div>
		)
}

export default Sign