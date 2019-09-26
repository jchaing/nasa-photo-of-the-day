import React from 'react';
import DatePicker from './components/DatePicker';
import './App.css';



function App() {
  // const [image, setImage] = useState();

  return (
    <div className="App">
      <h1>Astronomy Photo of the Day</h1>
      <DatePicker />
    </div>
  );
}

export default App;
