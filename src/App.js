import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="Natore" speciallity ="kacaGolla"></District>
      <District name="Rangpur" speciallity="Mofize"></District>
      <District name="Barisal" speciallity="Batpar"></District>
      <District name="Khulna" speciallity="Freeminded"></District>
      
    </div>
  );
}
const districtStyles ={
  backgroundColor: "lightblue",
  padding: "30px",
  margin: "20px",
  borderRadius: "30px",
  height: "200px"
}

const postStyle = {
  backgroundColor: "lightGreen",
  color: "white",
  height: "200px",
  borderRadius: "40px",
  padding: "20px",
  margin: "18px"

}

function LoadPost() {
  const [posts, setPost] = useState([]);
  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPost(data))
  },[])
  return (
    <div>
      <h2>Post: {posts.length}  </h2>
      {
        posts.map(post => displayPost(post))
      }
    </div>
  )
}
function displayPost (props) {
  return (
    <div style={postStyle}>
      <h2>Post: {props.title} </h2>
      <p>Post Des. : {props.body} </p>
    </div>
  )
}


function District (props){
  const [power, setPower]= useState(1);

  const bustPower = () =>{
    const newPower = power*2;
    setPower(newPower);
  }
  return (
    <div style={districtStyles}>
      <h2>Name:  {props.name} </h2>
      <p>Speciality:  {props.speciallity}</p>
      <h4>Power : {power}</h4>
      <button onClick={bustPower}>Boost Power</button>

    </div>
  )
}

export default App;
