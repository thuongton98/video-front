import {Route,Switch} from 'react-router-dom'
import React from 'react'
import home from '../Page/home'
import p404 from '../Page/p404'
import sign from '../Page/sign.js'
import Checkuser from '../Route/checkuser'
import checkemail from '../Page/checkemail'
import CheckemailRoute from '../Route/checkemailroute'
import active from '../Page/active'
import forget from '../Page/forget'
import changepass from '../Page/changepass'
import user from '../Page/user'
import changeemail from '../Page/changeemail'
import checkupdatepass from '../Page/checkupdatepass'
import admin from '../Page/admin'
import AdminRoute from '../Route/adminRoute'
import soon from '../Page/soon'
import channel from '../Page/channel'
import video from '../Page/video'

function URL(){

	return(
		<Switch>
			<Route exact path = '/' component={home}/>
			<Route path = '/sign' component={sign}/>
			<CheckemailRoute path = '/checkemail' component={checkemail}/>
			<Route path = '/active/:id' component={active}/>
			<Route path = '/forget' component={forget}/>
			<Route path = '/changepass/:id' component={changepass}/>
			<Checkuser path='/channel/:id' component={channel}/>
				<Checkuser path = '/user/:id' component={user}/>
			<Route path='/video/:id' component={video}/>
			<Route path ='/changeemail/:id' component={changeemail}/>
			<Route path ='/checkupdatepass/:id' component={checkupdatepass}/>
			<AdminRoute path = '/admin' component={admin}/>
			<Route path='/soon' component={soon}/>
			<Route component ={p404}/>
			
		</Switch>
		)
}


export default URL