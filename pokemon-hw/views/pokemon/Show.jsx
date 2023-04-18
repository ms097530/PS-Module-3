import React from 'react'

export default function Show({ pokemon })
{

    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h3>#{pokemon.pokedexId}</h3>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <p>Types: {pokemon.types.map((type, i) => <span key={i}>{type} </span>)}</p>
            <img src={pokemon.imgUrl} />
            <div>
                <a href="/pokemon">Go Home</a>
            </div>
        </div>
    )
}
