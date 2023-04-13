import React from 'react'

export default function Index({ flights })
{
    console.log(flights)

    const result = flights.data ?
        flights.data.map((flight) =>
            <div key={flight._id}>
                <h2>{flight.flightNo}</h2>
                <h3>{flight.airline}</h3>
                <h3>{flight.departs.toString()}</h3>
            </div>
        )
        : <h2>No flights found</h2>


    return (
        <div>
            <nav>
                <a href="/flights/new">Book new flight</a>
            </nav>
            <h1>Flights</h1>
            {result}
            {
                flights.error && <h3>Some error occurred...</h3>
            }
        </div>
    )
}
