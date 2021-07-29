import React, { useState, useEffect } from "react";
import Loader from './Load-file/Loader';
import "./Load-file/Loader.css";


const ProductDetails = ({currentproduct,backButton}) => {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() =>setLoader(false),2000);
    }, []);

     
        return (
            <>
            {loader ? (
                    <Loader></Loader>
                ) : (
            <div
            
                style={{
                        marginBottom:'100 px',
                        padding:'50px',
                        border:'1px solid green',
                    }}>
                <p>Product Name: {currentproduct?.Name }</p>
                <p>Product Description: {currentproduct?.Description }</p>
                <p>Product Price: {currentproduct?.Price }</p>
                <p>Product Category: {currentproduct?.Category }</p>

                <button onClick={backButton}>Return</button>
            </div>
            
            )}

          </>
        );  
    


}

export default ProductDetails;
