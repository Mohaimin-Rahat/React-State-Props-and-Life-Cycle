import React, { useState, useEffect } from "react";
import "./Load-file/Loader.css";
import Loader from './Load-file/Loader';

const Products = ({ list, selectProduct }) => {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, []);

        return (
            <>
            {loader ? (
                    <Loader></Loader>
                ) : (
            <div>
                {list.map((product) =>{
                  return(
                     <div
                      style={{
                        marginBottom:'100 px',
                        padding:'20px',
                        border:'1px solid green',
                    }}
                        onClick={()=>selectProduct(product)}>
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
