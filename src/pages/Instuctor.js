import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sir1 from '../image/sir1.png';
import sir2 from '../image/sir2.png';

const Instuctor = () => {
  return (
    <div className='faculty' >
      <h1>Our Honourable Instructor</h1>
      <div>
      <Row>
        <Col>
          <Card>
            <div className="div0">
         <img src={sir1} alt="sir1" height={200} width={200} />
         </div>
         <div className="div1">
            <Card.Body>
              <h2>Dr. Mohammad Shidujaman</h2>
              <h6>Microprocessor Theory Course Instructor, CSE216</h6>
              <p>Assistant Professor, SETS</p>
              <p>Independent University, Bangladesh</p>
            </Card.Body>
            </div>

          </Card>

        </Col>
        <Col>
          <Card>
          <div className="div0">
          <img src={sir2} alt="sir2" height={200} width={200} />
          </div>
          <div className="div1">
            <Card.Body>
              <h2>Mohammad Rejwan Uddin</h2>
              <h6>Microprocessor Lab Course Instructor, CSE216L</h6>
              <p>Adjunct Faculty, SETS</p>
              <p>Independent University, Bangladesh</p>
            </Card.Body>
            </div>
            
          </Card>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default Instuctor