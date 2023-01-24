import React, { useState, useEffect, Component } from 'react';
import "./App.css";
import Button from 'react-bootstrap/Button';
import DayBox from './DayBox';
import Form from 'react-bootstrap/Form';

export default class Timesheet extends Component {

    constructor(props) {
        super(props);

        // getting days of week
        var curr = new Date; // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        // var last = first + 6; // last day is the first day + 6
        //alert();

        this.state = {
            apiResponse: "",
            day_mon: (first + 1),
            day_tue: (first + 2),
            day_wed: (first + 3),
            day_thu: (first + 4),
            day_fri: (first + 5)
        };
    }

    render() {
        return(
            <div className="timesheet">
              <Form>
                  <DayBox day={this.state.day_mon}/>
                  <DayBox day={this.state.day_tue}/>
                  <DayBox day={this.state.day_wed}/>
                  <DayBox day={this.state.day_thu}/>
                  <DayBox day={this.state.day_fri}/>
                  <Button variant="success" style={{width: '10%', float: 'left'}}>Submit</Button>{' '}
              </Form>
            </div>
        )
    }

}