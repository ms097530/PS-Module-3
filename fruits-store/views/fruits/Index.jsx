const React = require('react')

function Index({ fruits })
{
    return (
        <>
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
        </>
    )
}

module.exports = Index
