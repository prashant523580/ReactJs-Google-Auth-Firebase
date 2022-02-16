import React,{useEffect, useState} from "react";
import './App.css';
import { signInWithGoogle } from './Firebase';

function App() {
  const [auth,setAuth] = useState();

  useEffect(() => {
    let data = localStorage.getItem("auth");
    if(data){
        data = JSON.parse(data);
        setAuth(data);
      }
        // window.location.reload()
        
  },[]);
  return (
    <div className="App">
        <button onClick={signInWithGoogle}>sign in with google</button>
    {
      auth && 
      <div className="google-auth">
          <h4>{auth.name}</h4>
          <h5>{auth.email}</h5>
          <img src={auth.profilePicture} width={"50"} height={"50"}/>
      </div>
    }
    </div>
  );
}

export default App;
