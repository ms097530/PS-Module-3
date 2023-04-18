import React from 'react'
import DefaultLayout from '../layout/Default'

export default function Edit({ log })
{
    return (
        <DefaultLayout title="Create new log, Captain">
            <div>
                <form action={`/logs/${log._id}?_method=PUT`} method="post">
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" id="title" defaultValue={log.title} />
                    </div>
                    <div>
                        <label htmlFor="entry">Entry:</label>
                        <textarea name="entry" id="entry" cols="30" rows="10" defaultValue={log.entry}></textarea>
                    </div>
                    <div>
                        <label htmlFor="shipIsBroken">Ship broken:</label>
                        <input type="checkbox"
                            name="shipIsBroken"
                            id="shipIsBroken"
                            defaultChecked={log.shipIsBroken ? 'on' : ''} />
                    </div>
                    <input type="submit" value="Submit Log" />
                </form>
            </div>
        </DefaultLayout>
    )
}
