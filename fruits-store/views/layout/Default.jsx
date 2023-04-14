import React from 'react'

module.exports = function DefaultLayout({ title, children })
{
    return (
        <html>
            <head>
                <title>
                    {title}
                </title>
            </head>
            <body>
                <h1>{title}</h1>
                {children}
            </body>
        </html>
    )
}
