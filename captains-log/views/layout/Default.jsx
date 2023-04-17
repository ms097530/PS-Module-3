const React = require('react')

module.exports = function DefaultLayout({ title, children })
{
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <div>
          <nav>
            <a href="/logs">Home</a>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
