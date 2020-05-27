import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReactToPdf from 'react-to-pdf';
import './form.css'

const ref = React.createRef();

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Date: "",
            Audience: "Audience",
            Topic: "Topic",
            Date_of_event: "",
            Time: "Time",
            Venue: "Venue"
        };
    }


     handleChange = (event) => {
        const labell = event.target.name;
        if (event.target.value) {
            this.setState({[labell]: event.target.value});
        } else {
            this.setState({[labell]: labell})
        }
    }

    render() {
        return (
            <div className="top">
                <div className="sub_top">
               
                   
                        <div className="first">
                            <form>
                                <TextField
                                    onChange={this.handleChange}
                                    name="Date"
                                    type="text"
                                    InputLabelProps={{ shrink: true }}
                                    label="Date"
                                    variant="outlined"
                                    color="rgb(191, 191, 191,0.4)"
                                /><br/><br/>
                                <TextField
                                    onChange={this.handleChange}
                                    name="Audience"
                                    label="Audience"
                                    variant="outlined"
                                    color="rgb(191, 191, 191,0.4)"
                                /><br/><br/>
                                   <TextField
                                    onChange={this.handleChange}
                                    name="Topic"
                                    label="Topic"
                                    variant="outlined"
                                    color="rgb(191, 191, 191,0.4)"
                                /><br/><br/>
                                   
                                   <TextField
                                    onChange={this.handleChange}
                                    name="Date_of_event"
                                    type="date"
                                    label="Date of event"
                                    InputLabelProps={{ shrink: true }}
                                    variant="outlined"
                                    color="rgb(191, 191, 191,0.4)"
                                /><br/><br/>
                                   <TextField
                                    onChange={this.handleChange}
                                    name="Time"
                                    label="Time"
                                    variant="outlined"
                                    color="rgb(191, 191, 191,0.4)"
                                   />
                                  <br/><br/>
                                  <TextField
                                    onChange={this.handleChange}
                                    name="Venue"
                                    label="Venue"
                                    variant="outlined"
                                    color="rgb(191, 191, 191,0.4)"
                                 />
                                  <br/>
                                                            
                            </form>
                            <br/>
                            <ReactToPdf targetRef={ref} filename="application.pdf">
                                {({toPdf}) => (

                                    <Button   onClick={toPdf}
                                    variant="contained"
                                    style={{ backgroundColor: "#00203f",color:"white"}}
                                    size="large" >
                                          Download
                                  </Button>
                                       )}
                            </ReactToPdf>
                            <br/>
                        </div>
                      
                    
                        <div className="second">
                           
                            <div className="preview" ref={ref}>
                
                                <p>To</p>
                                <p>Head of Department</p>
                                <p>Information Technology</p>
                                <p>SGSITS,Indore</p>
                                
                                <p className="break">
                                    Date: {this.state.Date === "Date"  ?
                                    <span className="light">{this.state.Date}</span> : <span>{this.state.Date}</span>}
                                </p>
                                
                                <p className="break">Subject: Permission for #include sessions</p>
                                <p>Respected Ma'am </p>
                                <p>We at #include are planning a session for
                                    {
                                        this.state.Audience === "Audience" ?
                                            <span className="light"> {this.state.Audience}</span> :
                                            <span> {this.state.Audience}</span>
                                    }
                                    . The session will be based on
                                    {
                                        this.state.Topic === "Topic" ?
                                            <span className="light"> {this.state.Topic}</span> :
                                            <span> {this.state.Topic}</span>
                                    }
                                    . We would like to seek your permission to allow us to conduct session on following
                                    date, time and venue.
                                </p>
                                <p>
                                    Date:
                                    {
                                        this.state.Date_of_event === "Date_of_event" ?
                                            <span className="light"> {this.state.Date_of_event}</span> :
                                            <span> {this.state.Date_of_event}</span>
                                    }
                                </p>
                                <p>
                                    Time:
                                    {
                                        this.state.Time === "Time" ?
                                            <span className="light"> {this.state.Time}</span> :
                                            <span> {this.state.Time}</span>
                                    }
                                </p>
                                <p>
                                    Venue:
                                    {
                                        this.state.Venue === "Venue" ?
                                            <span className="light"> {this.state.Venue}</span> :
                                            <span> {this.state.Venue}</span>
                                    }
                                </p>
                               <p>
                                    Kindly grant us permission for above mentioned session.
                                </p>
                                
                                <p className="break" style={{marginBottom:"30px"}}>Thank You</p>
                                <p>Team #include</p>
                            </div>
                       
                        </div>
                </div>
            </div>
        );
    }   
}

export default Form;
