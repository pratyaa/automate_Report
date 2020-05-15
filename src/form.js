import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './form.css'

class Form extends Component {
	constructor()
	{
		super();
		this.state={Addressed_Authority:"Addressed Authority",Department:"Department",Location:"Location",Date:"Date",Subject:"Subject",
		Content:"---Content----",Name:"Name",Designation:"Designation"};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange=(event)=>{
		var x =event.target.name;
		if(event.target.value)
		this.setState({[x]:event.target.value});
	    else
	    	this.setState({[x]:[x]})

		
	}

	

	render()
	{
		
     
		return(
			 <div className="top">

			 
            <div className="forms"> 
			 <form>
					 <p> Addressed To :</p>
					   <input type="text" onChange={this.handleChange} name="Addressed_Authority"/>
					 <br/>
					 <p> Department :</p>
					 <input type="text" onChange={this.handleChange} name="Department" />
					 <br/>
					  <p> Location:</p>
					 <input type="text" onChange={this.handleChange} name="Location" />
					 <br/>
					  <p> Date:</p>
					 <input type="date" onChange={this.handleChange} name="Date" />
					 <br/>
					  <p> Subject:</p>
					 <textarea onChange={this.handleChange} name="Subject" />
					 <br/>
					 <p> Content:</p>
					 <textarea onChange={this.handleChange} name="Content" />
					 <br/>
					 <p> Name:</p>
					 <input type="text" onChange={this.handleChange} name="Name" />
					<br/>
					 <p> Designation:</p>
					 <input type="text" onChange={this.handleChange} name="Designation" />
					 <br/>
			   
			  </form>
			 </div>

			  <div className="preview">
				 <p>To</p>
				 
				  <p> {this.state.Addressed_Authority}</p>


				 <p> {this.state.Department}</p>
				 <p>{this.state.Location}</p>
				 <br/>
				 <p>Date :{this.state.Date}</p>
				 <p>Subject: {this.state.Subject}</p>
				 <p>Respected Sir/Ma'am </p>
				 <p style={{height:"100px"}}>{this.state.Content}</p>
				 <p>{this.state.Name}</p>
				 <p>{this.state.Designation}</p>

				 

				 
			 </div>

			 </div>


			);
	}
}

export default Form;