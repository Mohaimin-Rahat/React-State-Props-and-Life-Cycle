import { useState } from "react";
import Products from "./products.jsx";
import ProductDetails from "./product-details.jsx";
import "./App.css";

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
  const [currentproduct, setCurrentProduct] = useState(null);

    const selectProduct = (product) => {
      setCurrentProduct(product);
  };
    const backButton = () => {
      setCurrentProduct(null);
  };
    return (
      <div>
        { currentproduct ? (
          <ProductDetails 
                        currentproduct={currentproduct} 
                        backButton={backButton}
          />
        ) : (
          < Products 
                  list={list} 
                  selectProduct={selectProduct}    
         />
       )}
      </div>
    );
  
}


export default App;

