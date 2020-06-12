import React, {useState} from 'react';
import './App.css';

function App() {
  let [count, setcount]= useState(0);
  let [isMorning, setmorning] = useState(true)
var name;
  return (
    <div className='box'>
      <div className= {isMorning ? 'daylight' : ''}> 
      <h3>Dear Good {isMorning ? 'Morning' :'Night'}</h3>
      <button onClick={
        ()=> setmorning(!isMorning)
      }>Update Day</button>
  </div>
      <hr/>

      <h3>The current Counter Value is: {count}</h3>

    <button onClick={
      ()=> setcount(++count)
    }>
      Update Counter</button>
      
      <br/> <hr/>
      <form>
  <label>
    Name: <br/><br/>
    <input type="text" name="name"  />
  </label><br/>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default App;
