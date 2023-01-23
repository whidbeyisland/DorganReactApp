import React, { useState, useEffect, Component } from 'react';
import "./App.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default class DayBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            day: this.props.day ?? '???',
        };
    }
    
    render() {
        return(
        <Card style={{ float: 'left', width: '19%', margin: '0.5%', color: 'black' }}>
        <Card.Body>
            <Card.Title>{this.state.day}</Card.Title>
            <Form.Group>
            <NumericInput/>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
        </Card.Body>
        </Card>
        )
    }

}