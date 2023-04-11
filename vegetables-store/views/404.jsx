import React from 'react'

const ERRORS = [
    'we have no idea.',
    'access was denied.',
    'a match was unable to be found.',
    'the desired operation failed'
]

export default function NotFound({ error })
{
    let msg
    switch (error)
    {
        case 'denied': msg = ERRORS[1]; break;
        case 'notfound': msg = ERRORS[2]; break;
        case 'failed': msg = ERRORS[3]; break;
        default: msg = ERRORS[0]; break;
    }

    return (
        <div>
            <h1>WHAT ARE YOU DOING HERE??</h1>
            <h2>Apparently... {msg}</h2>
            <a href="/vegetables">Go Home</a>
        </div>
    )
}
