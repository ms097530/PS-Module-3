const React = require('react')
const DefaultLayout = require('../layout/Default')

function Show(props)
{
    // useEffect and useState don't work because the package does not support *mounting*
    // still used like other template engines, just with JSX syntax
    const [count, setCount] = React.useState(0)
    React.useEffect(() =>
    {
        console.log('USE EFFECT')
    }, [])
    // console.log(props)

    const handleClick = () =>
    {
        setCount(prevCount => prevCount + 1)
    }

    const output = props.fruit.message
        ? <h3>{props.fruit.message}</h3>
        : (
            <>
                <h3>{props.fruit.name}</h3>
                <p>Color: {props.fruit.color}</p>
                <p>Ready to eat: {props.fruit.readyToEat ? 'good to go' : 'not on your life'}</p>
            </>
        )

    return (
        <DefaultLayout title={props.title}>
            <div>
                <h2>Show Page</h2>
                <div>
                    {output}
                </div>
                <div>
                    <p>{count}</p>
                    <button onClick={handleClick}>+</button>
                    <div>
                        <a href="/fruits">
                            Back to fruits
                        </a>
                    </div>
                    <div>
                        <a href="/">Go Home</a>
                    </div>
                </div>
            </div>
        </DefaultLayout>
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