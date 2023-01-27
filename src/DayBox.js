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
            day: this.props.day ?? "???",
            dayOfWeek: this.props.dayOfWeek ?? "???",
            startTime: 0,
            endTime: 0,
            timeDiff: "0:00",
        };
        this.startTimeChanged = this.startTimeChanged.bind(this);
        this.endTimeChanged = this.endTimeChanged.bind(this);
    }

    startTimeChanged(e) {
        this.state.startTime = e.target.value;

        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.timeDiff = timeDifference(this.state.startTime, this.state.endTime);
        this.setState(stateCopy);

        this.props.updateTimeFunc();
    }

    endTimeChanged(e) {
        this.state.endTime = e.target.value;

        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.timeDiff = timeDifference(this.state.startTime, this.state.endTime);
        this.setState(stateCopy);

        this.props.updateTimeFunc();
    }
    
    render() {
        return(
        <Card style={{ float: 'left', width: '19%', margin: '0.5%', color: 'black', height: '170px' }}>
            <Card.Body>
                <p className="small-gray">{this.state.dayOfWeek}</p>
                <p className="large-gray">{this.state.day}</p>
                <input className="time-input" id="startTime" type="time" min="00:00" max="23:59" onChange={this.startTimeChanged} required></input>
                <input className="time-input" id="endTime" type="time" min="00:00" max="23:59" onChange={this.endTimeChanged} required></input>
                <p className="small-gray">{this.state.timeDiff}</p>
            </Card.Body>
        </Card>
        )
    }

}

function timeDifference(_startTime, _endTime) {
    var minutes = 0;
    minutes += (parseInt(_endTime.substring(0, 2)) - parseInt(_startTime.substring(0, 2))) * 60;
    minutes += (parseInt(_endTime.substring(3, 5)) - parseInt(_startTime.substring(3, 5)));
    if (minutes >= 1) {
        return Math.floor(minutes / 60) + ":" + ("0" + minutes % 60).slice(-2);
    } else {
        alert("Please enter an end time that is later than the start time")
        return "0:00";
    }
}