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
                <input type="time" min="00:00" max="23:59" required></input>
                <input type="time" min="00:00" max="23:59" required></input>
            </Card.Body>
        </Card>
        )
    }

}