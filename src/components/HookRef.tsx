import React, { useEffect, useRef, useState } from 'react'

const HookRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<any>();

    useEffect(() => {
        interValRef.current = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
        return () => {
            clearInterval(interValRef.current)
        }
    }, [])

    return (
        <div>
            HookRef - {timer} -
            <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button>
        </div>
    )
}

export default HookRef