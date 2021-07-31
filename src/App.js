import React from 'react'
import './App.css';

import Leftsidebar from './components/leftsidebar/index.js'
import Newpost from '../src/components/newpost/index.js'
import Post from '../src/components/post/index.js'
import Rightside from '../src/components/rightsidebar/index'
import Menu from '../src/components/menu/index'

function App() {
  return (
    <div className="App">  
      <div className="leftSide">
        <Leftsidebar/>
      </div>
      <main> 
        <div className="menuBar">
          <Menu/>
        </div>
       
        <ul>
          <li><Newpost/></li> 
          <li><Post/></li>
          <li><Post/></li>
          <li><Post/></li>
          <li><Post/></li>
          <li><Post/></li>
          <li><Post/></li>
        </ul>        
      </main>
      <div className="rightSide">
        <Rightside/>
      </div>
    </div>
  );
}

export default App;
