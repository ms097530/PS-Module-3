import React from 'react'

export default function Index({ pokemon })
{
    const result = pokemon.length > 0 ?
        pokemon.map(mon => (
            <li key={mon._id}>
                <a href={`/pokemon/${mon._id}`}>{mon.name}</a>
            </li>
        ))
        : <h2>No pokemon to be found!</h2>

    return (
        <div>
            <nav>
                <a href="/pokemon/new">Create new Pokemon</a>
            </nav>
            <h1>Pokemon</h1>
            <ul>
                {result}
            </ul>
        </div>
    )
}
