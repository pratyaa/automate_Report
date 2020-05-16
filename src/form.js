import React,{Component} from 'react';
import {Card,CardText} from 'reactstrap';
import './form.css'

class Form extends Component {
	constructor()
	{
		super();


		this.state={Date:"Date",Audience:"Audience",Topic:"Topic",Date_of_event:"Date_of_event",Time:"Time",Venue:"Venue"};

		

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange=(event)=>
	{

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
            <h3>Enter details of application</h3>
			 <form>
					
					 
					  <p> Date:</p>
					 <input type="date" onChange={this.handleChange} name="Date" />
					 <br/>
					 
					 <p> Audience:</p>
					 <input type="text" onChange={this.handleChange} name="Audience" />
					<br/>
					 <p> Topic:</p>
					 <input type="text" onChange={this.handleChange} name="Topic" />
					 <br/>
					 <p> Date_of_event:</p>
					 <input type="date" onChange={this.handleChange} name="Date_of_event" />
					 <br/>
					 <p> Venue:</p>
					 <input type="text" onChange={this.handleChange} name="Venue" />
					 <br/>
			   
			  </form>
			 </div>
			 <div>
			 <h3>Preview</h3>
			 <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
			  <div className="preview">

				 <CardText>To</CardText>
				 
				 <CardText> Head of Department</CardText>
				 <CardText> Information Technology</CardText>
				 <CardText>SGSITS,Indore</CardText>
				 <br/>
				
				 
				 <CardText>
				 Date :{{this.state.Date}==="Date" ? <span className="light">{this.state.Date}</span> : <span>{this.state.Date}</span>}
				 </CardText>
				 



				 <br/>
				 <CardText>Subject: Persmission for #inlcude sessions</CardText>
				 <CardText>Respected Ma'am </CardText>
				 <CardText>We at #include are planning a session for {this.state.Audience}. The session will be based on {this.state.Topic}.
 					We would like to seek your permission to allow us to conduct session on following date, time and venue.</CardText>

				   <CardText>	Date: {this.state.Date_of_event}</CardText>
					<CardText>Time: {this.state.Time}</CardText>
					<CardText>Venue:{this.state.Venue}</CardText>

					<CardText>Kindly grant us permission for above mentioned session.</CardText>
					<br/>

					<CardText>Thank You</CardText>
					<CardText>Team #include</CardText>

				 

				 </div>
				</Card>
				</div>

			 </div>


			);
	}
}

export default Form;