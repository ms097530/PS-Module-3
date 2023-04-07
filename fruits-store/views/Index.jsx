const React = require('react')

function Index({ fruits })
{
    return (
        <div>
            <h1>Fruits</h1>
            <hr />
            {
                fruits.map((fruit, i) =>
                {
                    return (
                        <React.Fragment key={fruit.name
                        }>
                            <div>
                                <h2>
                                    <a href={`/fruits/${i}`}>
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
    )
}

module.exports = Index
