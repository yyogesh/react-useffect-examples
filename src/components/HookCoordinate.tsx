import React, { useEffect, useState } from 'react'

const HookCoordinate = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0);

    const logMousePosition = (e: any) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);

        return () => { //componentWillUnmount
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []) //componentDidMount //componentDidUpdate

    return (
        <div>
            Hooks - X - {x} Y - {y}
        </div>
    )
}

export default HookCoordinate