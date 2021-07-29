import React, { Component } from 'react';
import "./Load-file/Loader.css";
import Loader from './Load-file/Loader';

class Products extends Component {
    state = { loader: true };
    componentDidMount() {
            setTimeout(() => this.setState({ loader: false }), 2000);
    }
    render() {
        return (
            <>
            {this.state.loader ? (
                    <Loader></Loader>
                ) : (
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
            )}
           </>   
        );
    }
}

export default Products;
