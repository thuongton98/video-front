import React from 'react'
import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUser,change} from '../../redux/actions/getActions'
import {Redirect, useParams} from 'react-router-dom'
var crypto = require("crypto");

function Changepass(){
	const dispatch = useDispatch();
	let id = useParams();
 	const [pass,setpass]=useState('')
 	const [mess,setmess]=useState('')
	const [messpass,setmesspass]=useState('')
	const [messpass1,setmesspass1]=useState('')
	const [messpass2,setmesspass2]=useState('')
	const [messpass3,setmesspass3]=useState('')
	const [messpass4,setmesspass4]=useState('')
	const [messpass5,setmesspass5]=useState('k co mat khau')
	const [redirect,setredirect]=useState('')

	useEffect(()=>{
		dispatch(fetchUser())
	},[dispatch])
	
	const users = useSelector(state => state.get.users)


	function submit(e, v){
		e.preventDefault();
			checkpass(pass)
	if(messpass1!==''||messpass2!==''||messpass3!==''||messpass4!==''||messpass5!==''||messpass!==''){
	const mess = [
	messpass,
	messpass1,
	messpass2,
	messpass3,
	messpass4,
	messpass5,

	]

	setmess(mess)
	
}else{
	setmess('')
	let token=crypto.randomBytes(200).toString('hex');
	const add = {
		pass,
		id:v._id,
		token,
		
	}
	dispatch(change(add))
	setredirect('ok')
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
			setpass(num)
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
	function showmess(e){
		
		setTimeout(()=>{
		if(e!==''){
			setmess('')
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
if(redirect !== ''){
	
		return(
		<Redirect to='/sign'/>
		)
	
}
	if(users.length>0){
		const finduser = users.filter(function(value){
			return value.token === id.id
		})
		if(finduser.length>0){
			if(finduser[0].forget === 'no'){
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
         <h2>Change Password: </h2>
       <form onSubmit={(e)=>submit(e, finduser[0])}>
       {showmess(mess)}
       		 <div className="sign-i">
              <label htmlFor="email">Your Email: </label>
              <b>{finduser[0].email}</b>
            </div>
       	  <div className="sign-i">
              <label htmlFor="email">Nhap Password: </label>
              {showpasscheck()}
              <input onChange={(e)=>checkpass(e.target.value)} type="password" id="email" placeholder="type password ..." />
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


export default Changepass