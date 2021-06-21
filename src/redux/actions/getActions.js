import{FETCH_VIDEO,NEW_VIDEO,FETCH_USER,NEW_USER,FETCH_CHANNEL,NEW_CHANNEL} from '../actions/types'




//user
export const fetchUser = ()=>dispatch=>{
    
        fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(users => dispatch({
          type:FETCH_USER,
          payload:users,
         
      }));
     
    }
export const newUser = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/add',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(user=>dispatch({
        type:NEW_USER,
        payload:user
    }))
     
    }
export const deleteuser=id=>dispatch=>{
    fetch('http://localhost:5000/user/' + id, {
        method: 'DELETE',
      })
      .then(res => res.json()) 
}

export const updateuseradmin = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/updateuser/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }


export const active = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/active/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }


    export const forget = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/forget/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

        export const change = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/change/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

         export const sendactive = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/sendactive/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

           export const updateuser = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/update/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }


           export const updateemailsend = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/updateemail/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

           export const confirmemail = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/confirmemail/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

      export const checkupdatepass = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/checkupdatepass/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

    export const confirmpass = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/confirmpass/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }
   

    export const updateavatar = user=>dispatch=>{
    
        fetch('http://localhost:5000/user/avatar/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }
   

   //channel

    export const fetchChannel = ()=>dispatch=>{
    
        fetch('http://localhost:5000/channel')
      .then(res => res.json())
      .then(channels => dispatch({
          type:FETCH_CHANNEL,
          payload:channels,
         
      }));
     
    }

    export const newChannel = channel=>dispatch=>{
    
        fetch('http://localhost:5000/channel/add',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(channel)
    })
    .then(res=>res.json())
    .then(channel=>dispatch({
        type:NEW_CHANNEL,
        payload:channel
    }))
     
    }
export const deletechannel=id=>dispatch=>{
    fetch('http://localhost:5000/channel/' + id, {
        method: 'DELETE',
      })
      .then(res => res.json()) 
}

    //video

    export const fetchVideo = ()=>dispatch=>{
    
        fetch('http://localhost:5000/uploadall')
      .then(res => res.json())
      .then(videos => dispatch({
          type:FETCH_VIDEO,
          payload:videos,
         
      }));
     
    }

       export const newVideo = video=>dispatch=>{
    
        fetch('http://localhost:5000/uploadall/add',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(video)
    })
    .then(res=>res.json())
    .then(video=>dispatch({
        type:NEW_VIDEO,
        payload:video
    }))
     
    }

export const deletevideo=id=>dispatch=>{
    fetch('http://localhost:5000/uploadall/' + id, {
        method: 'DELETE',
      })
      .then(res => res.json()) 
}