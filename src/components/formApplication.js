import React, {Component} from 'react';
import Pdf from './downloadApplication.js';
import Preview from './previewApplication';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './static/application.css';
import { PDFDownloadLink} from '@react-pdf/renderer'
import { Row,Col,Container} from 'react-bootstrap';

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
                type:"date"
                 ,id:1}
                ,
                {label:"Audience",
                type:"text",id:2},
                 {label:"Topic",
                type:"text",id:3},
                 {label:"Date_of_event",
                type:"text",id:4},
                 {label:"Time",
                type:"text",id:5},
                 {label:"Venue",
                type:"text",id:6},
            ];


    }


     handleChange = (event) => {
        const labell = event.target.name;
        if (event.target.value) {
            this.setState({[labell]: " "+event.target.value});
        } else {
            this.setState({[labell]: labell})
        }
    }



    render() {
        return (
         
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col sm={11} md={8} lg={3}  xs={10}>

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

                            <PDFDownloadLink document={<Pdf data={this.state}/>} fileName="application.pdf">
                                  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                            </PDFDownloadLink>
                            </Button>
                            <br/>
                        </div>
                    </Col>
                    <Col sm={11} md={8} lg={7}  xs={12}>
                         <Preview data={this.state}/>
                    </Col>
                </Row>
            </Container>

               
        );
    }
}

export default Form;
