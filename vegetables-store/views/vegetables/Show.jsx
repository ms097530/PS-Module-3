import React from 'react'

export default function Show({ vegetable })
{
    return (
        <div>
            <h1>{vegetable.name}</h1>
            <p>Color: {vegetable.color}</p>
            <p>Ready to eat: {vegetable.readyToEat}</p>
            <a href="/vegetables">Go Home</a>
        </div>
    )
}
