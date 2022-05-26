import React, { Component } from 'react'

class CounterApp extends Component {
    state = {
        count: 0,
        name: ''
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props)
    }

    componentDidMount() { // calling api and set state
        console.log('componentDidMount')
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        // called after render
        if (prevState.count !== this.state.count) {
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default CounterApp;