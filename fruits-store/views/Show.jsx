const React = require('react')

function Show(props)
{
    // useEffect and useState don't work because the package does not support *mounting*
    // still used like other template engines, just with JSX syntax
    const [count, setCount] = React.useState(0)
    React.useEffect(() =>
    {
        console.log('USE EFFECT')
    }, [])
    console.log(props)

    const handleClick = () =>
    {
        setCount(prevCount => prevCount + 1)
    }

    const output = props.fruit.message
        ? <h2>{props.fruit.message}</h2>
        : (
            <>
                <h2>{props.fruit.name}</h2>
                <p>Color: {props.fruit.color}</p>
                <p>Ready to eat: {props.fruit.readyToEat ? 'good to go' : 'not on your life'}</p>
            </>
        )

    return (
        <div>

            <h1>Show Page</h1>

            <div>
                {output}
            </div>

            <div>
                <p>{count}</p>
                <button onClick={handleClick}>+</button>
                <div>
                    <a href="/">Go Home</a>
                </div>
            </div>

        </div>
    )
}

// class Show extends React.Component
// {
//     render()
//     {
//         return <h1>Show Page</h1>
//     }
// }

module.exports = Show