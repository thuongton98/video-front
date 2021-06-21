import React from 'react'
import {useEffect,useState,useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUser,sendactive,updateuser,updateemailsend,checkupdatepass,updateavatar} from '../../redux/actions/getActions'
import {Redirect,Route,useParams,Link} from 'react-router-dom'



function User(){
	const dispatch = useDispatch();
	const axios = require('axios');
	const [disabled,setdisabled] = useState('disabled')
	const [submitclass,setsubmitclass] = useState('none')
	const [type,settype] = useState('text')
	const [cancelclass,setcancelclass] = useState('cancel none')
	const [updateclass,setupdateclass] = useState('')

	const [cancelclassemail,setcancelclassemail] = useState('cancel none')
	const [updateclassemail,setupdateclassemail] = useState('')
	const [submitclassemail,setsubmitclassemail] = useState('none')
	const [disabledemail,setdisabledemail] = useState('disabled')

	const [cancelclasspass,setcancelclasspass] = useState('cancel none')
	const [updateclasspass,setupdateclasspass] = useState('')
	const [submitclasspass,setsubmitclasspass] = useState('none')
	const [disabledpass,setdisabledpass] = useState('disabled')

	const [goi,setgoi] = useState('')
	const [mess,setmess] = useState('')
	const [outi,setouti] = useState('')
	const [redirect,setredirect] = useState('')


	const [username,setusername] = useState('')
	const [fname,setfname] = useState('')
	const [lname,setlname] = useState('')
	const [phone,setphone] = useState('')
	const [birth,setbirth] = useState('')
	const [email,setemail] = useState('')
	const [pass,setpass] = useState('')
	const [messclass,setmessclass] = useState('none')
	const [messclasse,setmessclasse] = useState('none')
	const [messusername,setmessusername] = useState('')
	const [ok,setok] = useState('')
	const [messemail,setmessemail] = useState('')

		const [messpass,setmesspass]=useState('')
	const [messpass1,setmesspass1]=useState('')
	const [messpass2,setmesspass2]=useState('')
	const [messpass3,setmesspass3]=useState('')
	const [messpass4,setmesspass4]=useState('')
	const [messpass5,setmesspass5]=useState('k co mat khau')
	const [newmess,setnewmess] = useState('')
	const [img,setimg]=useState('')


	useEffect(()=>{
		dispatch(fetchUser())
		
	},[dispatch])
	let id = useParams()

	const users = useSelector(state => state.get.users)
function tat(e){
	setmess('tat')
}

function active(e){
console.log(e)
	const a = {
		id:e._id
	}
	dispatch(sendactive(a))
	setredirect('ok')
}
if(redirect!==''){
	sessionStorage.setItem('signup','ok')
	return(
		<Redirect to='/checkemail'/>
		)
}
	function uploadz(e,v) {
           
             if(e==''){
               alert('please choose file')
             }
             else{
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
              }  const fileimage='http://localhost:5000/uploadimg/'+z
                setimg(fileimage)
               const up = {
                 avatar:fileimage,
                 id:v._id
               }
              
              dispatch(updateavatar(up))
               
               })
               
               
             }
           }
           function showimg(e,v){
           	if(e!==''){
           		return(
           			<img src={e} alt="avatar"/>
           			)
           	}else{
           		return(
           			<img src={v.avatar} alt="avatar"/>
           			)
           	}
           }
	function showmess(e){
	   if(mess===''){

	   	if(e!==''||e!==undefined){
	   			
				if(e.active==='no'){

					return(
				<div className='mess-flex'>
					<div onClick={(v)=>active(e)} className='mess'>chua active, vui long active</div>
					<span onClick={(e)=>tat(e)}>x</span>
				</div>
				)
				}
			}
		
	}
}
	function go(e){
		setgoi(e)
	}

	if(goi!==''){
		
		if(goi.role === 'admin'){
			return(
				<Redirect to='/admin'/>
				)
		}else{
			return(
				<Redirect to={'/channel/'+goi._id}/>
				)
		}
	}
	
	function out(){
		localStorage.clear();
		setouti('ok')
	}
	if(outi!==''){
		return(
			<Redirect to = '/sign'/>
			)
	}

	function update(e){
		if(submitclass!=='submit'&&disabled!==''&&type!=='date'&&cancelclass!=='cancel'&&updateclass!=='none'){
			setsubmitclass('submit')
		setdisabled('')
		settype('date')
		setcancelclass('cancel')
		setupdateclass('none')
		}else{
			setsubmitclass('none')
		setdisabled('disable')
		settype('text')
		setcancelclass('none')
		setupdateclass('')
		}
	}
	function updateemail(e){
		if(submitclassemail!=='submit'&&disabledemail!==''&&updateclassemail!=='none'&&cancelclassemail!=='cancel'){
			setsubmitclassemail('submit')
			setdisabledemail('')
			setupdateclassemail('none')
			setcancelclassemail('cancel')
		}else{
			setsubmitclassemail('none')
			setdisabledemail('disable')
			setupdateclassemail('')
			setcancelclassemail('none')
		}
	}
	function updatepass(e){
		if(submitclasspass!=='submit'&&disabledpass!==''&&updateclasspass!=='none'&&cancelclasspass!=='cancel'){
			setsubmitclasspass('submit')
			setdisabledpass('')
			setupdateclasspass('none')
			setcancelclasspass('cancel')
		}else{
			setsubmitclasspass('none')
			setdisabledpass('disable')
			setupdateclasspass('')
			setcancelclasspass('none')
		}
	}
	function updatett(e,v){

		let u,f,l,p,b;
		if(username===''){
			u = v.username
		}else{
			const findusern = users.filter(function(value){
				return value.username === username
			})
			if(findusern.length>0){
				setmessusername('username trung nhap lai')
				setmessclass('mess')
				setTimeout(()=>{
					setmessclass('none')
					setmessusername('')
				},3000)
				u = ''
			}else{
				setmessusername('')
				u = username
			}
		}
		if(fname===''){
			f =v.fname
		}else{
			f=fname
		}
		if(lname===''){
			l = v.lname
		}else{
			l = lname
		}
		if(phone===''){
			p = v.phone
		}else{
			p = phone
		}
		if(birth===''){
			b = v.birth
		}else{
			b = birth
		}
		e.preventDefault();
		if(u!==''){
			const add ={
			id:v._id,
			username:u,
			fname:f,
			lname:l,
			phone:p,
			birth:b
		}
		if(u!==localStorage.user){
			localStorage.user = u
			
		}
		dispatch(updateuser(add))
		setsubmitclass('none')
		setdisabled('disable')
		settype('text')
		setcancelclass('none')
		setupdateclass('')
	
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
	function updateemailx(e,v){
		e.preventDefault();
		let em;
		if(email===''){
			em = v.email
		}else{
			const findusern = users.filter(function(value){
				return value.email === email
			})
			if(findusern.length>0){
				setmessemail('email trung nhap lai')
				setmessclasse('mess')
				setTimeout(()=>{
					setmessclasse('none')
					setmessemail('')
				},3000)
				em = ''
			}else{
				setmessclasse('none')
				setmessemail('')
				em = email
			}
			
		}
		if(em!==''){
			if(em!==v.email){
						const add ={
						id:v._id,
						newemail:em
					}
					dispatch(updateemailsend(add))
					setok('ok')
				}else{
					setsubmitclassemail('none')
			setdisabledemail('disable')
			setupdateclassemail('')
			setcancelclassemail('none')
				}

		}
	}
	function showmessi(e){
	setTimeout(()=>{
		if(e!==''){
			setnewmess('')
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
	function updatepassx(e,v){
			e.preventDefault();
	
if(pass!==''){
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

	setnewmess(mess)
	
}else{
	
const add ={
	id:v._id,
	newpass:pass
}
dispatch(checkupdatepass(add))
setok('ok')
setnewmess('')
}
	}else{
		setsubmitclasspass('none')
			setdisabledpass('disable')
			setupdateclasspass('')
			setcancelclasspass('none')
	}
}

if(ok!==''){
	sessionStorage.setItem('signup','ok')
	return(
		<Redirect to='/checkemail'/>
		)
}
	if(users.length>0){
		const find = users.filter(function(value){
			return value.token === localStorage.token
		})
		
		if(find.length>0){
			if(find[0].username!==id.id){
				return(

					<Redirect to='/p404'/>
					)
			}
			let z;
			if(find[0].role === 'admin'){
				z='Admin DashBoard'
			}else{
				z='Go My Channel'
			}
			return(
				<div>
			<nav className="Nav">
		<div className="Nav-nho">
			<Link className='link' to='/'>Home</Link>
		<ul>
			<li onClick={(e)=>go(find[0])}>{z}</li>
			<li onClick={(e)=>out()}>Logout</li>
			
		</ul>
		</div>
		
	</nav>
	
		 <div className="sign-all">
        <div className="sign user">
         {showmess(find[0])}
         <div className='avatar'>
         	<div>{showimg(img,find[0])}</div>
         	<div className='upload'>
         		<label className='file' htmlFor='file'>
         			Upload :
         			
         		</label>
         		<input onChange={(e)=>uploadz(e.target.files[0],find[0])} id='file' type="file"/>
         	</div>

         </div>
       <div className='flex'>
       	  <h2>Thong Tin Ca Nhan: </h2>
       	 
         <div className='update'>
         	<p onClick={(e)=>update(e)} className={updateclass}>Update</p>
         	<p onClick={(e)=>update(e)} className={cancelclass}>Cancel</p>
         </div>
       </div>
       <form onSubmit={(e)=>updatett(e,find[0])}>
       	 <div className="sign-i">
       	 <div className={messclass}>{messusername}</div>
              <label htmlFor="username">Your Username: </label>
             <input onChange={(e)=>setusername(e.target.value)} type="text" id="username" defaultValue={find[0].username} disabled={disabled} required/>
            </div>
       		 <div className="sign-i">
              <label htmlFor="fname">Your First Name: </label>
             <input onChange={(e)=>setfname(e.target.value)} type="text" id="fname" defaultValue={find[0].fname} disabled={disabled} required/>
            </div>
       	  <div className="sign-i">
              <label htmlFor="lname">Your Last Name: </label>
             
              <input onChange={(e)=>setlname(e.target.value)} type="text" id="lname" defaultValue={find[0].lname} disabled={disabled} required/>
            </div>
            <div className="sign-i">
              <label htmlFor="Phone">Your Phone Number: </label>
             
              <input onChange={(e)=>setphone(e.target.value)} type="text" id="phone" defaultValue={find[0].phone} disabled={disabled} required/>
            </div>
            <div className="sign-i">
              <label htmlFor="lname">Your BirthDay: </label>
             
              <input onChange={(e)=>setbirth(e.target.value)} type={type} id="lname" defaultValue={find[0].birth} disabled={disabled} required/>
            </div>
            <input className={submitclass} type="submit" value="Update" />
       </form>
        </div>
         <div className="sign user email">
       <div className='flex'>
       	  <h2>Email: </h2>
         <div className='update'>
         	<p onClick={(e)=>updateemail(e)} className={updateclassemail}>Update</p>
         	<p onClick={(e)=>updateemail(e)} className={cancelclassemail}>Cancel</p>
         </div>
       </div>
       <form onSubmit={(e)=>updateemailx(e,find[0])}>
       
       		 <div className="sign-i">
       		  <div className={messclasse}>{messemail}</div>
              <label htmlFor="fname">Your Email: </label>
             <input onChange={(e)=>setemail(e.target.value)} type="text" id="fname" defaultValue={find[0].email} disabled={disabledemail} required/>
            </div>
       	 
            <input className={submitclassemail} type="submit" value="Update" />
       </form>
        </div>
         <div className="sign user email">
       <div className='flex'>
       	  <h2>Password: </h2>
         <div className='update'>
         	<p onClick={(e)=>updatepass(e)} className={updateclasspass}>Update</p>
         	<p onClick={(e)=>updatepass(e)} className={cancelclasspass}>Cancel</p>
         </div>
       </div>
       <form onSubmit={(e)=>updatepassx(e,find[0])}>
       {showmessi(newmess)}
       		 <div className="sign-i">
              <label htmlFor="fname">Your Password: </label>
              {showpasscheck()}
             <input onChange={(e)=>checkpass(e.target.value)} type="text" id="fname" defaultValue={find[0].pass} disabled={disabledpass} required/>
            </div>
       	 
            <input  className={submitclasspass} type="submit" value="Update" />
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

export default User