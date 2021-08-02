import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Loader from './Load-file/Loader';
import "./Load-file/Loader.css";


const ProductDetails = ({list}) => {

    const [loader, setLoader] = useState(true);
    const {key} = useParams();
    const history= useHistory();
    const [currentproduct, setCurrentProduct] = useState();

    useEffect(() => {
        setTimeout(() =>setLoader(false),2000);
        setCurrentProduct(list.find(product =>product.key === key));
    }, []);

    
    const backButton= () => {   
        history.push("/");
    };
     
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
