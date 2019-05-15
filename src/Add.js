import React from 'react';
import './App.css';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";



class Add extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit= this.onSubmit.bind(this);
  } 
onSubmit(event) {
  event.preventDefault();
  this.props.onAdd(this.nameInput.value, this.priceInput.value);
  this.nameInput.value = '';
  this.priceInput.value = '';
  
}
componentDidMount() {
  const options = {
    onOpenStart: () => {
      console.log("Open Start");
    },
    onOpenEnd: () => {
      console.log("Open End");
    },
    onCloseStart: () => {
      console.log("Close Start");
    },
    onCloseEnd: () => {
      console.log("Close End");
    },
    inDuration: 250,
    outDuration: 250,
    opacity: 0.5,
    dismissible: false,
    startingTop: "4%",
    endingTop: "10%"
  };
  M.Modal.init(this.Modal, options);
}

  render() {
    
    
   
    
      
       
          return (
            <div class="container">
            <div class="fixed-action-btn">
  <a class="btn-floating btn-large red modal-trigger" data-target="modal1">
  <i class="material-icons modal-close ">add</i>
  </a>
  
</div>
    
        
        

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
            
            <div class="container">
            <div class="modal-content">
           <button class=" btn3 modal-close"><i class="material-icons">close</i></button>
            <form onSubmit={this.onSubmit}>
            
            <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
            <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} />
            <button class="modal-close waves-effect waves-light btn">Add</button>
           
            
            </form>
            
         
            </div>
            </div>
            
           
            </div>
            </div>
            );
            }
           
        
      
    
    
  

    
}

export default Add;
