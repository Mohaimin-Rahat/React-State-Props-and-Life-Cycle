import React, { useState, useEffect } from "react";
import "./Load-file/Loader.css";
import Loader from './Load-file/Loader';
import { useHistory } from "react-router-dom";

const Products = ({ list }) => {

    const history = useHistory();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, []);

    const selectProduct = (key) => {
        history.push(`/product-details/${key}`);
    };

        return (
            <>
            {loader ? (
                    <Loader></Loader>
                ) : (
            <div>
                {list.map((product, index) =>{
                  return(
                     <div
                      style={{
                        marginBottom:'100 px',
                        padding:'20px',
                        border:'1px solid green',
                    }}
                        key={index}
                        onClick={()=>selectProduct(index)}>
                            <p>Product Name: {product.Name}</p>
                         </div>
                  )
                }
                )}
            </div>
            )}
           </>   
        );
    
}

export default Products;
