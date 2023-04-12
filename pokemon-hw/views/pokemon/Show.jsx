import React from 'react'

export default function Show({ pokemon })
{

    return (
        <div>
            <h2>#{pokemon.pokedexId}</h2>
            <h1>{pokemon.name.toUpperCase()}</h1>
            <p>Types: {pokemon.types.map(type => <span>{type} </span>)}</p>
            <div>
                <a href="/pokemon">Go Home</a>
            </div>
        </div>
    )
}
