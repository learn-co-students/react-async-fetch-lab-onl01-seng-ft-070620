import React from 'react'


class App extends React.Component {

    componentDidMount() {
        let url= "http://api.open-notify.org/astros.json"
        fetch(url)
        .then(r=>r.json())
        .then(astros=> {
            console.log(astros)
        })
    }

    render(){
    }
}
export default App