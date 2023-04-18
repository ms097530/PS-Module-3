const router = require('express').Router()
const fs = require('fs').promises
const Log = require('../models/Log')


/**
 * * INDEX ROUTE
 */
router.get('/', (req, res) =>
{
    Log.find((err, foundLogs) =>
    {
        if (err || !foundLogs)
        {
            return res.status(404).redirect('/404')
        }
        return res.render('logs/Index', { logs: foundLogs })
    })
})

/**
 * * NEW FORM ROUTE
 */
router.get('/new', (req, res) =>
{
    res.render('logs/New')
})

/**
 * * CREATE ROUTE
 */
router.post('/', (req, res) =>
{
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false

    Log.create(req.body, (err, createdLog) =>
    {
        if (err || !createdLog)
        {
            return res.status(404).redirect('/404')
        }

        return res.redirect('/logs')
    })

})

/**
 * * SEED ROUTE
 */
router.get('/seed', async (req, res) =>
{
    // using readFile from fs promises
    const buf = await fs.readFile('./seed/data.json')
    // console.log(buf.toString())
    // convert buffer to string and parse the JSON to usable data
    const seedData = await JSON.parse(buf.toString())
    const result = await Log.insertMany(seedData)
    // console.log(result)
    res.redirect('/logs')
})

/**
 * * EDIT FORM ROUTE
 */
router.get('/:id/edit', (req, res) =>
{
    Log.findById(req.params.id, (err, foundLog) =>
    {
        if (err || !foundLog)
        {
            return res.status(404).redirect('/404')
        }
        return res.render('logs/Edit', { log: foundLog })
    })
})

/**
 * * UPDATE ROUTE
 */
router.put('/:id', (req, res) =>
{
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false

    Log.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, (err, updatedLog) =>
    {
        if (err || !updatedLog)
        {
            return res.status(404).redirect('/404')
        }
        return res.redirect('/logs')
    })
})

/**
 * * SHOW ROUTE
 */
router.get('/:id', (req, res) =>
{
    Log.findById(req.params.id, (err, foundLog) =>
    {
        if (err || !foundLog)
        {
            return res.status(404).redirect('/404')
        }
        return res.render('logs/Show', { log: foundLog })
    })
})

/**
 * * DELETE ROUTE
 */
router.delete('/:id', (req, res) =>
{
    Log.findByIdAndDelete(req.params.id, { new: true }, (err, deletedLog) =>
    {
        if (err || !deletedLog)
        {
            return res.status(404).redirect('/404')
        }

        return res.redirect('/logs')
    })
})

module.exports = router