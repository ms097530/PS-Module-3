const React = require('react')
const DefaultLayout = require('../layout/Default')

function New({ title })
{
    return (
        <DefaultLayout title={title}>
            <div>
                <h1>New Fruit Page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action="/fruits" method="POST">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="color">Color:</label>
                        <input type="text" name="color" id="color" />
                    </div>
                    <div>
                        <label htmlFor="readyToEat">Is Ready to Eat:</label>
                        <input type="checkbox" name="readyToEat" id="readyToEat" />
                    </div>
                    <input type="submit" value="Create New Fruit" />
                </form>
                <div>
                    <a href="/fruits">Go Home</a>
                </div>
            </div>
        </DefaultLayout>
    )
}

module.exports = New