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

    // const handleClick = () =>
    // {
    //     setCount(prevCount => prevCount + 1)
    // }

    return (
        <div>
            <h1>Show Page</h1>
            <p>{count}</p>
            {/* <button onClick={handleClick}>+</button> */}
            <a href="/">Go Home</a>
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