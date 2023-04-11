import React from 'react'

export default function New()
{
    return (
        <div>
            <h1>Create new vegetable</h1>
            <form action="/vegetables" method="POST">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' />
                </div>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input type="text" id='color' name='color' />
                </div>
                <div>
                    <label htmlFor="readyToEat">Ready to eat:</label>
                    <input type="checkbox" id='readyToEat' name='readyToEat' />
                </div>

                <input type="submit" value="Create vegetable" />
            </form>
            <div>
                <a href="/vegetables">Go Home</a>
            </div>
        </div>
    )
}
