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
                for (let astro of astrosObj.people) {
                    this.addAstronaut(astro)
                }
            })
    }

    addAstronaut = (astro) => {
        debugger
        let newAstro = <div>{astro.name} - {astro.craft}</div>
        this.setState(prevState => ({
            astronauts: prevState.astronauts.push(newAstro)
        }))
    }

    render() {
        return (
            <div>
                {this.state.astronauts}
            </div>
        )
    }
}