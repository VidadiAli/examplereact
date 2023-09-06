/*import React, { Component } from 'react';
import Userinfor from './companents/user';

import './App.css';

class App extends Component {

  
  render() {
    var ixtisasList1 = [
      {id: 1, title: "K.e"},
      {id: 2, title: "i"},
      {id: 3, title: "c.o"},
      {id: 4, title: "t"}
    ], 
    ixtisasList2 = [
      {id: 1, title: "alma"},
      {id: 2, title: "dhd"},
      {id: 3, title: "898uh"},
      {id: 4, title: "ndjj"}, 
      {id: 4, title: "bhdhh"}
    ]
    return (
      <div className="App">
        <Userinfor ad = "Vidadi" soyad = "Ali" ixtisas = {ixtisasList1} adress = {{rayon: "Hazar", qasabe : "Buzovna"}}/>
        <Userinfor ad = "Tural" soyad = "Vali" ixtisas = {ixtisasList2} adress = {{rayon: "Hazar", qasabe : "Buzovna"}}/>
      </div>
    );
  }
}

export default App;
*/

import React, { Component } from 'react';
import ProductsList from './companents/products/ProductsList';

import './App.css';

class App extends Component {

  
  render() {
    return(
      <div>
        <ProductsList/>
      </div>
    );
  }
}

export default App;