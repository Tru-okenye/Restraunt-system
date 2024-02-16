import React, {useState} from 'react';
import Mainmenu from './Mainmenu';
import About from './About';
import ContactForm from './Contact';
import Chefs from './Chefs';
import Restraunt from './Restraunt';
import './App.css';
import Home from './Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App () {
   
return (
  <main>
   
<BrowserRouter >
<Routes>
        <Route path="/" element={<Home/>} >
          <Route index element={<Restraunt />} />
        <Route path="menu" element={<Mainmenu/>}/>
        <Route path="menu/:category" element={<Mainmenu />} />
          <Route path="About" element={<About/>}/>
          <Route path="contact" element={<ContactForm/>}/>
          <Route path="chefs" element={<Chefs/>}/>

        </Route>
      
</Routes>
    </BrowserRouter>


  </main>
)

};

export default App;





// import React from 'react';
// import Home from './Home';

// import Sidebar from './Sidebar';

// function App() {
//     return (
//         <section>
//             <Home/>
          
//            <Sidebar/>
//         </section>
        
//     )
// };
// export default App;
