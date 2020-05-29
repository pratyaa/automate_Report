import React, {Component} from 'react';
import Preview from './preview.js'
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
         this.data=[

                {label:"Date",
                type:"date"}
                ,
                {label:"Audience",
                type:"text"},
                 {label:"Topic",
                type:"text"},
                 {label:"Date_of_event",
                type:"text"},
                 {label:"Time",
                type:"text"},
                 {label:"Venue",
                type:"text"},
            ];
    
        
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

                            {(this.data).map((data) =>(
                                    <TextField
                                    onChange={this.handleChange}
                                    name={data.label}
                                    type={data.type}
                                    InputLabelProps={{ shrink: true }}
                                    label={data.label}
                                    variant="outlined"
                                    style={{marginBottom:"1vw"}}
                                />

                            ))}
                                
                               
                                    
                                                            
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
                      
                    <Preview data={this.state}/>
                      
                </div>
                    }
            </div>
        );
    }   
}

export default Form;
