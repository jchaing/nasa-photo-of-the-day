import React from 'react';
import DatePicker from './components/DatePicker';
import './App.css';
import { Container } from 'reactstrap';

function App() {

  return (
    <Container>
      <div className="App">
        <h1>NASA's Astronomy Photo of the Day</h1>
        <DatePicker />
      </div>
    </Container>
  );
}

export default App;
