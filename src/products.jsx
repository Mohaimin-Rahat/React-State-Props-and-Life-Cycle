import React, { Component } from 'react';
import "./Load-file/Loader.css";

class Products extends Component {
    componentWillUnmount() {
        setTimeout(() => {
            this.props.loaderUnloading();
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.props.list.map((product) =>{
                  return(
                     <div
                      style={{
                        marginBottom:'100 px',
                        padding:'10px',
                        border:'1px solid blue',
                    }}
                        onClick={()=> this.props.selectProduct(product)}>
                            <p>Product Name: {product.Name}</p>
                         </div>
                  )
                }
                )}
            </div>
        );
    }
}

export default Products;