import React from 'react';
import './App.css';
import M from 'materialize-css';



class Delete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    
    };
    this.onDelete= this.onDelete.bind(this);
    this.onEdit= this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  } 
onDelete() {
  const { onDelete, name } = this.props;
  onDelete(name);
}
onEdit() {
  this.setState({ isEdit: true});
}
onEditSubmit(event) {
  event.preventDefault();
  this.props.onEditSubmit(this.nameInput.value, this.priceInput.value);
  this.setState({ isEdit: false});
}

  render() {
    
    const { name, price } = this.props;
    
   
    
      
       
          return (
           
            this.state.isEdit ? (
              <div  class="container">
              <div>
               <form onSubmit={this.onEditSubmit}>
              
              <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
              <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price} />
              <div>
              <button >Save</button>
              </div>
              
              
              
              </form></div>
              </div>
            )
            :
            ( 
            <div  class="container row">
            <table class="highlight responsive-table">
            
              
              <tbody>
              
            <tr class="col s12" key ={name}>
            <td class="col s3"><h5>{name}</h5></td>
            <td class=""><h5 class="h1">{price}</h5></td>
            <button class="btn waves-effect waves-light red btn1 fixed"  onClick={this.onDelete}>Delete</button>
          
            <button class="btn waves-effect waves-light btn2"  onClick={this.onEdit}>Edit</button>
            </tr>
            
            </tbody>
            </table>
             </div>
             )
             
            );
            }
           
        
      
    
    
  

    
}

export default Delete;
