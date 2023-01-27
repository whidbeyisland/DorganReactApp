import React, { useState, useEffect, Component } from 'react';
import "./App.css";
import Button from 'react-bootstrap/Button';
import DayBox from './DayBox';
import Form from 'react-bootstrap/Form';

export default class Timesheet extends Component {

    constructor(props) {
        super(props);

        this.monRef = React.createRef();
        this.tueRef = React.createRef();
        this.wedRef = React.createRef();
        this.thuRef = React.createRef();
        this.friRef = React.createRef();

        // getting days of week
        var curr = new Date; // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

        this.state = {
            apiResponse: "",
            day_mon: (first + 1),
            day_tue: (first + 2),
            day_wed: (first + 3),
            day_thu: (first + 4),
            day_fri: (first + 5),
            time_mon: 0,
            time_tue: 0,
            time_wed: 0,
            time_thu: 0,
            time_fri: 0,
            total_time: "Total time this week: $TIME",
        };
        this.updateTimeFunc = this.updateTimeFunc.bind(this);
        this.calculateTotalTime = this.calculateTotalTime.bind(this);
    }

    calculateTotalTime(times) {
        var total = 0;
        for (let i = 0; i < times.length; i++) {
            if (times[i].includes(":")) {
                total += 1;
            }
        }
        alert(total);
        return total;
    }

    updateTimeFunc(e) {
        const monRef = this.monRef.current;
        const tueRef = this.tueRef.current;
        const wedRef = this.wedRef.current;
        const thuRef = this.thuRef.current;
        const friRef = this.friRef.current;
        const times = [
            monRef.state.timeDiff,
            tueRef.state.timeDiff,
            wedRef.state.timeDiff,
            thuRef.state.timeDiff,
            friRef.state.timeDiff
        ];
        alert("Current total time is: " + this.calculateTotalTime(times));
        // alert("current time of child is:  " + monRef.state.timeDiff);
        // alert('hello world!');
        // let stateCopy = JSON.parse(JSON.stringify(this.state));
        // stateCopy.total_time = "Total time this week: $ALOT";
        // this.setState(stateCopy);
    }

    render() {
        return(
            <div className="timesheet">
              <Form>
                  <p className="total-time">{this.state.total_time}</p>
                  <DayBox id="daybox-mon" day={this.state.day_mon} updateTimeFunc={this.updateTimeFunc} ref={this.monRef}/>
                  <DayBox id="daybox-tue" day={this.state.day_tue} updateTimeFunc={this.updateTimeFunc} ref={this.tueRef}/>
                  <DayBox id="daybox-wed" day={this.state.day_wed} updateTimeFunc={this.updateTimeFunc} ref={this.wedRef}/>
                  <DayBox id="daybox-thu" day={this.state.day_thu} updateTimeFunc={this.updateTimeFunc} ref={this.thuRef}/>
                  <DayBox id="daybox-fri" day={this.state.day_fri} updateTimeFunc={this.updateTimeFunc} ref={this.friRef}/>
                  <Button variant="success" style={{width: '10%', float: 'left'}}>Submit</Button>{' '}
              </Form>
            </div>
        )
    }

}