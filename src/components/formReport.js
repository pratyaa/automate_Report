import React, {Component} from 'react';
import PreviewReport from './previewReport.js'
import {Card} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ReactToPdf from 'react-to-pdf';
import './form.css'

const ref = React.createRef();

class Form1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
            Topic: "Topic",
            Organised_on: "",
            Organised_at: "Organised_at",
            Aim: "Aim",
            Speaker:"Speaker",
            Description:"Description",
            Statistics:"Statistics"
        };
         this.data=[

                {label:"Topic",
                type:"text"}
                ,
                {label:"Oraganised_on",
                type:"date"},
                 {label:"Organised_at",
                type:"text"},
                 {label:"Aim",
                type:"text"},
                 {label:"Speaker",
                type:"text"},
                 {label:"Description",
                type:"text"},
                {
                label:"Statistics",
                type:"long"
                }
                
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
                                    data.type==="long"  ?
                                    <TextareaAutosize
                                     onChange={this.handleChange}
                                    name={data.label}
                                    label={data.label}
                                    rowsMin={3}

                                    />   :
                                    
                                    <TextField
                                    onChange={this.handleChange}
                                    name={data.label}
                                    type={data.type}
                                    InputLabelProps={{ shrink: true }}
                                    label={data.label}
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
                      
                    <PreviewReport data={this.state}/>
                      
                </div>
                    }
            </div>
        );
    }   
}

export default Form;
