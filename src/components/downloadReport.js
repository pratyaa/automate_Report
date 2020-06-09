import React, {Component} from 'react';
import './static/application.css'
import { Page, Text, Document} from '@react-pdf/renderer';
class Pdf extends Component{



	render(){
    return(
      <Document>
        <Page size="A4" style={{padding:"50 px"}}>

                          <Text style={{marginBottom: 12,textAlign:"center",fontWeight:"500"}}>
                          	{
                                this.props.data.Topic
                              }
                          </Text>
													<Text style={{marginBottom: 12,textAlign:"center",fontWeight:"500"}}>
                            Event Report By
                          </Text>
													<Text style={{marginBottom: 24,textAlign:"center",fontWeight:"500"}}>
                             #include -SGSITS ,Indore
                          </Text>
													<Text style={{marginBottom: 12}}>
                            Organised On:
                              {
                                   this.props.data.Organised_on
                               }
                          </Text>
                          <Text style={{marginBottom: 24}}>
                            Oraganised at:
                            {
                                 this.props.data.Organised_at
                             }

                          </Text>
                          <Text style={{marginBottom: 12}}>
                             Aim of the session:
                          </Text>
													<Text style={{marginBottom: 24}}>
                            {
                                  this.props.data.Aim
                              }
                          </Text>
													<Text style={{marginBottom: 12}}>
                             Speaker:
                          </Text>
													<Text style={{marginBottom: 24}}>
                            {
                                  this.props.data.Speaker
                              }
                          </Text>
													<Text style={{marginBottom: 12}}>
                             About the Session:
                          </Text>
													<Text style={{marginBottom: 24}}>
                            {
                                 this.props.data.Description
                             }
                          </Text>
													<Text style={{marginBottom: 12}}>
                            Statistics:
                          </Text>
													<Text style={{marginBottom: 24}}>
                            {
                                  this.props.data.Statistics
                              }
                          </Text>

                          </Page>
        </Document>

    );
}
}
export default Pdf;
