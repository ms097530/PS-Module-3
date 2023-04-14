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
                <h1>Fruits</h1>
                <hr />
                {
                    fruits.map((fruit, i) =>
                    {
                        return (
                            <React.Fragment key={fruit._id
                            }>
                                <div>
                                    <h2>
                                        <a href={`/fruits/${fruit._id}`}>
                                            Check out {fruit.name}
                                        </a>
                                    </h2>
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
