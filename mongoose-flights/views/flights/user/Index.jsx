import React from 'react'

export default function Index({ flights })
{
    return (
        <div>
            <h1>Flights</h1>
            {
                flights ?
                    flights.map((flight) =>
                        <div>
                            <h2>{flight.flightNo}</h2>
                            <h3>{flight.airline}</h3>
                            <h3>{flight.departs}</h3>
                        </div>
                    )
                    : <h2>No flights found</h2>
            }
        </div>
    )
}
