import React from "react"
import DefaultLayout from "../layout/Default"

export default function Index({ logs })
{
    const logsDisplay = logs.length <= 0 ?
        <h3>No logs found</h3>
        : logs.map((log) => (
            <React.Fragment key={log._id}>
                <h2>
                    <a href={`/logs/${log._id}`}>{log.title}</a>
                </h2>
                <h3>Status: {log.shipIsBroken ? 'Vessel compromised' : 'Operational'}</h3>

                <a href={`/logs/${log._id}/edit`}>EDIT</a>
                <form action={`/logs/${log._id}?_method=DELETE`} method="post">
                    <input type="submit" value="DELETE" />
                </form>
                <hr />
            </React.Fragment>
        ))
    return (
        <DefaultLayout title="Captain's Logs">
            <div>
                <h2>Captain's Log Entries</h2>
                <hr />
                {logsDisplay}
            </div>
        </DefaultLayout>
    )
}
