const express = require('express')
const fs = require('fs')

const port = 3000
const app = express()

app.engine('madeline', (filePath, options, callback) =>
{
    fs.readFile(filePath, (err, content) =>
    {
        // if an error occurs, pass error to callback
        if (err) return callback(err)

        // if no error, parse template file
        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>')

        // pass null in place of error, then pass rendered content
        return callback(null, rendered)
    })
})

app.set('views', './views')
app.set('view engine', 'madeline')

app.get('/', (req, res) =>
{
    res.render('template', { title: 'Heyo', message: 'Ricky Bobby', content: 'In the house' })
})

app.listen(port, () =>
{
    console.log(`Listening on port ${port}`)
})