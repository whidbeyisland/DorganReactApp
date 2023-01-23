import React, { useState, useEffect, Component } from 'react';
import "./App.css";
import Button from 'react-bootstrap/Button';
import DayBox from './DayBox';
import Form from 'react-bootstrap/Form';

export default class Timesheet extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
/*
<div>
                <DayBox day="Monday"/>
                <DayBox day="Tuesday"/>
                <DayBox day="Wednesday"/>
                <DayBox day="Thursday"/>
                <DayBox day="Friday"/>
            </div>
*/

    render() {
        return(
            <Form>
                <DayBox day="Monday"/>
                <DayBox day="Tuesday"/>
                <DayBox day="Wednesday"/>
                <DayBox day="Thursday"/>
                <DayBox day="Friday"/>
            {/* <Form.Group>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        )
    }

}