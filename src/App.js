import { useState } from "react";
import "./App.css";
import Products from "./products.jsx";
import ProductDetails from "./product-details.jsx";
import { Switch, Route } from "react-router-dom";


function App() {
  const [ list, setList] = useState(
       [
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
      ] 
  );

    return (
      <div>
           
               <Switch>
                     <Route exact path="/">
                          <Products list={list}></Products>
                    </Route>
                    <Route path="/products">
                        <Products list={list}></Products>
                    </Route>
                    <Route path="/product-details/:key">
                        <ProductDetails list={list}></ProductDetails>
                    </Route>
                    <Route  path="*">
                         <h1>404</h1>
                         <h2>Page Not Found</h2>
                    </Route>
                </Switch>
            
        </div>
    );
  
}


export default App;


