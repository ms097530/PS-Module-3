const React = require('react')
const DefaultLayout = require('../layout/Default')

module.exports = function New()
{
    return (
        <DefaultLayout title="Create new log, Captain">
            <div>
                <form action="/logs" method="post">
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div>
                        <label htmlFor="entry">Entry:</label>
                        <textarea name="entry" id="entry" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <label htmlFor="shipIsBroken">Ship broken:</label>
                        <input type="checkbox" name="shipIsBroken" id="shipIsBroken" />
                    </div>
                    <input type="submit" value="Submit Log" />
                </form>
            </div>
        </DefaultLayout>
    )
}
