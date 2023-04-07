const React = require('react')

function Index({ fruits })
{
    return (
        <div>
            <h1>Fruits</h1>
            <hr />
            {
                fruits.map(fruit =>
                {
                    return (
                        <React.Fragment key={fruit.name
                        }>
                            <div>
                                <h2>{fruit.name}</h2>
                                <p>Color: {fruit.color}</p>
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
