import React, { Component } from 'react';
import Products from "./products.jsx";
import ProductDetails from "./product-details.jsx";
import "./App.css";


class App extends Component {
    state={
      currentproduct:null,
      list: [
        {
          Name:'Coca-cola',
          Description:'2 Liters',
          Price: '110 ',
          Category: 'Drink'
        },
        {
          Name:'Pringles',
          Description:'500 gm',
          Price: '350',
          Category: 'Snacks'
        },
        {
          Name:'Snickers',
          Description:'50 gm',
          Price: '85',
          Category: 'Cocolate'
        },
      ],
     
      
    };
   

    selectProduct = (data) =>{
      this.setState({...this.state,currentproduct :data});
      
    };

    backButton=()=>{
      this.setState({...this.State,currentproduct : null});
      
    };

    
  render() {
    return (
      <div>
        { !this.state.currentproduct ? (
                  < Products 
                  list={this.state.list} 
                  selectProduct={this.selectProduct}
               
                 />
        
        ) : (
          <ProductDetails 
          currentproduct={this.state.currentproduct} 
          backButton={this.backButton}
         
          />
      
       )}
      </div>
    );
  }
}


export default App;
