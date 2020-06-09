import React, {Component} from 'react';
import './static/application.css'

class Preview extends Component{

	

	render(){

		return(
				  <div className="second">

                            <div className="preview" >


                             <p>To</p>
                                <p>Head of Department</p>
                                <p>Information Technology</p>
                                <p>SGSITS,Indore</p>

                                <p className="break">
                                    Date: {this.props.data.Date === "Date"  ?
                                    <span className="light">{this.props.data.Date}</span> : <span>{this.props.data.Date}</span>}

                                </p>

                                <p className="break">Subject: Permission for #include sessions</p>
                                <p>Respected Ma'am </p>
                                <p>We at #include are planning a session for
                                    {
                                        this.props.data.Audience === "Audience" ?
                                            <span className="light"> {this.props.data.Audience}</span> :
                                            <span> {this.props.data.Audience}</span>
                                    }
                                    . The session will be based on
                                    {
                                        this.props.data.Topic === "Topic" ?
                                            <span className="light"> {this.props.data.Topic}</span> :
                                            <span> {this.props.data.Topic}</span>
                                    }
                                    . We would like to seek your permission to allow us to conduct session on following
                                    date, time and venue.
                                </p>
                                <p>
                                    Date:
                                    {
                                        this.props.data.Date_of_event === "Date_of_event" ?
                                            <span className="light"> {this.props.data.Date_of_event}</span> :
                                            <span> {this.props.data.Date_of_event}</span>
                                    }
                                </p>
                                <p>
                                    Time:
                                    {
                                        this.props.data.Time === "Time" ?
                                            <span className="light"> {this.props.data.Time}</span> :
                                            <span> {this.props.data.Time}</span>
                                    }
                                </p>
                                <p>
                                    Venue:
                                    {
                                        this.props.data.Venue === "Venue" ?
                                            <span className="light"> {this.props.data.Venue}</span> :
                                            <span> {this.props.data.Venue}</span>
                                    }
                                </p>
                               <p>
                                    Kindly grant us permission for above mentioned session.
                                </p>

                                <p className="break" >Thank You</p>
                                <p>Team #include</p>





                            </div>

                        </div>
			);
	}
}
export default Preview;
