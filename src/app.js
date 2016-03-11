import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({onChange, children, active, value}) => {
    let style = {
        background: active ? "green" : "gray",
        padding: 30,
        border: "none",
        margin: 20,
        display: "block",
        color: "#fff",
        outline: "none",
        fontSize: "2em"
    }

    const handleClick = (e) => {
        e.preventDefault()
        onChange(value)
    }

    const p = (e) => e.preventDefault()

    return (
        <button style={style} onMouseDown={p} onClick={p} onTouchStart={handleClick}>{children}</button>
    )
}

const buttons = [
    "Male",
    "Female",
    "Children",
]

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            active: null
        }
        this.change = (value) => {
            this.setState({
                active: value
            })
        }
    }
    render() {
        const b = buttons.map((value, i) => {
            return (
                <Button onChange={this.change} value={i} active={this.state.active === i}>{value}</Button>
            )
        })
        return (
            <div>
                {b}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app-container'))
