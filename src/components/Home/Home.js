import React from 'react';
import { useHistory } from 'react-router-dom'
import './Home.css';
import { Row, Col, Container } from 'react-bootstrap';
//import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/HomeOutlined';
//import MenuIcon from '@material-ui/core/Icon/Icon'; 

function Home() {
  const history = useHistory()
  return (
    <div className="App">
      <header className="App-header">
        <Container className="container-style">
          <Row>
            <Col className="col-style" onClick={() => { history.push('/summarizer') }}>
              <p className="icon-margin"><HomeIcon /></p>
              <p>Paragraph Summarizer</p>
            </Col>
            <Col className="col-style">
              <p className="icon-margin"><HomeIcon /></p>
              Python Application 2
      </Col>
            <Col className="col-style"> <p className="icon-margin"><HomeIcon /></p>Python Application 3</Col>
          </Row>
          <Row>
            <Col className="col-style"> <p className="icon-margin"><HomeIcon /></p>Python Application 4</Col>
            <Col className="col-style"> <p className="icon-margin"><HomeIcon /></p>Python Application 5</Col>
            <Col className="col-style"> <p className="icon-margin"><HomeIcon /></p>Python Application 6</Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Home;
