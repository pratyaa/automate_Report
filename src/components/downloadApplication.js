import React, {Component} from 'react';
import './static/application.css'
import { Page, Text, Document} from '@react-pdf/renderer';
class Pdf extends Component{



	render(){
    return(
      <Document>
        <Page size="A4" style={{padding:"50 px"}}>

                          <Text style={{marginBottom: 12}}>
                          	To
                          </Text>
													<Text style={{marginBottom: 12}}>
                            Head of Department
                          </Text>
													<Text style={{marginBottom: 12}}>
                            Information Technology
                          </Text>
													<Text style={{marginBottom: 24}}>
                            SGSITS,Indore
                          </Text>
                          <Text style={{marginBottom: 24}}>
                            Date:
														{
															this.props.data.Date
														}
                          </Text>
                          <Text style={{marginBottom: 24}}>
                            Subject: Permission for #include sessions
                          </Text>
													<Text style={{marginBottom: 12}}>
                            Respected Ma'am
                          </Text>
													<Text style={{marginBottom: 12}}>
                             We at #include are planning a session for 
                                 {
                                     this.props.data.Audience
																	 }
                            	. The session will be based on
                                 {
                                     this.props.data.Topic
                                 }
                              . We would like to seek your permission to allow us to conduct session on following
                                 date, time and venue.
                          </Text>
													<Text style={{marginBottom: 12}}>
                              Date:
                                 {
                                     this.props.data.Date_of_event
                                 }
                          </Text>
													<Text style={{marginBottom: 12}}>
                              Time:
                                 {
                                     this.props.data.Time
                                 }
                          </Text>
													<Text style={{marginBottom: 24}}>
                              Venue:
                                 {
                                     this.props.data.Venue
                                 }
                          </Text>
													<Text style={{marginBottom: 24}}>
                              Kindly grant us permission for above mentioned session.
                          </Text>
													<Text style={{marginBottom: 12}}>
                             Thank You
                          </Text>
													<Text style={{marginBottom: 12}}>
                             Team #include
													</Text>
        					</Page>
        </Document>

    );
	}
}
export default Pdf;
