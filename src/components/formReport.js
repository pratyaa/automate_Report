import React, {Component} from 'react';
import PreviewReport from './previewReport.js';
import Pdf from './downloadReport.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { PDFDownloadLink} from '@react-pdf/renderer'
import './static/report.css'


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
                type:"text",id:1}
                ,
                {label:"Oraganised_on",
                type:"date",id:2},
                 {label:"Organised_at",
                type:"text",id:3},
                 {label:"Aim",
                type:"text",id:4},
                 {label:"Speaker",
                type:"text",id:5},
                 {label:"Description",
                type:"text",id:6},
                {
                label:"Statistics",
                type:"text",id:7
                }

            ];


    }

     handleChange = (event) => {
        const labell = event.target.name;
        if (event.target.value) {
            this.setState({[labell]: " " +event.target.value});
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


                                    <TextField key={data.id}
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
                            <Button
                            variant="contained"
                            style={{ backgroundColor: "#00203f",color:"white",marginBottom:"0.5vw"}}
                            size="large" >

                            <PDFDownloadLink document={<Pdf data={this.state}/>} fileName="report.pdf">
                                  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                            </PDFDownloadLink>
                            </Button>
                            <br/>
                        </div>

                    <PreviewReport data={this.state}/>

                </div>

            </div>
        );
    }
}

export default Form1;
