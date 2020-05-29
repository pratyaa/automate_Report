import React, {Component} from 'react';
import { Row,Col,Container,Card,Button} from 'react-bootstrap';

import './landing.css';


class Landing extends Component{

	render()
	{
		return(

				<Container>
				<Row>
				
						  
				   <Col md={4} xs={11} sm={6}>
					   <Card className="cards">
						   <Card.Body>
							   <Card.Title>Application</Card.Title>
							 
							    <Button size="lg" className="button" style={{hover:{backgroundColor:"white"}}} >Create</Button>
							   
							    </Card.Body>
					   </Card>
				   </Col>

				    <Col md={4} xs={11} sm={6}>
					   <Card className="cards">
						   <Card.Body>
							   <Card.Title>Report</Card.Title>
							    <Button  size="lg" className="button">Create</Button>
							    </Card.Body>
					   </Card>
				   </Col>


				  
				 </Row>
				 </Container>
			)
	}
}

export default Landing;