import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Card from './components/Card'


function App() {
  // <h1>Welcome to NASA picture of the Day</h1>
  const [data, setData] = useState([])
  const [date,setDate] = useState('2001-5-1')

  useEffect(()=> {
    // console.log('first render')
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
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Card 
      title={data.title}
      date = {data.date} 
      url = {data.url}
      explanation = {data.explanation}
      />
       <form>
        <input className="in" onChange={(event) => 
          setDate(event.target.value)} type={'date'}>
          </input>
        </form>
    </div>
  );
}

export default App;
