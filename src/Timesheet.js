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
            <div className="timesheet">
              <Form>
                  <DayBox day="Monday"/>
                  <DayBox day="Tuesday"/>
                  <DayBox day="Wednesday"/>
                  <DayBox day="Thursday"/>
                  <DayBox day="Friday"/>
                  <Button variant="success" style={{width: '10%', float: 'left'}}>Submit</Button>{' '}
              </Form>
            </div>
        )
    }

}