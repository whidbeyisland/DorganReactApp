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
            startTime: 0,
            endTime: 0,
            timeDiff: "",
        };
        this.startTimeChanged = this.startTimeChanged.bind(this);
        this.endTimeChanged = this.endTimeChanged.bind(this);
    }

    startTimeChanged(e) {
        this.state.startTime = e.target.value;

        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.timeDiff = timeDifference(this.state.startTime, this.state.endTime);
        this.setState(stateCopy);
    }

    endTimeChanged(e) {
        this.state.endTime = e.target.value;

        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.timeDiff = timeDifference(this.state.startTime, this.state.endTime);
        this.setState(stateCopy);
    }
    
    render() {
        return(
        <Card style={{ float: 'left', width: '19%', margin: '0.5%', color: 'black' }}>
            <Card.Body>
                <Card.Title>{this.state.day}</Card.Title>
                <input id="startTime" type="time" min="00:00" max="23:59" onChange={this.startTimeChanged} required></input>
                <input id="endTime" type="time" min="00:00" max="23:59" onChange={this.endTimeChanged} required></input>
                <p class="small-gray">{this.state.timeDiff}</p>
            </Card.Body>
        </Card>
        )
    }

}

function timeDifference(_startTime, _endTime) {
    var minutes = 0;
    minutes += (parseInt(_endTime.substring(0, 2)) - parseInt(_startTime.substring(0, 2))) * 60;
    minutes += (parseInt(_endTime.substring(3, 5)) - parseInt(_startTime.substring(3, 5)));
    return Math.floor(minutes / 60) + ":" + ("0" + minutes % 60).slice(-2);
}