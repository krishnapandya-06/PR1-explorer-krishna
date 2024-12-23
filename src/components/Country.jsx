import React, { useState } from 'react'
import State from "./State"


function Country({ country }) {

    const [state, setState] = useState("Gujarat")
    return (
        <>
            <h2>Country: {country}</h2>
            <State state={state} />
        </>
    )
}

export default Country
