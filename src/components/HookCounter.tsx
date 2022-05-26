import React, { useEffect } from 'react'

const HookCounter = () => {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('');

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>
                useEffect - Click {count} times
            </button>
        </div>
    )
}

export default HookCounter