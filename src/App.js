import React, { useState, useEffect, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Timesheet from './Timesheet.js';
import DayBox from './DayBox.js';
// import { Button } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {currentTime}.</p>
        <Timesheet/>
        {/* <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="outline-primary">Primary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      </header>
    </div>
  );
}

export default App;