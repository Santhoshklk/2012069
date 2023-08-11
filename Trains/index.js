import { useState, useEffect } from "react";
const App = () => {
  const [trains, setTrains] = useState([])

  const fetchUserData = () => {
    fetch("http://20.244.56.144/train/trains",{
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE3Mzc4MTAsImNvbXBhbnlOYW1lIjoiTkVDIiwiY2xpZW50SUQiOiI1ZTBmNzkxOC1kNjg3LTQyMzYtOWJmMi1iMTc2NjYxOGNjZTkiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjAxMjA2OS1DU0UifQ.YwhoFdxUmaho_WGi6L3chqdtC2oUSQt7NUHxwLmOJTY`
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTrains(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {trains.length > 0 && (
        <ul>
          {trains.map(train => (
            <div>
               <li key={train.trainName}>{train.trainName}</li>
              
            </div>
           
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
