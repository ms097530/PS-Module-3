const React = require('react')
const DefaultLayout = require('../layout/Default')

function Index({ fruits, title })
{
    // console.log(title)
    return (
        <DefaultLayout title={title}>
            <nav>
                <a href="/fruits/new">Create a new fruit</a>
            </nav>
            <div>
                <h2>Fruits</h2>
                <hr />
                {
                    fruits.map((fruit, i) =>
                    {
                        return (
                            <React.Fragment key={fruit._id}>
                                <div>
                                    <h3>
                                        <a href={`/fruits/${fruit._id}`}>
                                            Check out {fruit.name}
                                        </a>
                                    </h3>
                                    <a href={`/fruits/${fruit._id}/edit`}>Edit</a>
                                    {/* does GET by default, or can use POST */}
                                    {/* need special configuration to do other requests */}
                                    <form action={`/fruits/${fruit._id}?_method=DELETE`}
                                        method="POST">
                                        <input type="submit"
                                            value="DELETE" />
                                    </form>
                                </div>
                                <hr />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </DefaultLayout>
    )
}

module.exports = Index
