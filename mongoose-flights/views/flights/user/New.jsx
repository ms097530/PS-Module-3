import React from 'react'

export default function New()
{
    return (
        <div>
            <h1>New Flight</h1>
            <form action="/flights" method="post">
                <div>
                    <label htmlFor="flightNo">Flight:</label>
                    <input type="number" name="flightNo" min="10" max="999" />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="datetime-local" name="date" />
                </div>

                <input type="submit" value="Add Flight" />
            </form>
            <a href="/flights">Go Home</a>
        </div>
    )
}
