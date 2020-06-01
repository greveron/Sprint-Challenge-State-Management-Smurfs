import React, { useContext } from 'react'
import { SmurfsContext } from '../contexts/SmurfsContext'


const FormList = (() => {
    const { smurfs } = useContext(SmurfsContext)
    
    

    return (
        <div>
            {smurfs.map(item => (

                <div className='cards' key={item.id}>
                    <h1 >Name: {item.name}</h1>
                    <h2 >Id: {item.id}</h2>
                    <h2>Age: {item.age}</h2>
                    <h2>Height: {item.height}</h2>
                </div>
            ))}
        </div>
    )
})

export default FormList;