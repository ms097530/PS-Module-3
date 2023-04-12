import React from 'react'

export default function Show({ pokemon })
{
    return (
        <div>
            <h1>{pokemon.name.toUpperCase()}</h1>
            <div>
                <a href="/pokemon">Go Home</a>
            </div>
        </div>
    )
}
