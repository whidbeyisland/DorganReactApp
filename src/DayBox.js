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
                <input id="startTime" type="time" min="00:00" max="23:59" onChange={handleChange} required></input>
                <input id="endTime" type="time" min="00:00" max="23:59" onChange={handleChange} required></input>
                <p class="small-gray">{this.testTime}</p>
            </Card.Body>
        </Card>
        )
        // onChange={this.updateTime.bind(this)}
    }

}

function handleChange(event) {
    alert(event.target.value);
}