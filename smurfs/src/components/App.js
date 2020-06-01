import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import FormList from "./FormList"
import { SmurfsContext } from "../contexts/SmurfsContext"
import Form from "./Form"

const App = () => {

  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {

    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const post = (datos) => {

    axios
      .post('http://localhost:3333/smurfs', datos)
      .then(res => {


      })
      .catch(err => { console.log(err.res) })
  }

  console.log("GR: APP.js: smurfs:", smurfs)


  return (
    <SmurfsContext.Provider value={{ smurfs, post }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <FormList />
        <Form />

      </div>
    </SmurfsContext.Provider>
  );

}


export default App
