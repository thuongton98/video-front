import{FETCH_VIDEO,NEW_VIDEO,FETCH_USER,NEW_USER,FETCH_CHANNEL,NEW_CHANNEL} from '../actions/types'




//user
export const fetchUser = ()=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user')
      .then(res => res.json())
      .then(users => dispatch({
          type:FETCH_USER,
          payload:users,
         
      }));
     
    }
export const newUser = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/add',{
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
    fetch('https://thuongtube.tk/api/video/user/' + id, {
        method: 'DELETE',
      })
      .then(res => res.json()) 
}

export const updateuseradmin = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/updateuser/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }


export const active = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/active/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }


    export const forget = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/forget/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

        export const change = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/change/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

         export const sendactive = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/sendactive/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

           export const updateuser = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/update/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }


           export const updateemailsend = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/updateemail/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

           export const confirmemail = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/confirmemail/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

      export const checkupdatepass = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/checkupdatepass/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }

    export const confirmpass = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/confirmpass/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }
   

    export const updateavatar = user=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/user/avatar/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

   
     
    }
   

   //channel

    export const fetchChannel = ()=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/channel')
      .then(res => res.json())
      .then(channels => dispatch({
          type:FETCH_CHANNEL,
          payload:channels,
         
      }));
     
    }

    export const newChannel = channel=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/channel/add',{
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
    fetch('https://thuongtube.tk/api/video/channel/' + id, {
        method: 'DELETE',
      })
      .then(res => res.json()) 
}

    //video

    export const fetchVideo = ()=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/uploadall')
      .then(res => res.json())
      .then(videos => dispatch({
          type:FETCH_VIDEO,
          payload:videos,
         
      }));
     
    }

       export const newVideo = video=>dispatch=>{
    
        fetch('https://thuongtube.tk/api/video/uploadall/add',{
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
    fetch('https://thuongtube.tk/api/video/uploadall/' + id, {
        method: 'DELETE',
      })
      .then(res => res.json()) 
}