import React from 'react'

const ERRORS = [
    'we have no idea what happened.',
    'a match was not found.',
    'the operation failed.',
    'access was denied.'
]

export default function NotFound({ error })
{

    let errorMsg

    switch (error)
    {
        case 'notfound': errorMsg = ERRORS[1]; break;
        case 'failed': errorMsg = ERRORS[2]; break;
        case 'denied': errorMsg = ERRORS[3]; break;
        default: errorMsg = ERRORS[0]; break;
    }

    return (
        <div>
            <h1>You wound up here for some weird reason</h1>
            <h2>Apparently... {errorMsg}</h2>
        </div>
    )
}
