import React, { Component } from 'react';
import "./Load-file/Loader.css";



class ProductDetails extends Component {
    componentWillUnmount() {
        setTimeout(() => {
            this.props.loaderUnloading();
        }, 1000);
    }
    render() {
        return (
            <div
            
                style={{
                        marginBottom:'100 px',
                        padding:'50px',
                        border:'1px solid blue',
                    }}>
                <p>Product Name: {this.props.currentproduct?.Name }</p>
                <p>Product Description: {this.props.currentproduct?.Description }</p>
                <p>Product Price: {this.props.currentproduct?.Price }</p>
                <p>Product Category: {this.props.currentproduct?.Category }</p>

                <button onClick={this.props.backButton}>Return</button>
            </div>
        );
    }
}

export default ProductDetails;