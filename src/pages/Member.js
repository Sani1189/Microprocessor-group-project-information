import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sir1 from '../image/sir1.png';
import sir2 from '../image/sir2.png';
import ashad from '../image/ashad.png';
import sani from '../image/sani.jpg';
import omar from '../image/omar.jpg';
import ananya from '../image/ananya.jpeg';


const Member = () => {
  return (
    <div className="mainDiv">
      <div className='members' >
        <Row className='myrow'>
            <Col>
              <Card className="smallcard">
                <div className="myimg">
                  <img src={ashad} alt="sir1" height={200} width={200} />
                </div>
                <div className="mycard">
                  <Card.Body>
                    <h2>Md. Ashaduzzaman Nur</h2>
                    <h6>Contribution: Hardware, Report </h6>
                    <p>Department of CSE <br/> Independent University, Bangladesh</p>
                  </Card.Body>
                </div>

              </Card>
            </Col>
            <Col>
              <Card className="smallcard">
                <div className="myimg">
                  <img src={sani} alt="sir2" height={200} width={200} />
                </div>
                <div className="mycard">
                  <Card.Body>
                    <h2>SaniuL Islam Sani</h2>
                    <h6>Contribution: Hardware, Software, Report </h6>
                    <p>Department of CSE <br/> Independent University, Bangladesh</p>
                  </Card.Body>
                </div>

              </Card>
            </Col>
        </Row>
        <Row className="myrow">
            <Col>
              <Card className="smallcard">
                <div className="myimg">
                  <img src={omar} alt="sir2" height={200} width={200} />
                </div>
                <div className="mycard">
                  <Card.Body>
                    <h2>Omar Bin Sarwar</h2>
                    <h6>Contribution: Hardware,Report </h6>
                    <p>Department of CSE <br/> Independent University, Bangladesh</p>
                  </Card.Body>
                </div>

              </Card>
            </Col>

            <Col>
              <Card className="smallcard">
                <div className="myimg">
                  <img src={ananya} alt="sir2" height={200} width={200} />
                </div>
                <div className="mycard">
                  <Card.Body>
                    <h2>Anannya Preeta</h2>
                    <h6>Contribution: Software, Report </h6>
                    <p>Department of CSE <br/> Independent University, Bangladesh</p>
                  </Card.Body>
                </div>

              </Card>
            </Col>

        </Row>
      </div>
    </div>

  )
}

export default Member