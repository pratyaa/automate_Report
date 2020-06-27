import React, {Component} from 'react';
import PreviewReport from './previewReport.js';
import Pdf from './downloadReport.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { PDFDownloadLink} from '@react-pdf/renderer'
import './static/form.css';
import { Row,Col,Container} from 'react-bootstrap';


class Form1 extends Component {

    constructor(props) {
        super(props);

        this.state = {

            Topic: " Topic ",
            Organised_on: "",
            Organised_at: " Organised_at ",
            Audience:" Audience ",
            Details_of_topic:" Details_of_topic ",
            Speaker:" Speaker ",
            Duration_of_session:" Duration_of_session ",
            Description:" Description ",
            Statistics:" Statistics "
        };
         this.data=[

                {label:"Topic",
                type:"text",id:1}
                ,
                {label:"Organised_on",
                type:"date",id:2},

                 {label:"Organised_at",
                type:"text",id:3},

                {label:"Audience",
                type:"text",id:4},
                
                 {label:"Details_of_topic",
                type:"text",id:5},

                 {label:"Speaker",
                type:"text",id:6},

                 {label:"Duration_of_session",
                type:"text",id:7},

                 {label:"Description",
                type:"text",id:8},
                
                {label:"Statistics",
                type:"text",id:9
                }

            ];


    }

     handleChange = (event) => {
        const labell = event.target.name;
        if (event.target.value) {
            this.setState({[labell]: " " +event.target.value + " "});
        } else {
            this.setState({[labell]: labell})
        }
    }



    render() {
        return (
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col sm={9}  md={8} lg={3} xs={11}>
                        <div className="first">
                                <form>

                                {(this.data).map((data) =>(


                                        <TextField key={data.id}
                                        onChange={this.handleChange}
                                        name={data.label}
                                        type={data.type}
                                         fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        label={(data.label.split("_")).join(" ")}
                                        variant="outlined"
                                        style={{marginBottom:"1vw"}}
                                    />

                                ))}


                                </form>
                                <br/>
                                <Button
                                variant="contained"
                                style={{ backgroundColor: "#00203f",marginBottom:"0.5vw",}}
                                size="large" >

                                <PDFDownloadLink document={<Pdf data={this.state}/>} fileName="report.pdf">
                                      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now')}
                                </PDFDownloadLink>
                                </Button>
                                <br/>
                        </div>
                            
                    </Col>

                    <Col sm={11} md={8} lg={7}  xs={12}>
                     <PreviewReport data={this.state}/>
                    </Col>

                </Row>
            </Container>
            )
              
    }
}

export default Form1;
