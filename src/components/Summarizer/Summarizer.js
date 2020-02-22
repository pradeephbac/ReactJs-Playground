import React, { Component }  from "react";
import "./Summarizer.css";
import { Row, Col, Container } from "react-bootstrap";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import FileCopyIcon from "@material-ui/icons/FileCopy";
 
class Summarizer extends  Component{
    constructor(props) {
        super(props);
        this.callSummarizer = this.callSummarizer.bind(this);
        this.paragrapValue ='';
        this.numberOfSentences=3;
      }

    handleOnChange(event) { 
        this.paragrapValue = event.target.value 
    }

    numberOnChange(event) { 
        this.numberOfSentences = event.target.value  
    }
  
    callSummarizer() {  
        this.handleSubmit()
    }

    handleSubmit(){  
        fetch("https://hidden-brushlands-06723.herokuapp.com/summarize", {
       method: 'POST',  
       body: JSON.stringify( {"number_of_sentences": this.numberOfSentences,
       "paragraph":  this.paragrapValue}),  
       headers:{
         'Content-Type': 'application/json'
        }
         }).then(res => res.json())
         .then(response => console.log('Success:', JSON.stringify(response)))
         .catch(error => console.error('Error:', error));
        }
       
    render() {
      return   <div className="App">
      <header className="App-header">
        <Container className="container-style">
          <Row className="sentence-count">
            <p className="sentence-count-para">How many sentences: </p> 
            <input
              className="number-input"
              min="0"
              max="99"
              defaultValue={3}
              onChange={event => this.numberOnChange(event)} 
              type="number"
            ></input>
          </Row>
          <Row className="summary-rows">
            <Col xs={6} className="left-col">
              <textarea
                className="text-area"
                placeholder="Past your Paragraph here to summarize"
                onChange={event => this.handleOnChange(event)}
              ></textarea>
            </Col>
            <Col xs lg="1">
              <DoubleArrowIcon
                onClick={this.callSummarizer}
                className="convert-icon"
              />
            </Col>
            <Col className="right-col">
              <p className="summary-text">
                It sets up your development environment so that you can use the
                latest JavaScript features, provides a nice developer
                experience, and optimizes your app for production. You’ll need
                to have Node >= 8.10 and npm >= 5.6 on your machine. To create a
                project, run
              </p>
              <FileCopyIcon className="copy-icon" />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
    }
  }

export default Summarizer;