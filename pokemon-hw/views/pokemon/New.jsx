import React from 'react'

export default function New()
{
    return (
        <div>
            <h1>Create new Pokemon entry</h1>
            <form action="/pokemon" method="post">
                <label htmlFor="dexId">Pokedex ID:</label>
                <input type="number" min="1" name="dexId" />
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <label htmlFor="types">Types:</label>
                <select name="types" multiple>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="flying">Flying</option>
                    <option value="rock">Rock</option>
                    <option value="ground">Ground</option>
                    <option value="bug">Bug</option>
                    <option value="psychic">Psychic</option>
                    <option value="ghost">Ghost</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="fairy">Fairy</option>
                </select>
                <input type="submit" value="Add Pokemon" />
            </form>
        </div>
    )
}
