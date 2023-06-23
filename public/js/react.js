const Counter = () => {
    const [count, setCount] = React.useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

const Message = () => {
    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement('h1', null, 'Hello, React!')
    // )
    ///////////////////////////////////////////////////////
    /* JSX */
    return (
        <div>
            <h2>Hello, React!</h2>
            <Counter />
        </div>
    )
}

  // Render the React component
ReactDOM.render(
    // React.createElement(App),
    ////////////////////////////
    /* JSX */
    <Message />,
    document.getElementById('msg')
)