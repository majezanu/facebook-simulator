import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVideo, 
        faTicketAlt, 
        faClock, 
        faFileInvoiceDollar,
        faHeart,
        faTrash} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHear} from '@fortawesome/free-regular-svg-icons';
import RouterSwitch from './components/organisms/Router/Router';

library.add(
  faVideo, 
  faTicketAlt, 
  faClock, 
  faFileInvoiceDollar, 
  faHeart, 
  regularHear,
  faTrash);
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <div className='App-header'>
          <RouterSwitch></RouterSwitch>
      </div>
      
    </div>
  );
}

export default App;
