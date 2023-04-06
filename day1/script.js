const fs = require('fs')
const request = require('request')
const daysOfWeek = require('./days-of-the-week')
const random = require('./utils/random')
const circle = require('./utils/circle')
const chalk = require('chalk')

console.log('Hello Node')

const heading = chalk.bold.blue
const warning = chalk.italic.red

// ============== Random module ==============
console.log(heading('============== RANDOM =============='))
console.log(random(0, 5))

// ============== Circle module ==============
console.log(warning('============== CIRCLE =============='))
console.log(circle.area(5))
console.log(circle.circumference(5))

// ============== NPM external module ==============

request('http://jsonplaceholder.typicode.com/users', (err, res, body) =>
{
    console.log('============== REQUEST ==============')
    if (err)
    {
        console.log(err)
        return
    }
    console.log('in request')
    console.log(typeof body)
    console.log(JSON.parse(body)[0])
    // console.log('Error:', err)
    // console.log('Res:', res)
    // console.log('Body:', body)
})

// ============== Local module ==============
// equal to exports from that file
// { weekdays: [...], getWeekday: function() }
console.log('============== DAYS OF WEEK ==============')
console.log(daysOfWeek)
console.log(daysOfWeek.getWeekday(3))



// ============== File system ==============
console.log('============== FILE SYSTEM ==============')
console.log(typeof fs)

// write file
// cb function gets called after writing file
fs.writeFile('', 'I AM JUST A TEST, DUMMY', function (e)
{
    try
    {
        if (e)
        {
            // console.log(e)
            console.log('throwing...')
            // with or without "new" keyword new Error object is created
            throw Error(e.message)
        }
        console.log('AHHHH I WROTE')
    }
    catch (e)
    {
        console.log('handling error...')
        // console.log(e)
        console.log('tracing...')
        // console.trace(e)
    }
})

fs.appendFile('test.txt', '\nAHHH EXTRA TEXT', (e) =>
{
    console.log('APPENDED')
})