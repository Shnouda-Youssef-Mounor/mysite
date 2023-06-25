import React, { Component } from 'react';
import NavBar from './navbar';
import { Route, Routes } from 'react-router-dom';
//import { Route, Switch } from "react-router-dom";

import Welcome from './welcome';
import Skills from './skills';
import Contact from './contact';

class App extends Component {
    state = {}
    render() {
        return ( 
<div>
<NavBar/>

<main className='Container'>
        

               <Routes>
               <Route path='/home' element={<Welcome/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contact' element={<Contact/>} />
               </Routes>
            
        </main>
           

</div>           
             
                
       
           
            


      
        );
    }
}

export default App;