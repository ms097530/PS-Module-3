const React = require('react')
const DefaultLayout = require('../layout/Default')


module.exports = function Edit({ fruit, title })
{
    return (
        <DefaultLayout title={title}>

            <div>

                <h2>Edit Page</h2>

                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action={`/fruits/${fruit._id}?_method=PUT`} method="post">

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text"
                            name="name"
                            id="name"
                            defaultValue={fruit.name} />
                    </div>
                    <div>
                        <label htmlFor="color">Color:</label>
                        <input type="text"
                            name="color"
                            id="color"
                            defaultValue={fruit.color} />
                    </div>
                    <div>
                        <label htmlFor="readyToEat">Is Ready to Eat:</label>
                        <input type="checkbox"
                            name="readyToEat"
                            id="readyToEat"
                            defaultChecked={fruit.readyToEat ? 'on' : ''} />
                    </div>

                    <input type="submit" value="Update" />

                </form>

                <div>
                    <a href="/fruits">Go Home</a>
                </div>

            </div>
        </DefaultLayout>
    )
}
