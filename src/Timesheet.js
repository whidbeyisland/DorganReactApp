import React, { useState, useEffect, Component } from 'react';
import "./App.css";
import Button from 'react-bootstrap/Button';
import DayBox from './DayBox';
import Form from 'react-bootstrap/Form';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

export default class Timesheet extends Component {

    constructor(props) {
        super(props);

        this.monRef = React.createRef();
        this.tueRef = React.createRef();
        this.wedRef = React.createRef();
        this.thuRef = React.createRef();
        this.friRef = React.createRef();

        // getting days of week
        var first = new Date(); // get current date
        first.setDate(first.getDate() - first.getDay()); // First day is the day of the month - the day of the week
        var first_1 = new Date();
        first_1.setDate(first.getDate() + 1);
        var first_2 = new Date();
        first_2.setDate(first.getDate() + 2);
        var first_3 = new Date();
        first_3.setDate(first.getDate() + 3);
        var first_4 = new Date();
        first_4.setDate(first.getDate() + 4);
        var first_5 = new Date();
        first_5.setDate(first.getDate() + 5);

        this.state = {
            apiResponse: "",
            day_mon: (first_1.getMonth() + 1) + "/" + (first_1.getDate()),
            day_tue: (first_2.getMonth() + 1) + "/" + (first_2.getDate()),
            day_wed: (first_3.getMonth() + 1) + "/" + (first_3.getDate()),
            day_thu: (first_4.getMonth() + 1) + "/" + (first_4.getDate()),
            day_fri: (first_5.getMonth() + 1) + "/" + (first_5.getDate()),
            time_mon: 0,
            time_tue: 0,
            time_wed: 0,
            time_thu: 0,
            time_fri: 0,
            total_time: "Total time this week: 0:00",
        };
        this.updateTimeFunc = this.updateTimeFunc.bind(this);
        this.calculateTotalTime = this.calculateTotalTime.bind(this);
    }

    calculateTotalTime(times) {
        var total = 0;
        for (let i = 0; i < times.length; i++) {
            if (times[i].includes(":")) {
                total += parseInt(times[i].substring(0, 2)) * 60;
                total += parseInt(times[i].substring(3, 5));
            }
        }
        return Math.floor(total / 60) + ":" + ("0" + total % 60).slice(-2);
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
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.total_time = "Total time this week: " + this.calculateTotalTime(times);
        this.setState(stateCopy);
    }

    render() {
        return(
            <div className="timesheet">
              <Form onClick={this.updateTimeFunc}>
                  <p className="small-gray">{this.state.total_time}</p>
                  <ArrowLeft style={{ float: 'left', width: '4%', margin: '0.5%', color: '#888888', height: '170px' }} />
                  <DayBox id="daybox-mon" day={this.state.day_mon} dayOfWeek={"Mon"} updateTimeFunc={this.updateTimeFunc} ref={this.monRef}/>
                  <DayBox id="daybox-tue" day={this.state.day_tue} dayOfWeek={"Tue"} updateTimeFunc={this.updateTimeFunc} ref={this.tueRef}/>
                  <DayBox id="daybox-wed" day={this.state.day_wed} dayOfWeek={"Wed"} updateTimeFunc={this.updateTimeFunc} ref={this.wedRef}/>
                  <DayBox id="daybox-thu" day={this.state.day_thu} dayOfWeek={"Thu"} updateTimeFunc={this.updateTimeFunc} ref={this.thuRef}/>
                  <DayBox id="daybox-fri" day={this.state.day_fri} dayOfWeek={"Fri"} updateTimeFunc={this.updateTimeFunc} ref={this.friRef}/>
                  <ArrowRight style={{ float: 'right', width: '4%', margin: '0.5%', color: '#888888', height: '170px' }} />
                  <Button variant="success" style={{width: '10%', float: 'left'}}>Submit</Button>{' '}
              </Form>
            </div>
        )
    }

}