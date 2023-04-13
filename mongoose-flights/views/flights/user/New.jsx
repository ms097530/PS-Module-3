import React from 'react'

export default function New({ now })
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
                    <label htmlFor="airline">Airline:</label>
                    <select name="airline">
                        <option value="American" >American</option>
                        <option value="Southwest" >Southwest</option>
                        <option value="United" >United</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="departs">Date:</label>
                    <input type="datetime-local" name="departs" min={now} />
                </div>

                <input type="submit" value="Add Flight" />
            </form>
            <a href="/flights">Go Home</a>
        </div>
    )
}
