import React, {Component} from 'react'

export default class App extends Component {
    constructor() {
        super()
        this.state = {astronauts: []}
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(r => r.json())
            .then(astrosObj => {
                this.setState({
                    astronauts: astrosObj.people
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.astronauts.map(astro => <h4>{astro.name} - {astro.craft}</h4>)}
            </div>
        )
    }
}