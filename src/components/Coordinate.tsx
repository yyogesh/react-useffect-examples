import React, { Component } from 'react'

class Coordinate extends Component {
    state = {
        x: 0,
        y: 0
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props)
    }

    logMousePosition = (e: any) => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}

export default Coordinate;