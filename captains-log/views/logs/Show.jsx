import React from 'react'
import DefaultLayout from '../layout/Default'

export default function Show({ log })
{
    console.log(log)
    return (
        <DefaultLayout title={'Captain\'s Log - ' + log.title}>
            <div>
                <h2>{log.title}</h2>
                <h3>Log made on: {log.createdAt.toString()}</h3>
                <h3>Ship status: {log.shipIsBroken ? 'compromised' : 'operational'}</h3>
                <p>{log.entry}</p>
            </div>
        </DefaultLayout>
    )
}
