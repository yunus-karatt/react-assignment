import { useEffect, useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";

function App() {
  const [data, setData] = useState([]);
  const[error,setError]=useState(null)
  const [count, setCount] = useState(1);
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
      fetch(` https://jsonplaceholder.typicode.com/users/${count}`)
      .then(data=>{
        if(!data.ok){
          throw new Error(`HTTP error! Status: ${data.status}`);
        }
        return data.json()
      })
      .then(data=>{
        setData([data])
        setLoading(false)
        setError(null)
      })
      .catch((err)=>{
        setError(err)
        setLoading(false)
        setData([])
      })
  },[count])

  function incrementCount() {
    setCount((prevState) => prevState + 1);
  }

  function decrementCount() {
    setCount((prevState) => prevState - 1);
  }

  return (
    <div className="App">
      <Counter
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        count={count}
      />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error :{error.message}</h2>}
      {data.map((profile) => {
        return (
          <ProfileCard
            name={profile.name}
            email={profile.email}
            key={profile.id}
          />
        );
      })}
    </div>
  );
}

export default App;
