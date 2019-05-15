import React from 'react';
import './App.js';
import Contact from './Contact';

class ContactList extends React.Component {

    constructor(){
        super();
        this.state = {
            search: 'Level Up'
        };
    }
    updateSearch(event) {
        this.setState({search: event.target.value});
    }
    render() {
        return (
            <div>
               <input type="text"
               value={this.state.search}
               onChange={this.updateSearch.bind(this)}/>
            </div>
            
        )
    }
}
export default ContactList;