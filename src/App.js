import React from 'react';
import DatePicker from './components/DatePicker';
import './App.css';
import { Container, Badge } from 'reactstrap';

function App() {

  return (
    <Container>
      <div className="App">
        <h1>
          <Badge color="secondary">NASA's Astronomy Photo of the Day</Badge>
        </h1>
        <DatePicker />
      </div>
    </Container>
  );
}

export default App;
