
import React from 'react'
import '../css/index.css'
import {BrowserRouter} from 'react-router-dom'
import URL from '../components/URL/url'
import{Provider} from 'react-redux';
import store from '../redux/store';

function App(){

  return(
    <Provider store={store}>
    <BrowserRouter>
      <URL/>
    </BrowserRouter>
     </Provider>
    )
 
}

export default App;
