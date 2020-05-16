import React,{Component} from 'react';
import { Card,Button} from 'react-bootstrap';
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
			 <div className="sub_top">

			 <div>
                <Card className="card_style">
            	    <Card.Title style={{paddingBottom:"1vw", fontSize:"1.2em"}}><b>Enter details of application</b></Card.Title>
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
			  	</Card>
			  </div>

			 
			 <div className="preview">
				 <h3>Preview</h3>
				 <Card body inverse style={{ backgroundColor: 'white', borderColor: '#e6e6e6',color:'black', padding:'1vw' }}>
					  <Card.Body>

							 <Card.Text>To</Card.Text>
							 
							 <Card.Text> Head of Department</Card.Text>
							 <Card.Text> Information Technology</Card.Text>
							 <Card.Text>SGSITS,Indore</Card.Text>
							 <br/>
							
							 <Card.Text>
							 Date :{this.state.Date==="Date" || this.state.Date==="" ? <span className="light">{this.state.Date}</span> : <span>{this.state.Date}</span>}
							 </Card.Text>
							 
							<br/>
							 <Card.Text>Subject: Persmission for #inlcude sessions</Card.Text>
							 <Card.Text>Respected Ma'am </Card.Text>
							 <Card.Text>We at #include are planning a session for {this.state.Audience==="Audience" || this.state.Audience===""? <span className="light">{this.state.Audience}</span> : <span>{this.state.Audience}</span>}. 
							     The session will be based on {this.state.Topic==="Topic" ? <span className="light">{this.state.Topic}</span> : <span>{this.state.Topic}</span>}.
			 					We would like to seek your permission to allow us to conduct session on following date, time and venue.</Card.Text>

							 <Card.Text>	Date: {this.state.Date_of_event==="Date_of_event" ? <span className="light">{this.state.Date_of_event}</span> : <span>{this.state.Date_of_event}</span>}</Card.Text>
								<Card.Text>Time: {this.state.Time==="Time" ? <span className="light">{this.state.Time}</span> : <span>{this.state.Time}</span>}</Card.Text>
							<Card.Text>Venue: {this.state.Venue==="Venue" ? <span className="light">{this.state.Venue}</span> : <span>{this.state.Venue}</span>}</Card.Text>

							<Card.Text>Kindly grant us permission for above mentioned session.</Card.Text>
								<br/>

							<Card.Text>Thank You</Card.Text>
							<Card.Text>Team #include</Card.Text>
							<div style={{alignItems:"right"}}>

								<Button style={{backgroundColor:"rgb(51, 204, 255,0.8)", padding:"1vw"}}>   Download </Button>

							</div>
						</Card.Body>
					</Card>
				</div>

				</div>
				</div>


			);
	}
}

export default Form;