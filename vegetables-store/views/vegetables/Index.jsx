import React from 'react'

export default function Index({ vegetables })
{
    const result = vegetables.length > 0 ? <ul>
        {
            vegetables.map(veg => (
                <li>
                    <a href={`/vegetables/${veg._id}`}>{veg.name}</a>
                </li>
            ))
        }
    </ul> : <h2>No vegetables to be had! T_T</h2>

    return (
        <div>
            <h1>Look at all these veggies!</h1>
            <div>
                {result}
            </div>
        </div>
    )
}
