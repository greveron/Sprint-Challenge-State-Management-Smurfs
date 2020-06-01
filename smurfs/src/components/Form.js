import React, { useState, useContext, useEffect } from "react"
import { SmurfsContext } from "../contexts/SmurfsContext"

const Form = (() => {
    const [smurForm, setsmurForm] = useState({ name: '', age: 0, height: '' })
    const { post } = useContext(SmurfsContext)

    const handleOnchage = (e) => {
        setsmurForm({ ...smurForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(smurForm)
        e.target.reset()

    }

    //console.log("GR: APP.js: smurfs:", smurForm)
    return (
        <form onSubmit={handleSubmit}>
            <h1>
                Add Smurf
     </h1>
            <input
                type="text"
                name="name"
                values={smurForm}
                onChange={handleOnchage}></input>
            <input
                type="text"
                name="age"
                values={smurForm}
                onChange={handleOnchage}></input>
            <input
                type="text"
                name="height"
                values={smurForm}
                onChange={handleOnchage}></input>

            <label><button type='submit'>ADD</button></label>




        </form>



    )

})


export default Form;
