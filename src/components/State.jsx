import React, { useState } from 'react'
import City from './City'

function State({ state }) {
    const [city, setCity] = useState("Surat")
    return (
        <>
            <h3>State: {state}</h3>
            <City city={city} />
        </>
    )
}

export default State
