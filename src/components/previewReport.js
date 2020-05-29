import React, {Component} from 'react';
import './form.css'

class PreviewReport extends Component{

	constructor(props)
	{
		super(props);
		
	}
    
	render(){
      
		return(
				  <div className="second">
                           
                            <div className="preview" >



                             <div className="head" style={{textAlign:"center",fontSize:"20px"}}>

                                <p>
                                     {this.props.data.Topic=== "Topic"  ?
                                    <span className="light">{this.props.data.Topic}</span> : <span>{this.props.data.Topic}</span>}
                                </p>
                                <p>Event Report By</p>
                                <p>#include -SGSITS ,Indore</p>
                            </div>
                                
                               <p>Organised On:</p>
                                   <p> {
                                        this.props.data.Organised_on === "Organised_on" ?
                                            <span className="light"> {this.props.data.Organised_on}</span> :
                                            <span> {this.props.data.Organised_on}</span>
                                    }
                                 </p>
                                 <p>Oraganised at:</p>
                                  <p>  {
                                        this.props.data.Organised_at === "Organised_at" ?
                                            <span className="light"> {this.props.data.Organised_at}</span> :
                                            <span> {this.props.data.Organised_at}</span>
                                    }
                                   
                                </p>
                               <p>Aim of the session:</p>
                                <p>{
                                        this.props.data.Aim === "Aim" ?
                                            <span className="light"> {this.props.data.Aim}</span> :
                                            <span> {this.props.data.Aim}</span>
                                    }
                                </p>
                                
                                 <p>Speaker:</p>
                                <p>{
                                        this.props.data.Speaker === "Speaker" ?
                                            <span className="light"> {this.props.data.Speaker}</span> :
                                            <span> {this.props.data.Speaker}</span>
                                    }
                                </p>
                                 <p>About the Session:</p>
                                 <p>
                                {
                                        this.props.data.Description === "Description" ?
                                            <span className="light"> {this.props.data.Description}</span> :
                                            <span> {this.props.data.Description}</span>
                                    }
                                </p>
                                 <p>Statistics:</p>
                                <p>{
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