import React, {Component} from 'react';
import PreviewReport from './previewReport.js'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReactToPdf from 'react-to-pdf';
import './static/report.css'

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
                type:"text"
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


                                    <TextField
                                    onChange={this.handleChange}
                                    name={data.label}
                                    type={data.type}
                                     fullWidth
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
                                    style={{ backgroundColor: "#00203f",color:"white",marginBottom:"0.5vw"}}
                                    size="large" >
                                          Download
                                  </Button>
                                       )}
                            </ReactToPdf>
                            <br/>
                        </div>

                    <PreviewReport data={this.state}/>

                </div>

            </div>
        );
    }
}

export default Form1;
