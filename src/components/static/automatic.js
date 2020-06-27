import React, {Component} from 'react';
import Create from './create.js'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



class Automate extends Component{
    constructor(){
    	super();
    	this.state={
    		mystring:" ",
            clicked:false
    	};

    }
    handleChange=(event)=>
    {
      this.setState({ mystring : event.target.value});
    }
    buttonClick=()=>
    {
        this.setState({clicked:true}); 
    }
    
	render()
	{
		return(
		<div>
		<TextareaAutosize style={{width:"80%",margin:"5px"}} rowsMin={5} placeholder="Type preview of your doc with variable values inside {{ }}" id="tex"  onChange={this.handleChange} />
        
        <button type="button"  onClick={this.buttonClick}>  Create</button>
        
        { (this.state.clicked)?<Create str={this.state} />:<p></p> }
        </div>
        );
	}
}

export default Automate;