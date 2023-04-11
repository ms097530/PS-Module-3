import React from 'react'

export default function Index({ vegetables })
{
    const result = vegetables.length > 0 ? <ul>
        {
            vegetables.map(veg => (
                <li key={veg._id}>
                    <a href={`/vegetables/${veg._id}`}>{veg.name}</a>
                </li>
            ))
        }
    </ul> : <h2>No vegetables to be had! T_T</h2>

    return (
        <div>
            <nav>
                <a href="/vegetables/new">Create New Vegetable</a>
            </nav>
            <h1>Look at all these veggies!</h1>
            <div>
                {result}
            </div>
        </div>
    )
}
