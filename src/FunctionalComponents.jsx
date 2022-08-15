import React, { useState,useEffect } from "react"

function FunctionalComponents ({passCount}) {

    const [count, setCount] = useState(passCount)
    const [coffee, setCoffee] = useState([])
    const url ='https://api.sampleapis.com/coffee/hot'

    useEffect( ( ) => {
        fetch(url)
        .then (res => res.json()) // parsing the data in json
        .then (data => setCoffee(data)) //putting parsed data as a variable named data 
        .catch (err => console.log(err)) // handling the errors

    },[])

    return (
        <>
            OMG This is so FunctionalComponents
            FunctionalComponents {count}
            <button onClick={() => 
                setCount(count +1)
                }>Add One</button>
            <>
                {coffee.map(coffee =>  
                    <h1 key={coffee.id}>{coffee.title}</h1>
                    )}
            </>
        </>
    )
}

export default FunctionalComponents