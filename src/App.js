import React from 'react';
import './App.css';
import Delete from './Delete';
import Add from './Add';


  let products = [{
  name: 'iPad',
  phone: '200'
}, {
  name: 'iPhone',
  no: '650'
}];
if(!localStorage.getItem('products') || JSON.parse(localStorage.getItem('products')).length === 0){
localStorage.setItem('products', JSON.stringify(products));
}

class App extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    products: JSON.parse(localStorage.getItem('products'))
  };
  this.onDelete = this.onDelete.bind(this);
  this.onAdd = this.onAdd.bind(this);
  this.onEditSubmit = this.onEditSubmit.bind(this);
  

}
  componentWillMount() {
    const products = this.getProduct();
    this.setState({products});
  }
  getProduct() {
    return this.state.products;
    
  }
  onAdd(name, price) {
    const products = this.getProduct();
    products.push({
      name,
      price
    });
this.setState({ products});

  }
  onDelete(name) {
    const products = this.getProduct();
    const filteredProduct = products.filter(product => {
      return product.name !== name;
    });
    this.setState({ products: filteredProduct});
  }
  onEditSubmit(name, price) {
    let products = this.getProduct();
    products = products.map(product => {
      if (product.name === name) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({ products});
  }
  render() {
    
    return(
      <div  class="container" className="App">
       <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Manager</a>
      
    </div>
  </nav>
  <br></br>
  <br></br>
      <Add onAdd={this.onAdd}></Add>
      { 
        this.state.products.map(product => {
          return (
            <Delete key ={product.name}
              name = {product.name}
             price ={product.price}
             onDelete={this.onDelete}
             onEditSubmit={this.onEditSubmit}
             >
            </Delete>
           
            
            );
            })
           
        
      
    
    
  
}
</div>
    )};
}

export default App;
