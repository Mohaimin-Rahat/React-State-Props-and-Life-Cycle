import React, { Component } from 'react';
import Loader from './Load-file/Loader';
import "./Load-file/Loader.css";


class ProductDetails extends Component {
    state = { loader: true };

    componentDidMount() {

        setTimeout(() => this.setState({ loader: false }), 1000);
    }
    render() {
        
        return (
            <>
            {this.state.loader ? (
                    <Loader></Loader>
                ) : (
            <div
            
                style={{
                        marginBottom:'100 px',
                        padding:'50px',
                        border:'1px solid green',
                    }}>
                <p>Product Name: {this.props.currentproduct?.Name }</p>
                <p>Product Description: {this.props.currentproduct?.Description }</p>
                <p>Product Price: {this.props.currentproduct?.Price }</p>
                <p>Product Category: {this.props.currentproduct?.Category }</p>

                <button onClick={this.props.backButton}>Return</button>
            </div>
            
            )}

          </>
        );  
    }


}

export default ProductDetails;