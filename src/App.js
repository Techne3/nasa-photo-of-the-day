import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import CardSpot from './components/Card'
// import ModalExample from './components/Modal'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function App() {
  // <h1>Welcome to NASA picture of the Day</h1>
  const [data, setData] = useState([])
  const [date,setDates] = useState('2001-5-1')

  useEffect((props)=> {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=sMGWmRK9MQVySW3QZONHif1KPJyhrZxswS6KyfjM&date=${date}`)
    .then(response => {
      console.log(response.data)
      const data = response.data
      setData(data)
    })
  },[date])

  console.log(date)


  return (
    <div className="App">
        <form>
        <input className="in" onChange={(event) => 
          setDates(event.target.value)} type={'date'}>
          </input>
        </form>
      <CardSpot 
      explanation = {data.explanation}
      date = {data.date} 
      url = {data.url}      
      title={data.title}
      />
    
</div>

  )
}


export default App;
