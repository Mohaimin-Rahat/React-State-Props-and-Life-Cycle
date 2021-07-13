import React, { Component } from 'react';
import Products from './products';
import ProductDetails from './product-details';
import "./Load-file/Loader.css";
import Loader from './Load-file/Loader';

class App extends Component {
    state={
      loader: false,
      list: [
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
      ],
      currentproduct:null,
      
    };
    componentDidMount() {
      setTimeout(() => {
          this.setState({ ...this.state, loader: true });
      }, 1000);
  }

    selectProduct = (data) =>{
      this.setState({...this.state,currentproduct :data});
      this.loaderLoading();
    };

    backButton=()=>{
      this.setState({...this.State,currentproduct : null});
      this.loaderLoading();
    };

    loaderLoading = () => {
      this.setState((change) => ({ ...this.State,loader: !change.loader }));
    };

  loaderUnloading = () => {
      this.setState((change) => ({...this.State,loader: !change.loader }));
  };

  render() {
    return (
      <div>
        {this.state.loader ? (
                    <Loader/>
                ) : this.state.currentproduct ? (
                  < Products list={this.state.list} 
                  selectProduct={this.selectProduct}
                  loaderUnloading={this.loaderUnloading}/>
        
        ) : (
          <ProductDetails currentproduct={this.state.currentproduct} 
          backButton={this.backButton}
          loaderUnloading={this.loaderUnloading}/>
      
       )}
      </div>
    );
  }
}


export default App;
