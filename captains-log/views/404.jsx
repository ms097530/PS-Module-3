const React = require('react')
const DefaultLayout = require('./layout/Default')

export default function NotFound()
{
    return (
        <DefaultLayout title="Page Not Found">
            <div>
                <h1>You won't find anything here, move along...</h1>
            </div>
        </DefaultLayout>
    )
}
