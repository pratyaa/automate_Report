import React, {Component} from 'react';
import './static/form.css';

class PreviewReport extends Component{


	render(){

		return(
				  <div className="second">

                            <div className="preview" >



                             <div className="head" style={{textAlign:"center",marginTop:"1vw",fontWeight:"500"}}>

                                <p >
                                     {this.props.data.Topic=== "Topic"  ?
                                    <span className="light" style={{fontSize:"30px"}}>{this.props.data.Topic}</span> : <span style={{fontSize:"30px"}}>{this.props.data.Topic}</span>}
                                </p>
                                <p>Event Report By</p>
                                <p>#include -SGSITS ,Indore</p>
                            </div>

                               <p className="headings">Organised On:
                                   {
                                        this.props.data.Organised_on === "Organised_on" ?
                                            <span className="light" > {this.props.data.Organised_on}</span> :
                                            <span > {this.props.data.Organised_on}</span>
                                    }
                                 </p>
                                 <p className="headings">Oraganised at:
                                   {
                                        this.props.data.Organised_at === "Organised_at" ?
                                            <span className="light"> {this.props.data.Organised_at}</span> :
                                            <span> {this.props.data.Organised_at}</span>
                                    }

                                </p>
                               <p className="headings" style={{marginTop:"3vw"}}>Aim of the session:</p>
                                <p>{
                                        this.props.data.Aim === "Aim" ?
                                            <span className="light"> {this.props.data.Aim}</span> :
                                            <span> {this.props.data.Aim}</span>
                                    }
                                </p>

                                 <p className="headings">Speaker:</p>

                                <p style={{minHeight:"50px"}}>{
                                        this.props.data.Speaker === "Speaker" ?
                                            <span className="light"> {this.props.data.Speaker}</span> :
                                            <span> {this.props.data.Speaker}</span>
                                    }
                                </p>

                                 <p className="headings">About the Session:</p>
                                 <p style={{minHeight:"50px"}}>
                                {
                                        this.props.data.Description === "Description" ?
                                            <span className="light"> {this.props.data.Description}</span> :
                                            <span> {this.props.data.Description}</span>
                                    }
                                </p>

                                 <p className="headings">Statistics:</p>
                                <p style={{minHeight:"50px"}}>{
                                        this.props.data.Statistics === "Statistics" ?
                                            <span className="light"> {this.props.data.Statistics}</span> :
                                            <span> {this.props.data.Statistics}</span>
                                    }
                                </p>






                            </div>

                        </div>

			);
	}
}
export default PreviewReport;
